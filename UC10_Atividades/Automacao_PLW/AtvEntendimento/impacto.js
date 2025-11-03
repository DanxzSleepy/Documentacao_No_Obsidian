// demo impacto-chrome.js
const { chromium } = require('playwright');

(async () => {
    console.log(' PLAYWRIGHT NO CHROME');

    // CONFIGURAR PARA CHROME ESPECIFICO
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome' // Forca e Usa o Chrome instalado no sistema
    });

    const page = await browser.newPage();

    console.time('Navegacao Chrome');
    await page.goto('https://www.github.com/login');
    await page.fill('#login_field', 'usuario_teste');
    await page.fill('#password', 'senha_teste');
    await page.click('input[name="submit"]');
    await page.waitForTimeout(2000);

    console.timeEnd('Navegacao Chrome');
    await browser.close();
})();
