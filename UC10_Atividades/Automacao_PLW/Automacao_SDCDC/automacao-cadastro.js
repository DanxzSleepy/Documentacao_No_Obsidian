// automacao-cadastro.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('▶️  Abrindo projeto - Automação de cadastro');

  // Se prefere usar file:// (menos recomendado) troque a url abaixo por:
  // const url = 'file://' + path.resolve(__dirname, 'index.html');
  // Eu recomendo servir em http://localhost:8080 (veja instruções).

  const path = require('path');
  const url = 'file://' + path.resolve(__dirname, 'index.html');


  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome', // força uso do Chrome instalado (se houver)
    slowMo: 120
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.time('Navegacao');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Espera o formulário existir
    await page.waitForSelector('#clientForm');

    // Preenche campos
    await page.fill('#nome', 'Danilo Automação');
    await page.fill('#email', 'danilo.teste@example.com');
    await page.fill('#cpf', '12345678909'); // formato sem máscara; o campo aplica máscara automaticamente
    await page.fill('#telefone', '(11) 99999-8888');

    // Seleciona país — usa um país que existe no seu arquivo (ex: Brasil)
    await page.selectOption('#pais', 'Brasil');

    // aguarda as cidades serem populadas e habilita o select
    await page.waitForFunction(() => {
      const cidade = document.getElementById('cidade');
      return cidade && !cidade.disabled && cidade.options.length > 1;
    });

    // Se quiser, filtra a cidade via campo de busca:
    await page.fill('#cidadeSearch', 'São Paulo');
    // Espera debounce e opções filtradas
    await page.waitForTimeout(400);

    // Seleciona a cidade (nome exato que aparece no options)
    await page.selectOption('#cidade', 'São Paulo');

    // status
    await page.selectOption('#status', 'ativo');

    // Submete o formulário
    await page.click('button[type="submit"]');

    // esperar popup de sucesso ou aguardar a lista atualizar
    // sua app cria um popup e também atualiza a lista em clientesCadastrados
    await page.waitForTimeout(600); // pequeno delay pra animação/popup

    // Verificar se o nome aparece na lista de clientes (procura por texto)
    const clienteExists = await page.locator('#clientesCadastrados').locator('text=Danilo Automação').count();
    if (clienteExists > 0) {
      console.log('✅ Cliente cadastrado e visível na lista.');
    } else {
      // tentar checar localStorage como fallback
      const clientes = await page.evaluate(() => localStorage.getItem('clientes'));
      console.log('ℹ️ Não achei o cliente na UI. localStorage.clientes =', clientes);
    }

    console.timeEnd('Navegacao');
  } catch (err) {
    console.error('❌ Erro durante automação:', err);
  } finally {
    // await browser.close(); // descomente se quiser fechar automatico
  }
})();
