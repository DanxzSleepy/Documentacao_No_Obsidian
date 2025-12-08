# Parte 2 — Cenário 1: Internet não funciona

## Descrição do problema relatado pelo usuário
- "A internet caiu". Usuário sem acesso a sites e aplicativos por volta das 14h.

## Perguntas feitas ao usuário
- É apenas neste computador ou afeta outros dispositivos?
- Conexão via Wi‑Fi ou cabo? Algum LED anormal no roteador/modem?
- Algum site específico funciona? Há erro no navegador (código/descrição)?
- Houve mudanças recentes (troca de roteador, atualização, quedas de energia)?

## Informações coletadas
- Adaptador de rede com IP `169.254.x.x` (APIPA), sem gateway definido.
- `ipconfig` mostra DHCP não obtido; roteador com LED de WAN em amarelo.
- Outros dispositivos também sem acesso à internet.

## Hipóteses levantadas
- DHCP do roteador travado após queda de energia.
- Queda do link do provedor (PPPoE/wan sem sincronismo).
- Cabo de uplink desconectado entre modem e roteador.
- DNS indisponível (menos provável dado ausência de gateway).

## Testes feitos
- `ipconfig /all`: confirmou IP APIPA e ausência de gateway.
- `ping 192.168.0.1`: sem resposta (roteador inacessível da estação).
- `ping 8.8.8.8`: falhou (sem roteamento externo).
- `ipconfig /release` e `ipconfig /renew`: sem concessão de DHCP.
- Reinício controlado do roteador e verificação de cabos/modem.

## Causa‑raiz encontrada
- Serviço de DHCP do roteador travado após instabilidade elétrica; concessões não eram entregues.

## Solução aplicada
- Reinício do modem e do roteador, aguardando sincronismo.
- Nova concessão via `ipconfig /renew` obtendo IP válido (ex.: `192.168.0.23`) e gateway.
- Validação de navegação e testes de latência básicos.

## Comprovante (descrição detalhada)
- Antes: `ipconfig` mostrava `IPv4 169.254.76.10`, sem `Default Gateway`.
- Depois: `IPv4 192.168.0.23`, `Default Gateway 192.168.0.1`.
- `ping 8.8.8.8` com sucesso (média 25–40 ms); acesso a `www.google.com` normal.

## Recomendações para evitar o problema novamente
- Atualizar firmware do roteador e habilitar recuperação automática de DHCP.
- Usar nobreak ou protetor contra surtos para o modem/roteador.
- Registrar configuração e agendar reinício preventivo fora do horário crítico.
- Manter checklist de rede (cabos/LEDs/testes básicos) e DNS alternativo.

