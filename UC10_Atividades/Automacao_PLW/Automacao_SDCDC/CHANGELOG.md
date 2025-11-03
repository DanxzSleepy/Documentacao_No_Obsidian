# CHANGELOG

## [2.5.7] - 2025-10-28
### Corrigido
- Correção da estrutura de arquivos para GitHub Pages
- Remoção de arquivos HTML duplicados
- Padronização para uso de único arquivo index.html na raiz

## [2.5.6] - 2025-10-28
### Adicionado
- Preparação para deploy no GitHub Pages
- Criação de workflow para deploy automatizado
- Adição de script PowerShell para deploy manual
- Configuração do GitHub Actions para deploy automático
- Arquivo CNAME para configuração de domínio
- Script para verificação do status do deploy
- Atualização da documentação com instruções de acesso online

### Modificado
- Atualização do README.md com instruções de acesso e deploy
- Atualização dos badges de versão no README.md

## [2.5.5] - 2025-10-27
### Modificado
- Otimização do sistema de temas claro/escuro para melhor performance
- Remoção de código duplicado no arquivo script.js que causava conflitos
- Correção da manipulação do ícone de tema no JavaScript
- Mesclagem das definições de variáveis CSS no arquivo avoidness-dark.css
- Atualização do .gitignore para ignorar arquivos HTML desnecessários
- Remoção de arquivos HTML redundantes mantendo apenas avoidness-client-system.html como ponto de entrada

## [2.5.4] - 2025-10-23
### Adicionado
- Implementação do modo claro e escuro com alternância
- Novo arquivo CSS específico para tema escuro (avoidness-dark.css)
- Botão de toggle para alternar entre temas
- Persistência do tema selecionado usando localStorage
- Badges no README.md para melhor apresentação do projeto
- Design responsivo aprimorado para ambos os modos de tema

### Modificado
- Atualização do arquivo avoidness-styles.css para suportar temas dinâmicos
- Melhorias na compatibilidade do JavaScript com os novos temas
- Ajustes visuais para garantir contraste adequado em ambos os modos
- Otimização do sistema de notificações para ambos os temas
- Aprimoramento da experiência do usuário com transições suaves

## [2.5.3] - 2025-10-23
### Adicionado
- Novo estilo inspirado no AvoidNess para o Sistema de Cadastro de Clientes
- Arquivo CSS dedicado com tema roxo e efeitos visuais avançados
- Nova versão HTML com elementos do AvoidNess (ícones, gradientes, etc.)
- Efeitos visuais como glow, floating e animações suaves
- Scrollbar personalizada e melhorias na experiência do usuário

### Modificado
- Paleta de cores atualizada para tons de roxo (#8a2be2, #4a0080)
- Tipografia alterada para Space Grotesk
- Botões com efeitos hover avançados
- Cards com efeitos de vidro fosco (glassmorphism)
- Melhorias na responsividade e acessibilidade

## [2.5.2] - 2025-06-15
### Modificado
- Atualização do CSS para design mais moderno e profissional
- Remoção de todos os emojis da interface e documentação
- Organização do repositório com atualização do .gitignore

## [2.5.1] - 2025-06-10
### Adicionado
- Documentação completa para Aula 2: Classificação de Falhas e Preparação para Testes Unitários
- Mais de 120 cenários de teste abrangendo todos os aspectos do sistema
- Classificação das 10 falhas mais críticas encontradas
- Análise de testes unitários vs testes de sistema
- Particionamento de equivalência para validação de email
- 10 casos de teste unitário para validação de CPF

### Modificado
- Expansão da documentação de testes em TESTES.md
- Atualização do versionamento e organização do repositório
- Correção de pequenos erros de sintaxe no código JavaScript

## [2.5.0] - 2025-06-05
### Adicionado
- Atualização do versionamento para v2.5.0
- Remoção completa de emojis de toda a interface e documentação
- Atualização do .gitignore para excluir arquivos não essenciais

## [2.4.1] - 2025-06-01
### Corrigido
- Correção de erro de sintaxe no arquivo JavaScript na função `atualizarListaClientes`
- Problema com aspas faltando na string "Beau Bassin" no objeto de cidades

## [2.4.0] - 2025-05-28
### Adicionado
- Aprimoramento visual completo do sistema
- Design moderno com nova paleta de cores
- Layout em grid para melhor organização
- Cards estilizados para estatísticas e clientes
- Botões com efeitos hover e sombras sutis
- Código importante:
  ```css
  :root {
      --primary-color: #4361ee;
      --secondary-color: #3f37c9;
      --success-color: #4cc9f0;
      --danger-color: #f72585;
      --warning-color: #f8961e;
      --info-color: #4895ef;
      --light-color: #f8f9fa;
      --dark-color: #212529;
      --gray-100: #f8f9fa;
      --gray-200: #e9ecef;
      --gray-300: #dee2e6;
      --gray-400: #ced4da;
      --gray-500: #adb5bd;
      --gray-600: #6c757d;
      --gray-700: #495057;
      --gray-800: #343a40;
      --gray-900: #212529;
      --border-radius: 8px;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --box-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
  }
  ```

### Modificado
- Melhoria na pesquisa de cidades com filtragem em tempo real
- Otimização do design responsivo
- Atualização da tipografia com fonte Inter
- Aprimoramento da experiência do usuário

## [2.3.0] - 2025-05-25
### Adicionado
- Implementação da pesquisa de cidades para facilitar a seleção
- Expansão da base de dados de países e cidades
- Novo campo de pesquisa dinâmico para cidades

### Modificado
- Melhorias na seleção dinâmica de cidades por país
- Otimização da interface do usuário

## [2.2.0] - 2025-05-20
### Adicionado
- Implementação da seleção dinâmica de país/cidade
- Base de dados com mais de 150 países e suas principais cidades
- Validação aprimorada para seleção de localização

## [2.1.0] - 2025-05-15
### Adicionado
- Aprimoramentos finais na interface do usuário
- Preparação para apresentação final
- Otimizações de performance

### Modificado
- Melhorias na validação de formulários
- Ajustes visuais na interface

## [2.0.0] - 2025-05-10
### Adicionado
- Implementação completa do sistema de cadastro de clientes
- Validação de CPF com algoritmo oficial
- Validação de e-mail com regex
- Persistência de dados com localStorage
- Interface de usuário moderna e responsiva
- Funcionalidades de busca e filtragem
- Exportação para CSV e JSON
- Contadores de estatísticas em tempo real
- Sistema de notificações popup
- Confirmações personalizadas para exclusão

## [1.1.0] - 2025-05-05
### Corrigido
- Correção de bugs na interface
- Refatoração do código para melhor manutenção

## [1.0.0] - 2025-05-01
### Adicionado
- Análise inicial do projeto
- Documentação base
- Estrutura inicial do repositório