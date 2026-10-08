const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const root = process.cwd();
  const output = path.join(root, 'docs', 'demonstracoes');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(output, 'portfolio-desktop.png'), fullPage: true });
    await page.locator('#projetos').screenshot({ path: path.join(output, 'portfolio-projetos.png') });
    await page.locator('#contato').screenshot({ path: path.join(output, 'portfolio-contato.png') });
    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    await mobile.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'load' });
    await mobile.waitForTimeout(800);
    await mobile.screenshot({ path: path.join(output, 'portfolio-mobile.png'), fullPage: true });
    const prova = path.join(root, '.prova-diw', 'index.html');
    if (fs.existsSync(prova)) {
      const p = await browser.newPage({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 1 });
      await p.goto('file://' + prova, { waitUntil: 'load' });
      await p.screenshot({ path: path.join(output, 'prova1-diw.png'), fullPage: true });
    }
    console.log('Capturas criadas em docs/demonstracoes');
  } finally {
    await browser.close();
  }
})().catch(err => { console.error(err); process.exitCode = 1; });