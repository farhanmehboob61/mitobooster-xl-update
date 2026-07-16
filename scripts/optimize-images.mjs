import sharp from "sharp"
import { readdir, stat, rename } from "node:fs/promises"
import { join, extname } from "node:path"

const DIR = "public/images"
const MAX_WIDTH = 1600 // no source image needs to be wider than this

const files = await readdir(DIR)

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue

  const path = join(DIR, file)
  const before = (await stat(path)).size
  const img = sharp(path)
  const meta = await img.metadata()

  // Only touch images that are oversized or heavy
  const oversized = meta.width && meta.width > MAX_WIDTH
  const heavy = before > 250 * 1024
  if (!oversized && !heavy) continue

  let pipeline = sharp(path)
  if (oversized) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  const tmp = path + ".tmp"
  if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9, quality: 80, effort: 8 }).toFile(tmp)
  } else {
    await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(tmp)
  }

  const after = (await stat(tmp)).size
  if (after < before) {
    await rename(tmp, path)
    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB` +
        (oversized ? ` (resized to ${MAX_WIDTH}px)` : "")
    )
  } else {
    // Keep original if optimization didn't help
    const { unlink } = await import("node:fs/promises")
    await unlink(tmp)
    console.log(`${file}: kept original (${(before / 1024).toFixed(0)}KB)`)
  }
}

console.log("Done.")
