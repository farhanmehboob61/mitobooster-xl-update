import sharp from "sharp"
import { statSync } from "node:fs"

const SRC = "public/images/vital-sphere-360-hero.png"

// Pre-generate compact, static WebP renditions of the LCP hero image so the
// browser never has to wait on Next.js's on-demand image optimizer (which is
// cold on every fresh Lighthouse run and dominates mobile LCP under throttling).
const targets = [
  { out: "public/images/vital-sphere-360-hero-800.webp", width: 800, quality: 72 },
  { out: "public/images/vital-sphere-360-hero-1200.webp", width: 1200, quality: 74 },
  { out: "public/images/vital-sphere-360-hero-1600.webp", width: 1600, quality: 76 },
]

for (const t of targets) {
  await sharp(SRC)
    .resize({ width: t.width, withoutEnlargement: true })
    .webp({ quality: t.quality, effort: 6 })
    .toFile(t.out)
  const kb = (statSync(t.out).size / 1024).toFixed(1)
  console.log(`${t.out} -> ${kb} KB (w=${t.width})`)
}

console.log("done")
