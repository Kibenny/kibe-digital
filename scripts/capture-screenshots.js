const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'public', 'portfolio');
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  { name: 'edward-limo', url: 'https://www.edwardlimoeducentre.com' },
  { name: 'tindinyo-falls', url: 'https://www.tindinyofalls.com' },
  { name: 'elite-media', url: 'https://www.elitemediacreations.co.ke' },
  { name: 'living-water', url: 'https://www.lwtchurch.online' },
  { name: 'sychar-farm', url: 'https://www.sycharfarmhomestay.com' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'
  });

  for (const site of sites) {
    try {
      const page = await context.newPage();
      console.log(`Capturing ${site.name}...`);
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      const shotPath = path.join(outDir, `site-${site.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      await page.close();
      const size = fs.statSync(shotPath).size;
      console.log(`OK: site-${site.name}.png (${Math.round(size/1024)}KB)`);
    } catch (e) {
      console.log(`FAIL: ${site.name} - ${e.message}`);
    }
  }

  // Also try Facebook graphics page
  try {
    const page = await context.newPage();
    console.log('Capturing Facebook page...');
    await page.goto('https://www.facebook.com/kibedigitalstudio/photos/', {
      waitUntil: 'domcontentloaded',
      timeout: 20000
    });
    await page.waitForTimeout(3000);
    const fbShot = path.join(outDir, 'facebook-page.png');
    await page.screenshot({ path: fbShot, fullPage: false });
    const fbSize = fs.statSync(fbShot).size;
    console.log(`OK: facebook-page.png (${Math.round(fbSize/1024)}KB)`);
    await page.close();
  } catch (e) {
    console.log(`FAIL: Facebook - ${e.message}`);
  }

  // Try flagship app
  try {
    const page = await context.newPage();
    console.log('Capturing Mwalimu Briefcase...');
    await page.goto('https://mwalimu-briefcase.vercel.app', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    await page.waitForTimeout(2000);
    const flagShot = path.join(outDir, 'app-mwalimu.png');
    await page.screenshot({ path: flagShot, fullPage: false });
    const flagSize = fs.statSync(flagShot).size;
    console.log(`OK: app-mwalimu.png (${Math.round(flagSize/1024)}KB)`);
    await page.close();
  } catch (e) {
    console.log(`FAIL: Mwalimu - ${e.message}`);
  }

  await browser.close();
  console.log('Done.');
})();
