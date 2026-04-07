#!/usr/bin/env node

/**
 * Screenshot Capture Script for Portfolio Projects
 * Requires: npm install puppeteer
 *
 * Usage: node capture-screenshots.js
 *
 * Automatically captures screenshots from live project URLs and saves them to /public/assets/projects/
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'Godown AI (WMS)',
    url: 'https://wmsai.netlify.app/',
    filename: 'wms-ai.png',
    waitFor: 3000, // Wait 3s for animations
  },
  {
    name: 'EAMCET Admission Analytics',
    url: 'https://svgroups.netlify.app/',
    filename: 'eamcet.png',
    waitFor: 3000,
  },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'projects');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ Created directory: ${outputDir}`);
}

async function captureScreenshots() {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const project of projects) {
      try {
        console.log(`\n📸 Capturing: ${project.name}`);
        console.log(`   URL: ${project.url}`);

        const page = await browser.newPage();

        // Set viewport to desktop size
        await page.setViewport({
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
        });

        // Navigate to URL with longer timeout
        await page.goto(project.url, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Wait for animations/content to load
        await page.waitForTimeout(project.waitFor);

        // Capture screenshot
        const outputPath = path.join(outputDir, project.filename);
        await page.screenshot({
          path: outputPath,
          type: 'png',
          quality: 85,
        });

        const fileSize = fs.statSync(outputPath).size / 1024; // KB
        console.log(`   ✅ Saved: ${project.filename} (${fileSize.toFixed(2)} KB)`);

        await page.close();
      } catch (error) {
        console.error(`   ❌ Error capturing ${project.name}:`, error.message);
      }
    }

    console.log('\n✅ Screenshot capture complete!');
    console.log(`📁 Screenshots saved to: ${outputDir}`);
    console.log('\n📝 Next steps:');
    console.log('   1. Update src/data/projects.ts to use .png instead of .svg');
    console.log('   2. Run: npm run build');
    console.log('   3. Test locally: npm run preview');
    console.log('   4. Push to GitHub: git add . && git commit && git push');

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the script
captureScreenshots().catch(console.error);