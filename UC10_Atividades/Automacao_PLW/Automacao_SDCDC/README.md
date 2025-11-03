# Sistema de Cadastro de Clientes

![Version](https://img.shields.io/badge/version-2.5.7-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Theme](https://img.shields.io/badge/theme-AvoidNess-purple)

## Descrição
Este é um sistema completo de cadastro de clientes desenvolvido com HTML, CSS e JavaScript puro. O sistema permite registrar informações básicas de clientes, como nome, e-mail, CPF, telefone, país, cidade e status, com funcionalidades avançadas de busca, filtragem e exportação.

O sistema agora inclui modos de tema claro e escuro, inspirados no estilo AvoidNess, com transições suaves e uma experiência visual aprimorada.

## Funcionalidades Atuais
1. Cadastro de novos clientes com:
   - Nome completo
   - E-mail (validação completa)
   - CPF (validação completa com algoritmo oficial)
   - Telefone (opcional, com máscara automática)
   - País (seleção de lista suspensa com mais de 150 países)
   - Cidade (seleção dinâmica baseada no país escolhido, com pesquisa)
   - Status (ativo/inativo)
2. Visualização da lista de clientes cadastrados
3. Edição de clientes existentes (atualização real dos dados)
4. Exclusão de clientes (com confirmação personalizada)
5. Validações completas de campos obrigatórios
6. Persistência de dados com localStorage
7. Máscaras automáticas para CPF e telefone
8. Busca e filtro de clientes por nome, e-mail, CPF ou status
9. Exportação de lista de clientes para formatos CSV e JSON
10. Contador de clientes ativos/inativos com estatísticas em tempo real
11. Interface aprimorada com feedback visual e indicadores de status
12. Sistema de notificações popup para melhor experiência do usuário
13. Seleção dinâmica de cidades baseada no país escolhido
14. Pesquisa de cidades para facilitar a seleção
15. Modo claro e escuro com alternância automática
16. Design responsivo para dispositivos móveis e desktop

## Como Executar Localmente
1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. O sistema está pronto para uso

## Acesso Online
O sistema está disponível online através do GitHub Pages:
[https://danxzsleepy.github.io/CadastroCliente_UC10/](https://danxzsleepy.github.io/CadastroCliente_UC10/)

## Deploy no GitHub Pages
O projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

Para fazer deploy manualmente:
1. Execute o script `deploy.ps1` no PowerShell:
   ```powershell
   .\deploy.ps1
   ```

Ou siga os passos manualmente:
1. Certifique-se de que todas as alterações estão commitadas
2. Crie uma tag para a versão:
   ```bash
   git tag -a v2.5.6 -m "Release v2.5.6"
   ```
3. Envie as alterações e tags:
   ```bash
   git push origin master
   git push origin v2.5.6
   ```

Após o deploy, o site estará disponível em: https://danxzsleepy.github.io/UC10_TDS_Sistema_de_Cadastro_de_Clientes/

## Como Testar
1. Preencha todos os campos obrigatórios do formulário
2. Verifique se as validações estão funcionando corretamente:
   - CPF inválido (ex: 123.456.789-00)
   - E-mail inválido (ex: usuario@)
3. Tente cadastrar um cliente com CPF ou e-mail já existente
4. Confirme se o cliente é adicionado à lista após o cadastro
5. Teste as funcionalidades de edição e exclusão
6. Recarregue a página e verifique se os dados persistem
7. Teste as máscaras de CPF e telefone
8. Utilize a busca e filtros para encontrar clientes específicos
9. Exporte a lista de clientes para CSV e JSON
10. Verifique as estatísticas de clientes ativos/inativos
11. Teste as notificações popup e confirmações personalizadas
12. Teste a seleção dinâmica de país/cidade:
    - Selecione um país e verifique se as cidades são carregadas
    - Tente enviar o formulário sem selecionar país ou cidade
13. Teste a pesquisa de cidades:
    - Selecione um país
    - Digite parte do nome de uma cidade no campo de pesquisa
    - Verifique se a lista de cidades é filtrada
    - Selecione uma cidade da lista filtrada
14. Teste a alternância entre modos claro e escuro:
    - Clique no botão no canto superior direito
    - Verifique se o tema muda suavemente
    - Recarregue a página e verifique se o tema selecionado é mantido

## Tecnologias Utilizadas
- HTML5
- CSS3 (com variáveis CSS para temas)
- JavaScript (ECMAScript 6)
- localStorage para persistência de dados
- Remix Icons para ícones
- Google Fonts (Space Grotesk)

## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE.md para mais detalhes.

## Estrutura do Projeto
```
.
├── src/
│   ├── html/              # Arquivos HTML separados
│   │   └── avoidness-client-system.html  # Sistema com tema AvoidNess (ponto de entrada)
│   ├── css/               # Arquivos CSS separados
│   │   ├── avoidness-styles.css          # Estilos com suporte a temas
│   │   └── avoidness-dark.css            # Estilos específicos para tema escuro
│   └── js/                # Arquivo JavaScript separado
│       └── script.js      # Lógica do sistema
├── docs/                  # Documentação completa
├── README.md              # Este arquivo
├── CHANGELOG.md           # Histórico de versões
├── BACKLOG.md             # Lista de melhorias pendentes
├── LICENSE.md             # Licença do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

## Versões Desenvolvidas
- v1.0.0: Análise inicial e documentação base
- v1.1.0: Correção de bugs e refatoração
- v2.0.0: Implementação de novas funcionalidades
- v2.1.0: Aprimoramentos finais e preparação para apresentação
- v2.2.0: Adição da seleção dinâmica de país/cidade
- v2.3.0: Adição da pesquisa de cidades e expansão da base de países/cidades
- v2.4.0: Aprimoramento visual do sistema e melhoria na pesquisa de cidades
- v2.5.0: Atualização do CSS para design mais moderno
- v2.5.1: Remoção de emojis e atualização da documentação
- v2.5.2: Organização do repositório e atualização do .gitignore
- v2.5.3: Adição do modo claro/escuro inspirado no AvoidNess
- v2.5.4: Aprimoramento completo dos temas claro/escuro e otimização da experiência do usuário
- v2.5.5: Otimização do sistema de temas e limpeza de arquivos desnecessários
- v2.5.6: Preparação para deploy no GitHub Pages

## Desenvolvedor
Desenvolvido por Danilo Icaro Alves Santos como parte do currículo da disciplina de Tecnologia em Desenvolvimento de Sistemas.