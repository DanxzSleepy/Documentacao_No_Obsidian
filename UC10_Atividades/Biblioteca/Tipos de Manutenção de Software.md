#FavorAbrirNoObsidian #MaisFacilVisualizacao
### 🔄 Navegação do Projeto (Simulação Acadêmica)

Voltar para: [[Revisão e Retrospectiva]]  
Próximo passo: [[Tipos de Manutenção e Exemplos de Simulados Para a Biblioteca]]

### O Quadro Comparativo (Simulação Acadêmica)

| Tipo de Manutenção | Definição (resumida)                                                                 | Exemplo Prático (Simulação Acadêmica)                                                 |
| ------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Corretiva          | Corrige erros ou falhas que prejudicam o funcionamento do software.                  | Resolver um bug que faz um aplicativo travar ao abrir uma foto.                       |
| Adaptativa         | Ajusta o sistema para que funcione em novos ambientes, dispositivos ou regras.       | Atualizar um sistema de vendas para atender a uma nova lei fiscal.                    |
| Perfectiva         | Melhora o desempenho ou adiciona novas funcionalidades ao software.                  | Incluir um filtro de pesquisa avançado em um site de e-commerce.                      |
| Preventiva         | Evitar falhas futuras, garantindo estabilidade, segurança e durabilidade do sistema. | Atualizar bibliotecas de segurança e fazer manutenção no banco de dados regularmente. |

## Simulação Acadêmica - Tipos de Manutenção de Software

Esta documentação faz parte da atividade acadêmica da disciplina UC10, onde simulamos diferentes tipos de manutenção de software através de exemplos práticos.

### 1) A Corretiva — **corrigir um bug** (Simulação Acadêmica)

**Cenário (Simulado):** função de login com bug (usa `is` em vez de `==`, o que leva a comparações incorretas). Vou mostrar o código com bug e depois o conserto (usando `hmac.compare_digest` para comparação segura).

**Antes (com bug - Simulação)**:

```python
# login_bug.py
USERS = {"alice": "s3cr3t"}

def login(username, password):
    stored = USERS.get(username)
    if stored is None:
        return False
    # BUG: usando "is" (identidade) ao invés de "==" (igualdade)
    if password is stored:
        return True
    return False

print(login("alice", "s3cr3t"))  # dependendo da internamentação de string pode retornar False!
```

**Por que é bug?** `is` verifica identidade do objeto, não conteúdo. Strings pequenas às vezes são internadas e parecem funcionar, mas o comportamento é imprevisível e errado.

**Depois (corrigido - Simulação)**:

```python
# login_fixed.py
import hmac

USERS = {"alice": "s3cr3t"}

def login(username, password):
    stored = USERS.get(username)
    if stored is None:
        return False
    # compare_digest evita ataques de timing e garante comparação correta
    return hmac.compare_digest(password, stored)

print(login("alice", "s3cr3t"))  # True
print(login("alice", "wrong"))   # False
```

---

### 2) A Adaptativa — **ajustar o sistema a novo ambiente / API** (Simulação Acadêmica)

**Cenário (Simulado):** seu código chamava uma API `v1` e esperava a chave `data`. A API mudou (v2) e agora pode retornar `result` ou `user`. Além disso, queremos permitir mudar a URL base por variável de ambiente (bom para adaptar a diferentes ambientes: dev/staging/prod).

**Antes (versão antiga, quebra quando muda o JSON - Simulação)**:

```python
# fetch_old.py 
import requests

def fetch_user(user_id):
    r = requests.get(f"https://api.example.com/v1/users/{user_id}")
    r.raise_for_status()
    # Se a API mudou, isso gera KeyError
    return r.json()['data']
```

**Depois (adaptado para novas respostas + base URL via ENV - Simulação)**:

```python
# fetch_adapted.py
import os
import requests

API_BASE = os.environ.get("API_BASE_URL", "https://api.example.com")

def fetch_user(user_id):
    r = requests.get(f"{API_BASE}/v2/users/{user_id}")
    r.raise_for_status()
    payload = r.json()

    # adaptador: aceita vários formatos de resposta
    for key in ("data", "result", "user"):
        if key in payload:
            return payload[key]

    # fallback: se a API devolve outro formato, retornar payload inteiro ou lançar
    if "error" in payload:
        raise RuntimeError(f"API error: {payload['error']}")
    return payload

# Uso:
# export API_BASE_URL="https://staging.api.example.com"
# fetch_user("123")
```

**O que foi feito:** passamos a buscar `API_BASE` por variável de ambiente (permite rodar em diferentes ambientes) e aceitamos múltiplos formatos de JSON.

---

### 3) A Perfectiva — **melhoria de desempenho / nova funcionalidade** (Simulação Acadêmica)

**Cenário (Simulado):** função `fib` (Fibonacci) recursiva é lenta. Melhoramos o desempenho com memoização (`lru_cache`)  perfectiva porque melhora performance.

**Antes (lento - Simulação)**:

```python
# perf_old.py
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Cuidado: fib(35) demora bastante
print(fib(30))
```

**Depois (melhorado com cache - Simulação)**:

```python
# perf_improved.py
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Agora fib(100) é instantâneo (retorno grande, mas calculável)
print(fib(30))
print(fib(100))
```

**Observação extra (feature):** além da melhoria de performance, você poderia adicionar um parâmetro para retornar `fib(n) % m` para suportar grandes números em contextos que usam módulo, isso é uma *melhoria funcional*.

---

### 4) A Preventiva — **evitar problemas futuros** (Simulação Acadêmica)

**Cenário (Simulado):** salvar um arquivo de configuração de forma simples pode corromper o arquivo se a escrita falhar no meio do processo. Vamos implementar escrita atômica + backup + validação  ações preventivas.

**Antes (simples mas arriscado - Simulação)**:

```python
# save_old.py
import json

def save_config(path, config):
    with open(path, "w") as f:
        json.dump(config, f)

# Se a aplicação for interrompida durante o dump, o arquivo pode ficar corrompido.
```

**Depois (preventivo: valida, grava em .tmp, backup e replace atômico - Simulação)**:

```python
# save_preventive.py
import json
import os
import shutil
from datetime import datetime

def save_config(path, config):
    # validação simples
    if not isinstance(config, dict):
        raise TypeError("config deve ser um dicionário")

    tmp_path = path + ".tmp"
    # escreve em arquivo temporário e força flush/fsync
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
        f.flush()
        os.fsync(f.fileno())

    # faz backup do arquivo atual antes de substituir
    if os.path.exists(path):
        stamp = datetime.utcnow().strftime("%Y%m%d%H%M%S")
        backup_path = f"{path}.bak.{stamp}"
        shutil.copy2(path, backup_path)

    # move de forma atômica (os.replace é atômico em muitas plataformas)
    os.replace(tmp_path, path)

    # (Opcional) registrar em log que foi salvo e backup criado
    print(f"Config salva em {path}. Backup: {backup_path if os.path.exists(path + '.bak.' + stamp) else 'nenhum'}")

# Uso:
# save_config("app_config.json", {"theme": "dark", "version": 2})
```