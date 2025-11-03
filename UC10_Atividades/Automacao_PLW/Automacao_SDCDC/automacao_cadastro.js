// automacao_cadastro.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('▶️  Iniciando automação de cadastro, edição e exclusão');

  const url = 'file://' + path.resolve(__dirname, 'index.html');

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome',
    slowMo: 150, // tempo mais humano
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.time('⏱️ Tempo total');
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#clientForm');

    // 1️⃣ CADASTRAR CLIENTE
    console.log('📝 Cadastrando cliente...');
    await page.fill('#nome', 'Danilo Automação');
    await page.fill('#email', 'danilo.teste@example.com');
    await page.fill('#cpf', '12345678909');
    await page.fill('#telefone', '(11) 99999-8888');
    await page.selectOption('#pais', 'Brasil');

    // espera cidades
    await page.waitForFunction(() => {
      const c = document.getElementById('cidade');
      return c && !c.disabled && c.options.length > 1;
    });

    await page.fill('#cidadeSearch', 'São Paulo');
    await page.waitForTimeout(400);
    await page.selectOption('#cidade', 'São Paulo');
    await page.selectOption('#status', 'ativo');

    // envia formulário
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1500);

    console.log('🔍 Analisando informações cadastradas...');
    await page.waitForTimeout(3000);

    // 2️⃣ VERIFICAR SE CLIENTE APARECEU
    const clienteItem = page.locator('#clientesCadastrados .client-item', { hasText: 'Danilo Automação' });
    await clienteItem.first().waitFor({ state: 'visible', timeout: 5000 });

    console.log('✅ Cliente cadastrado encontrado na lista.');

    // 3️⃣ EDITAR CLIENTE
    console.log('✏️ Editando informações...');
    const btnEditar = clienteItem.locator('button:has-text("Editar")');
    await btnEditar.click();
    await page.waitForTimeout(800);

    await page.fill('#nome', 'Danilo Editado');
    await page.fill('#email', 'danilo.editado@example.com');
    await page.selectOption('#status', 'inativo');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(2000);

    console.log('💾 Salvando alterações e reavaliando...');
    await page.waitForTimeout(3000);

    const clienteEditado = page.locator('#clientesCadastrados .client-item', { hasText: 'Danilo Editado' });
    await clienteEditado.first().waitFor({ state: 'visible', timeout: 5000 });
    console.log('✅ Edição confirmada!');

    // 4️⃣ EXCLUIR CLIENTE
    console.log('🗑️ Excluindo cliente...');
    const btnExcluir = clienteEditado.locator('button:has-text("Excluir")');
    await btnExcluir.click();

    // aguarda o popup de confirmação
    await page.waitForSelector('#confirm-popup');
    await page.click('#confirm-yes');
    await page.waitForTimeout(1500);

    // checar se sumiu da lista
    const clienteRemovido = await page.locator('#clientesCadastrados .client-item', { hasText: 'Danilo Editado' }).count();
    if (clienteRemovido === 0) {
      console.log('✅ Cliente excluído com sucesso!');
    } else {
      console.log('⚠️ Cliente ainda aparece na lista após exclusão.');
    }

    console.timeEnd('⏱️ Tempo total');
  } catch (err) {
    console.error('❌ Erro durante automação:', err);
  } finally {
    console.log('🏁 Automação finalizada.');
    await browser.close();
  }
})();