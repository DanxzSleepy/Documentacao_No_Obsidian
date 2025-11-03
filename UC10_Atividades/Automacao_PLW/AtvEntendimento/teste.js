// demo-impacto-chrome.js
const { chromium } = require('playwright');

(async () => {
    console.log('🚀 Iniciando teste de login com Playwright (Chrome)');

    // Inicia o navegador Chrome (visível)
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome', // Usa o Chrome instalado
        slowMo: 200 // deixa mais devagar pra visualizar as ações
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    console.time('⏱️ Tempo de Navegação');

    // Acessa a página de login do GitHub
    await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'domcontentloaded' });

    // Preenche os campos de usuário e senha
    await page.fill('input[name="login"]', 'DanxzSleepy');
    await page.fill('input[name="password"]', 'Dan12Icaro2007');

    // Clica no botão de login
    await page.click('input[name="commit"]');

    // Espera um pouco pra ver o resultado
    await page.waitForTimeout(5000);

    console.timeEnd('⏱️ Tempo de Navegação');

    // Fecha o navegador
    await browser.close();

    console.log('✅ Teste finalizado com sucesso!');
})();
