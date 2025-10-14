# Cenário da Biblioteca Online e Issues

O sistema é uma biblioteca online que precisa de manutenção contínua e desenvolvimento de novas funcionalidades.

## Issues (Demandas) - Versão Original

| Tipo             | Issue                        | Story Points (SP) | Status      |
| ---------------- | ---------------------------- | ----------------- | ----------- |
| Corretiva        | Login não funciona           | 8                 | ✅ Resolvido |
| Preventiva       | Refatorar módulo empréstimos | 5                 | ✅ Resolvido |
| Adaptativa       | Migrar API de pagamento      | 8                 | ✅ Resolvido |
| Evolutiva        | Filtro "Autor Mais Popular"  | 3                 | ✅ Resolvido |
| Evolutiva menor  | Relatório de devoluções      | 2                 | ✅ Resolvido |
| Preventiva menor | Notificação de atrasos       | 2                 | ✅ Resolvido |
| Evolutiva menor  | Ajuste UI home               | 2                 | ✅ Resolvido |

## Issues (Demandas) - Projeto Real Implementado

| Tipo             | Issue                                              | Story Points (SP) | Status      |
| ---------------- | -------------------------------------------------- | ----------------- | ----------- |
| Corretiva        | Corrigir erros intencionais no modelo de dados    | 5                 | ✅ Resolvido |
| Evolutiva        | Implementar interface web completa                | 8                 | ✅ Resolvido |
| Evolutiva        | Criar sistema de autenticação e perfis de usuário | 8                 | ✅ Resolvido |
| Evolutiva        | Implementar funcionalidade de empréstimos         | 5                 | ✅ Resolvido |
| Evolutiva        | Configurar administração do Django                | 3                 | ✅ Resolvido |
| Corretiva        | Corrigir funcionalidade de logout                 | 2                 | ✅ Resolvido |
| Preventiva       | Criar documentação completa com versionamento     | 3                 | ✅ Resolvido |

> Todas essas Issues vão para o **Backlog** do Kanban e foram distribuídas nas colunas apropriadas em [[Kanban e Execução da Sprint]].

## Descrição das Funcionalidades Implementadas

1. **Sistema de Autenticação**: Login/logout completo com diferentes perfis de usuário
2. **Interface Web**: Design responsivo com Bootstrap para todas as páginas
3. **Gestão de Conteúdo**: CRUD completo para livros, autores, membros e empréstimos
4. **Controle de Acesso**: Funcionalidades diferenciadas baseadas no perfil do usuário
5. **Administração**: Interface administrativa completa do Django
6. **Documentação**: Documentação completa com versionamento Git (v1.0.0 a v1.4.4)