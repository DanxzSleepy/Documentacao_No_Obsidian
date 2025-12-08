# UC10: Testes e Deploy com Vercel & Render

**Data de conclusão:** 7 de novembro de 2025 às 23:59 📅
**UC10 - Realizar Testes nas Aplicações Desenvolvidas Remota**

---

## Instruções

**UC10: Testando e implantando com Vercel & Render**

## Objetivo 🎯

Realize a **implantação de aplicativos** usando **Vercel** e **Render**, execute **testes automatizados**, gere relatórios e sugira melhorias.

---

## Passos

### Passo 1 – Pesquisa 🔎

Responda o seguinte em seu relatório:

1.  O que é **implantação** e sua importância?
2.  Diferença entre **Vercel** e **Render**?
3.  Duas vantagens e uma limitação de cada plataforma.
4.  O que são **testes automatizados** e sua importância?
5.  O que indica um **Relatório de Cobertura de Teste**?

### Etapa 2 – Implantação do aplicativo 🚀

1.  Implante seu aplicativo (PI) em:
    * **Vercel** (para projetos de **front-end**).
    * **Render** (para projetos de **back-end**).

2.  Inclua em seu relatório:
    * Captura de tela do aplicativo implantado.
    * Implantar link (ex: `https://minhaaplicacao.vercel.app` ou `https://minhaapi.onrender.com`).
    * Breve descrição das etapas de implantação.

### Etapa 3 – Testes automatizados ✅

1.  Instale o **pytest**:
    * `'pip instalar pytest'`

2.  Crie um arquivo de teste chamado **'test_app.py'** com o seguinte conteúdo:
    * `'piton def sum(a,b): retorna a + b def get_texto(): return "UC10 - Teste Automatizado" def test_soma_simples(): assert sum(2, 3) == 5 def test_verifica_texto(): afirma "UC10" em get_texto()`

3.  Execute os testes:
    * `'pytest'`

4.  Gerar relatório de cobertura:
    * Instale o plugin de cobertura:
        * `'pip install pytest-cov'`
    * Execute testes com cobertura:
        * `'pytest --cov=... --cov-report=termo ausente'`

5.  Inclua em seu relatório:
    * Captura de tela do terminal mostrando os resultados do teste.
    * Captura de tela do terminal mostrando o relatório de cobertura.

6.  Explique brevemente o que foi testado:
    * Foram criados dois testes: um para uma soma simples e outro para verificação de texto, ambos aprovados com 100% de cobertura.