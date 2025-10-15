# Projeto – Simulação da Biblioteca Online (Atividade Acadêmica)

Este projeto é uma **simulação acadêmica** para a disciplina UC10, demonstrando práticas de desenvolvimento de software, versionamento e gestão ágil de projetos.

## Status do Projeto
**✅ CONCLUÍDO** - Simulação completa com sistema de biblioteca funcional

## Descrição da Atividade
Esta simulação faz parte da atividade acadêmica da disciplina UC10, onde aplicamos conceitos de:
- Desenvolvimento web com Django
- Versionamento semântico com Git
- Gestão ágil usando Scrum e Kanban
- Documentação técnica em Markdown/Obsidian
- Tipos de manutenção de software

## Navegação
- [[Tipos de Manutenção e Exemplos de Simulados Para a Biblioteca]] → Explica cada tipo de manutenção com exemplos da biblioteca
- [[Scrum e Sprints]] → O que é Scrum, papéis, Sprints e Story Points
- [[Cenário da Biblioteca Online e Issues]] → Cenário fictício da biblioteca com todas as demandas
- [[Kanban e Execução da Sprint]] → Kanban com tarefas distribuídas por coluna
- [[Simulação da Sprint (Daily Scrum)]] → Como a Sprint foi executada passo a passo
- [[Revisão e Retrospectiva]] → Resultados da Sprint e aprendizado do processo
- [[Tipos de Manutenção de Software]] → Tipos e exemplos

## Histórico de Versões e Evolução do Projeto

### v1.6.1 - Correções de Acesso e Edição de Perfil (Versão Atual)
- Corrigido acesso inadequado ao painel de usuários por administradores/bibliotecários
- Implementada funcionalidade de edição de perfil de usuário
- Clarificada a natureza pessoal do painel do usuário

### v1.6.0 - Sistema de Registro e Painel do Usuário
- Adicionado sistema de registro de novos usuários
- Criado painel do usuário com informações de empréstimos e solicitações
- Implementada funcionalidade de devolução de livros pelos próprios usuários
- Adicionada verificação de prazos de devolução e destaque de livros atrasados

### v1.5.0 - Sistema de Solicitações de Empréstimo
- Implementado sistema de solicitações de empréstimo com aprovação
- Criado model BookRequest para gerenciar solicitações
- Desenvolvidas views para solicitar, aprovar e rejeitar empréstimos

### v1.4.x - Refinamentos e Correções
- v1.4.4 - Atualização da documentação com correção de logout
- v1.4.3 - Correção da funcionalidade de logout
- v1.4.2 - Atualização da documentação
- v1.4.1 - Template de perfil do usuário e configuração do admin
- v1.4.0 - Página de perfil do usuário e melhorias na experiência

### v1.3.0 - Sistema de Usuários e Controle de Acesso
- Implementado sistema de usuários com diferentes perfis (membro, bibliotecário, administrador)
- Adicionado controle de acesso baseado em perfis de usuário
- Criada funcionalidade de empréstimo de livros para membros

### v1.2.0 - Interface Web Completa
- Desenvolvida interface web completa com templates HTML usando Bootstrap
- Criada página inicial com estatísticas da biblioteca
- Implementadas páginas para listar livros, autores, membros e empréstimos

### v1.1.0 - Correção de Erros Intencionais
- Corrigidos todos os erros intencionais da versão anterior
- Ajustados models Author, Book, Member e BorrowRecord

### v1.0.0 - Versão Inicial
- Projeto Django inicial para sistema de biblioteca
- Models para Book, Author, Member e BorrowRecord
- Documentação de erros intencionais

## Funcionalidades Implementadas (Simulação)
- **Sistema de Autenticação**: Login/logout completo com perfis de usuário (membro, bibliotecário, administrador)
- **Registro de Usuários**: Novos usuários podem se registrar no sistema
- **Interface Web**: Design responsivo com Bootstrap para todas as funcionalidades
- **Gestão de Conteúdo**: Cadastro e visualização de livros, autores, membros e empréstimos
- **Controle de Acesso**: Funcionalidades diferenciadas baseadas no perfil do usuário
- **Painel do Usuário**: Área pessoal com informações de empréstimos e solicitações
- **Sistema de Solicitações**: Workflow completo de solicitação e aprovação de empréstimos
- **Administração**: Interface administrativa completa do Django
- **Documentação**: Documentação completa com versionamento Git

## Tecnologias Utilizadas (Simulação)
- **Framework**: Django 5.1.6
- **Frontend**: HTML5, Bootstrap 5
- **Banco de Dados**: SQLite
- **Versionamento**: Git com tags semânticas
- **Documentação**: Markdown compatível com Obsidian

## Repositório GitHub
[Projeto_Biblioteca](https://github.com/DanxzSleepy/Projeto_Biblioteca) - Código fonte da simulação com histórico de versionamento

## Versão Atual da Simulação
**v1.6.1** - Correções de acesso e edição de perfil