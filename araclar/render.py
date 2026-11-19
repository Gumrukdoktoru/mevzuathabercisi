"""Giriş videosu üretici.
Kullanım:
  python3 render.py all  <vdata.json> <çıktı_klasörü>   -> intro.mp4 + poster.jpg
  python3 render.py stills <vdata.json> t1 t2 ...       -> still_XX.png kareleri (kontrol için)
Gereken: ffmpeg, python playwright, Chrome (/usr/bin/google-chrome) ya da playwright chromium.
intro.html ve fonts/ klasörü bu dosyayla aynı klasörde olmalı.
"""
import sys, os, json, subprocess, asyncio, shutil
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
URL = "file://" + os.path.join(HERE, "intro.html")
FPS = 30
SCENES = [("a", 0, 102), ("b", 102, 216), ("c", 216, 348), ("d", 348, 450)]
VDATA = None


async def page_ready(p):
    kw = {"args": ["--no-sandbox"]}
    if os.path.exists("/usr/bin/google-chrome"):
        kw["executable_path"] = "/usr/bin/google-chrome"
    browser = await p.chromium.launch(**kw)
    page = await browser.new_page(viewport={"width": 1280, "height": 720}, device_scale_factor=1)
    if VDATA is not None:
        await page.add_init_script("window.VDATA=" + json.dumps(VDATA, ensure_ascii=False) + ";")
    await page.goto(URL)
    await page.wait_for_function("window.READY===true")
    return browser, page


async def stills(times):
    async with async_playwright() as p:
        browser, page = await page_ready(p)
        for t in times:
            await page.evaluate(f"draw({t})")
            await page.screenshot(path=os.path.join(HERE, f"still_{t:05.2f}.png"))
        await browser.close()


async def scene(name, f0, f1):
    out = os.path.join(HERE, f"scene_{name}.mp4")
    tmp = os.path.join(HERE, f"scene_{name}.part.mp4")
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg", "-i", "-",
           "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", "-r", str(FPS), tmp]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    async with async_playwright() as p:
        browser, page = await page_ready(p)
        for f in range(f0, f1):
            await page.evaluate(f"draw({f / FPS})")
            buf = await page.screenshot(type="jpeg", quality=92)
            proc.stdin.write(buf)
        await browser.close()
    proc.stdin.close()
    rc = proc.wait()
    if rc == 0:
        os.replace(tmp, out)
    print(name, "rc", rc, flush=True)
    return rc


async def render_all(outdir):
    rcs = await asyncio.gather(*[scene(n, a, b) for (n, a, b) in SCENES])
    if any(rcs):
        sys.exit("sahne üretimi başarısız")
    lst = os.path.join(HERE, "list.txt")
    with open(lst, "w") as f:
        for n, _, _ in SCENES:
            f.write(f"file 'scene_{n}.mp4'\n")
    os.makedirs(outdir, exist_ok=True)
    tmp = os.path.join(outdir, "intro.part.mp4")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst,
                    "-c", "copy", "-movflags", "+faststart", tmp], check=True)
    os.replace(tmp, os.path.join(outdir, "intro.mp4"))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", "10.8", "-i", os.path.join(outdir, "intro.mp4"),
                    "-frames:v", "1", "-q:v", "3", os.path.join(outdir, "poster.jpg")], check=True)
    print("tamam:", os.path.join(outdir, "intro.mp4"), flush=True)


async def main():
    global VDATA
    mode = sys.argv[1]
    VDATA = json.load(open(sys.argv[2], encoding="utf-8"))
    if mode == "stills":
        await stills([float(x) for x in sys.argv[3:]])
    elif mode == "all":
        await render_all(sys.argv[3] if len(sys.argv) > 3 else os.path.join(HERE, "out"))


asyncio.run(main())
