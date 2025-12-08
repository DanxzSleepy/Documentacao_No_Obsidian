# Parte 2 — Cenário 2: Computador muito lento

## Descrição do problema relatado pelo usuário
- "O computador está travando tudo" ao iniciar e ao abrir navegadores e planilhas.

## Perguntas feitas ao usuário
- Em que momentos a lentidão ocorre (início, durante uso, ao abrir apps)?
- Quais programas abrem automaticamente ao ligar?
- Houve instalação/atualização recente de software/driver?
- Há espaço livre suficiente em disco? Antivirus executando varredura?

## Informações coletadas
- Inicialização com vários aplicativos (mensageria, sincronização em nuvem, utilitários).
- Gerenciador de Tarefas: CPU 95% por "Antimalware Service"; Disco 100% por "Service Host: SysMain" e Windows Update.
- RAM 7,2/8 GB usada; espaço livre em disco ~3 GB.

## Hipóteses levantadas
- Muitos programas iniciando automaticamente degradando desempenho.
- Atualizações do Windows baixando em segundo plano saturando o disco.
- Baixo espaço em disco causando paginação intensa.
- Possível malware ou extensão de navegador abusiva.

## Testes feitos
- Desativação de itens de inicialização com alto impacto.
- Limpeza de disco (arquivos temporários, cache, downloads), liberando >15 GB.
- Verificação de malware com antivirus; remoção de extensões suspeitas.
- `sfc /scannow` e reinicialização; validação de atualizações concluídas.
- Monitor de Recursos: queda do uso de disco após estabilização.

## Causa‑raiz encontrada
- Combinação de baixa capacidade livre em disco, múltiplos aplicativos de inicialização e Windows Update em execução.

## Solução aplicada
- Redução da inicialização para apenas aplicativos essenciais.
- Limpeza e liberação de espaço, mantendo >20% do disco livre.
- Finalização das atualizações pendentes e reinício.
- Orientação para agendar varreduras/updates fora do horário de pico.

## Comprovante (descrição detalhada)
- Antes: CPU ~95%, Disco 100%, RAM 7,2/8 GB; abertura de apps demorava >30 s.
- Depois: CPU ~15–25%, Disco <10%, RAM ~4/8 GB; abertura de apps em 3–5 s.

## Recomendações para evitar o problema novamente
- Revisar mensalmente a lista de inicialização e espaço livre.
- Atualizar sistema e drivers em janela de manutenção.
- Considerar upgrade para SSD e +8 GB de RAM em estações críticas.
- Adotar checklist de higiene digital (downloads, cache, extensões).

