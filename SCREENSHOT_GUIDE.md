# 📸 How to Replace Project Placeholders with Real Screenshots

## Overview
Your portfolio currently has enhanced placeholder images. Replace them with actual screenshots from your deployed projects for maximum impact.

## Projects to Screenshot

### 1. ✅ Godown AI (WMS)
- **Live URL**: https://wmsai.netlify.app/
- **File to replace**: `/public/assets/projects/wms-ai.svg`
- **Output**: `wms-ai.png` (1920x1080 recommended)
- **What to capture**:
  - Dashboard with warehouse metrics
  - Real-time data showing
  - AI insights section

### 2. ✅ EAMCET Admission Analytics
- **Live URL**: https://svgroups.netlify.app/
- **File to replace**: `/public/assets/projects/eamcet.svg`
- **Output**: `eamcet.png` (1920x1080 recommended)
- **What to capture**:
  - Overall analytics dashboard
  - KPI metrics
  - Data visualizations

### 3. ❓ J127 Sunday School Tracker
- **Status**: No live URL available
- **File**: `/public/assets/projects/placeholder-j127.svg`
- **Alternative**: Keep enhanced placeholder or provide screenshots from local demo

### 4. ❓ IT Service Desk ML Analytics
- **Status**: No live URL available
- **File**: `/public/assets/projects/placeholder-ml.svg`
- **Alternative**: Keep enhanced placeholder or provide ML dashboard screenshots

### 5. ❓ Library Analytics (KMEC LMS)
- **Status**: No live URL available
- **File**: `/public/assets/projects/placeholder-analytics.svg`
- **Alternative**: Keep enhanced placeholder or provide dashboard screenshots

## Method 1: Using Chrome DevTools (Easiest)

1. Open your project URL in Chrome: `https://wmsai.netlify.app/`
2. Press `F12` to open DevTools
3. Go to **More tools** → **Rendering** → **Capture screenshot**
4. Or manually: Right-click on page → **Take screenshot**
5. Crop to 1920x1080 if needed
6. Save as PNG in `/public/assets/projects/`

## Method 2: Using Online Screenshot Tools

1. **ScreenshotOne** (Free): https://screenshotone.com/
   - Paste URL
   - Set viewport to 1920x1080
   - Download PNG

2. **Screenshot.rocks** (Free): https://screenshot.rocks/
   - Paste URL
   - Customize resolution
   - Download

3. **Puppeteer (Programmatic)**:
   ```bash
   npm install puppeteer
   # Then create a script to capture screenshots
   ```

## Method 3: Built-in macOS/Windows Tools

**macOS:**
```bash
# Capture URL with screencapture
screencapture -x -t png screenshot.png
```

**Windows:**
- Use Snipping Tool: `Win + Shift + S`
- Then crop and save

## Optimization: Compress Images

After capturing, compress for web:

```bash
# Using ImageMagick
convert input.png -quality 85 -resize 1920x1080 output.png

# Using ffmpeg
ffmpeg -i input.png -vf scale=1920:1080 output.png
```

## Update the Projects File

Once you have PNG files, update `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Godown AI (WMS)",
    image: "/assets/projects/wms-ai.png",  // Change from .svg to .png
    // ... rest of data
  },
  // ... other projects
];
```

## File Naming Convention

Use consistent naming:
- ✅ Godown AI: `wms-ai.png`
- ✅ EAMCET: `eamcet.png`
- ✅ J127: `j127-tracker.png`
- ✅ IT Service Desk: `ml-analytics.png`
- ✅ Library Analytics: `library-analytics.png`

## Recommended Screenshot Dimensions

- **Width**: 1920px (full desktop width)
- **Height**: 1080px (standard viewport height)
- **Format**: PNG (better compression than SVG for photos)
- **Quality**: 85-90% compression
- **File size target**: < 500KB per image

## Steps to Deploy Updated Portfolio

1. **Capture screenshots** from your live projects
2. **Optimize images** using ImageMagick or online tools
3. **Copy PNG files** to `/public/assets/projects/`
4. **Update `projects.ts`** to reference .png files
5. **Build**: `npm run build`
6. **Test locally**: `npm run preview`
7. **Push to GitHub**: `git add . && git commit && git push`

## Auto-Deploy

Your portfolio auto-deploys on Netlify when you push to GitHub main branch.

---

## Quick Command to Batch Update File Paths

Once you have all PNG screenshots ready:

```bash
# Linux/macOS: Rename all enhanced SVGs to use PNG instead
for file in /public/assets/projects/*-enhanced.svg; do
  name=$(basename "$file" -enhanced.svg)
  echo "Update: ${name}.svg → ${name}.png"
done
```

## Checklist

- [ ] Screenshot WMS AI from https://wmsai.netlify.app/
- [ ] Screenshot EAMCET from https://svgroups.netlify.app/
- [ ] Optimize all images (compress to < 500KB)
- [ ] Copy PNG files to `/public/assets/projects/`
- [ ] Update `projects.ts` to reference PNG files
- [ ] Build and test locally
- [ ] Push to GitHub
- [ ] Verify on live site

---

**Need help?** The enhanced placeholders stay in place until you replace them with real images.
