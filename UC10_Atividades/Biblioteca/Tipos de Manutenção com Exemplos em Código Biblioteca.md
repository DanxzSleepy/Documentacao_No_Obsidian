## **1️⃣ Manutenção Corretiva**

**Erro:** Usuários não conseguem logar no sistema.

**Código com erro (Python/Django exemplo):**

```python
# views.py
def login_user(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect('home')
    # ERRO: faltou tratamento caso user seja None
```

**Código corrigido:**

```python
def login_user(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect('home')
    else:
        messages.error(request, "Usuário ou senha inválidos")
        return redirect('login')
```

**Backlog / Issue:**

- Tipo: Corretiva
    
- Título: Corrigir login de usuários
    
- Story Points: 8
    

**Relatório:**

- **Erro:** Login não tratava usuários inválidos → falha de autenticação silenciosa
    
- **Correção:** Adicionado `else` com mensagem de erro e redirecionamento para login
    
- **Impacto:** Usuários agora conseguem receber feedback correto ao tentar logar
    

---

## **2️⃣ Manutenção Preventiva**

**Erro:** Código do módulo de empréstimos antigo e difícil de manter.

**Código com erro (Python/Django exemplo):**

```python
def emprestar_livro(user, livro):
    if livro.disponivel:
        livro.disponivel = False
        livro.save()
        user.livros.append(livro)
        user.save()
    # ERRO: Código direto, não modularizado e sem tratamento de exceções
```

**Código corrigido:**

```python
def emprestar_livro(user, livro):
    try:
        if not livro.disponivel:
            raise ValueError("Livro indisponível")
        marcar_livro_emprestado(user, livro)
    except ValueError as e:
        print(f"Erro: {e}")

def marcar_livro_emprestado(user, livro):
    livro.disponivel = False
    livro.save()
    user.livros.append(livro)
    user.save()
```

**Backlog / Issue:**

- Tipo: Preventiva
    
- Título: Refatorar módulo de empréstimos
    
- Story Points: 5
    

**Relatório:**

- **Erro:** Código direto, difícil de manter, sem modularização nem tratamento de exceções
    
- **Correção:** Refatorado em funções separadas, tratamento de exceções
    
- **Impacto:** Facilita futuras alterações e previne erros em produção
    

---

## **3️⃣ Manutenção Adaptativa**

**Erro:** API de pagamento antiga foi descontinuada

**Código com erro (Python/Django exemplo):**

```python
def processar_pagamento(valor, cartao):
    # API antiga
    response = old_payment_api.charge(cartao, valor)
    if response['status'] != 'ok':
        raise Exception("Pagamento falhou")
```

**Código corrigido:**

```python
def processar_pagamento(valor, cartao):
    # API nova
    response = new_payment_api.charge(card_number=cartao.number, amount=valor)
    if response.status != 'success':
        raise Exception("Pagamento falhou")
```

**Backlog / Issue:**

- Tipo: Adaptativa
    
- Título: Migrar para nova API de pagamento
    
- Story Points: 8
    

**Relatório:**

- **Erro:** API antiga descontinuada → pagamentos não funcionavam
    
- **Correção:** Migrado para API nova, ajustados parâmetros e verificação de status
    
- **Impacto:** Pagamentos agora processam corretamente
    

---

## **4️⃣ Manutenção Evolutiva**

**Erro:** Sistema não possui filtro por "Autor Mais Popular"

**Código com erro (Python/Django exemplo):**

```python
# views.py
def buscar_livros(request):
    query = request.GET.get('q', '')
    livros = Livro.objects.filter(titulo__icontains=query)
    return render(request, 'busca.html', {'livros': livros})
```

**Código corrigido / evolutivo:**

```python
def buscar_livros(request):
    query = request.GET.get('q', '')
    livros = Livro.objects.filter(titulo__icontains=query)
    
    # Adicionando filtro por Autor Mais Popular
    livros = livros.order_by('-autor__popularidade')  
    return render(request, 'busca.html', {'livros': livros})
```

**Backlog / Issue:**

- Tipo: Evolutiva
    
- Título: Implementar filtro “Autor Mais Popular”
    
- Story Points: 3
    

**Relatório:**

- **Erro:** Sistema não apresentava filtro por popularidade do autor
    
- **Correção:** Adicionado `order_by('-autor__popularidade')`
    
- **Impacto:** Usuários podem ver livros mais populares por autor
    

