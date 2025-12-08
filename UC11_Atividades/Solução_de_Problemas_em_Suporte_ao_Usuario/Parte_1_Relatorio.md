# Solução de Problemas em Suporte ao Usuário — Parte 1

## Resumo das etapas de troubleshooting
- Identificação do problema: compreender claramente o sintoma, escopo (um usuário, equipe ou toda a rede) e impacto.
- Coleta de informações: levantar ambiente, mudanças recentes, mensagens de erro, logs, topologia de rede e configurações.
- Análise de causa‑raiz: correlacionar evidências, separar causa de sintoma e usar métodos sistemáticos para chegar à raiz.
- Testes de hipóteses: formular hipóteses e validar com testes controlados e reversíveis.
- Aplicação da solução: implementar a correção mínima eficaz, com plano de rollback.
- Verificação e validação: confirmar que o problema foi resolvido e que não houve efeitos colaterais.
- Registro/documentação: registrar passos, decisão técnica, evidências e recomendações para reuso futuro.

## Métodos e ferramentas comuns
- Método OSI aplicado ao troubleshooting: isolar por camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação) para localizar a falha.
- Método da pirâmide (do físico ao lógico): verificar primeiro cabos, energia e conexões; depois drivers/serviços; por fim aplicações e credenciais.
- Lista de verificação (checklist): padronizar perguntas e testes essenciais para acelerar e reduzir erros.
- Ferramentas de diagnóstico:
  - Rede: `ping`, `tracert`/`traceroute`, `ipconfig`/`ifconfig`, `nslookup`, `netstat`.
  - Sistema: Gerenciador de Tarefas, Monitor de Recursos, Visualizador de Eventos, `sfc`, `chkdsk`, `powercfg`.
  - Utilitários: inventário de inicialização, desinstalador, verificador de drivers, atualizações do sistema.
- Ferramentas de comunicação com o usuário: telefone, chat corporativo, e‑mail, atendimento remoto, scripts de perguntas objetivas.

## Exemplos reais encontrados na pesquisa
- Internet lenta por saturação do Wi‑Fi (canal congestionado): troca de canal e reposicionamento do roteador normalizaram latência e perda de pacotes.
- Falha de login por senha expirada: política de expiração ativada no AD; solução com redefinição segura e orientação sobre MFA.
- Impressora não imprime por fila travada: serviço de spooler travado; limpeza da fila e reinício do serviço restauraram a impressão.

## Boas práticas no atendimento ao usuário
- Escuta ativa: confirmar entendimento, evitar suposições e registrar palavras do usuário.
- Comunicação clara: explicar passos e expectativas em linguagem simples e objetiva.
- Registro do histórico do atendimento: manter evidências, horários, responsáveis e decisões.
- Controle de tempo e priorização: classificar por impacto/urgência e definir SLAs realistas.

