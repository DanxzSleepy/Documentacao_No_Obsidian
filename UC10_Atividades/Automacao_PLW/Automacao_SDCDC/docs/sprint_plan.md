# 🏃‍♂️ Planejamento de Sprints - Sistema de Cadastro de Clientes

## Metodologia
Este projeto utilizará uma abordagem Scrum adaptada para desenvolvimento web, com sprints de 1 semana de duração, simulando um ambiente de desenvolvimento real.

## Sprint 0 - Análise e Documentação (v1.0.0)
**Duração**: 1 dia
**Objetivo**: Análise inicial do código existente e criação da documentação base

### Tarefas:
1. Análise do código atual
2. Identificação de bugs e más práticas
3. Criação de documentação inicial:
   - README.md
   - CHANGELOG.md
   - BACKLOG.md
   - LICENSE.md
   - Documentação técnica em /docs

### Resultados:
- Documentação completa da versão base
- Backlog priorizado
- Plano de sprints definido

## Sprint 1 - Correção de Bugs Críticos (v1.1.0)
**Duração**: 1 semana
**Objetivo**: Corrigir os principais problemas de funcionalidade e segurança

### Tarefas:
1. Implementar validação completa de CPF
2. Corrigir verificação de cliente existente
3. Aprimorar validação de e-mail
4. Implementar persistência de dados com localStorage
5. Separar o código em arquivos distintos

### Critérios de Aceitação:
- CPF deve ser validado conforme algoritmo oficial
- Não deve ser possível cadastrar clientes com CPF ou e-mail duplicados
- Dados devem persistir após recarregar a página
- Código deve estar organizado em arquivos separados

## Sprint 2 - Melhorias de Interface (v1.2.0)
**Duração**: 1 semana
**Objetivo**: Aprimorar a experiência do usuário e a interface

### Tarefas:
1. Adicionar máscaras automáticas para CPF e telefone
2. Implementar confirmação antes de excluir cliente
3. Corrigir funcionalidade de edição para atualizar dados reais
4. Melhorar feedback visual para o usuário

### Critérios de Aceitação:
- Campos de CPF e telefone devem ser formatados automaticamente
- Exclusão de cliente deve requerir confirmação
- Edição deve atualizar os dados na lista
- Interface deve fornecer feedback claro sobre ações do usuário

## Sprint 3 - Funcionalidades Avançadas (v2.0.0)
**Duração**: 2 semanas
**Objetivo**: Adicionar funcionalidades avançadas e diferenciais

### Tarefas Concluídas:
1. ✅ Implementar busca e filtro de clientes
2. ✅ Adicionar exportação para CSV/JSON
3. ✅ Criar contador de clientes ativos/inativos
4. ✅ Aprimorar interface com feedback visual avançado

### Critérios de Aceitação:
- Busca deve funcionar em tempo real
- Exportação deve gerar arquivos válidos
- Contadores devem refletir dados atuais
- Interface deve ser intuitiva e visualmente agradável

## Sprint 4 - Recursos Adicionais e Finalização (v2.1.0)
**Duração**: 1 semana
**Objetivo**: Adicionar recursos diferenciais e preparar para apresentação

### Tarefas Planejadas:
1. Implementar sistema de login básico (mockado)
2. Adicionar modo escuro/claro
3. Refatorar completamente o código
4. Preparar documentação final para apresentação

### Critérios de Aceitação:
- Sistema de login deve funcionar para demonstração
- Modo escuro/claro deve ser funcional
- Código deve seguir boas práticas e estar bem organizado
- Documentação completa para apresentação final

## 📊 Métricas de Acompanhamento

### Velocity
- Sprint 1: 10 pontos
- Sprint 2: 8 pontos
- Sprint 3: 15 pontos
- Sprint 4: 10 pontos

### Burndown
- Acompanhamento diário do progresso das tarefas
- Reuniões diárias de standup (simuladas)

### Retrospectiva
- Ao final de cada sprint, analisar o que funcionou bem e o que pode melhorar
- Ajustar processo para sprints futuras