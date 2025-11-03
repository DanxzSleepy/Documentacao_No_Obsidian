# UC10 - Realizar Testes nas Aplicações Desenvolvidas
## Aula 2: Classificação de Falhas e Preparação para Testes Unitários

### 📌 Bloco 1: Ação - Formalizando os Conceitos

#### Tarefa 1.1: Pesquisa Individual e Glossário

**DEFEITO (Bug/Defect):** 
É uma falha ou anomalia no código fonte de um software que pode causar um comportamento incorreto ou inesperado. O defeito está no código implementado, como uma lógica incorreta, uma condição mal formulada ou a ausência de uma validação necessária. No contexto do Sistema de Cadastro de Clientes, um defeito seria a falta da implementação da validação completa de CPF no algoritmo JavaScript.

**ERRO (Mistake/Error):**
É a ação humana incorreta que leva à introdução de um defeito no software. É cometido pelo desenvolvedor, analista ou qualquer membro da equipe durante o processo de desenvolvimento. No exemplo do CPF, o erro seria a omissão do desenvolvedor em implementar a verificação dos dígitos verificadores do CPF, seja por desconhecimento do algoritmo ou por descuido.

**FALHA (Failure):**
É o desvio do comportamento esperado do software quando executado. É o que o usuário final percebe quando o sistema não funciona conforme o esperado. No caso do CPF inválido, a falha seria o sistema aceitar e cadastrar um cliente com CPF 111.111.111-11, comprometendo a integridade dos dados.

#### Tarefa 1.2: Classificação das Falhas

A seguir, a classificação das 10 falhas mais críticas encontradas no Sistema de Cadastro de Clientes:

| Falha Encontrada (Descrição) | Defeito (no Código) | Erro (Humano) | Falha (no Comportamento) |
|------------------------------|---------------------|---------------|--------------------------|
| Cadastro de CPF inválido (111.111.111-11) | Ausência de lógica de validação de dígitos verificadores (`return cpf.length > 0;`) | Falha no Requisito - Omissão da implementação completa da validação de CPF | O sistema aceitou o cadastro e inseriu o dado inválido na lista |
| CPF com formato incorreto aceito | Validação CPF não remove caracteres especiais antes da verificação | Erro de Lógica de Programação - Não considerar formatação na validação | Sistema cadastra CPF com pontos e traços sem validação real |
| E-mail sem validação de formato | Verificação apenas se campo contém "@" (`email.includes("@")`) | Falha no Requisito - Ausência de validação completa de e-mail | Sistema aceita e-mails inválidos como "usuario@" |
| Cliente duplicado cadastrado | Função `verificarClienteExistente()` sempre retorna false | Erro de Lógica de Programação - Comparação incorreta de dados | Sistema permite cadastro de clientes com mesmo CPF ou e-mail |
| Dados perdidos ao recarregar página | Ausência de persistência de dados (localStorage) | Falha no Requisito - Não implementar persistência | Usuário perde todos os dados ao atualizar a página |
| Exclusão sem confirmação | Função `excluirCliente()` remove diretamente sem confirmação | Falha de Usabilidade - Ausência de confirmação em operações críticas | Usuário exclui cliente acidentalmente sem confirmação |
| Formulário sem máscaras | Campos CPF e telefone sem formatação automática | Falha de Usabilidade - Não implementar máscaras de entrada | Usuário digita dados sem formatação adequada |
| Edição não atualiza dados | Função `editarCliente()` apenas preenche formulário | Erro de Lógica de Programação - Não atualizar objeto no array | Usuário pensa que editou, mas dados não são salvos |
| País/Cidade sem validação | Campos obrigatórios não verificados antes do envio | Falha no Requisito - Ausência de validação de campos obrigatórios | Sistema tenta cadastrar cliente sem país/cidade selecionados |
| Busca sem diferenciação maiúsculas/minúsculas | Função `filtrarClientes()` faz comparação case sensitive | Falha de Usabilidade - Não considerar variações de entrada | Usuário não encontra cliente ao digitar nome em caixa alta |

### 🧐 Bloco 2: Reflexão - Preparando o Teste Unitário

#### Tarefa 2.1: Análise e Separação de Módulos

As funções `validarCPFCompleto(cpf)` e `validarEmailCompleto(email)` são ideais para Testes Unitários porque:

1. **Isolamento de funcionalidade:** Cada função tem uma única responsabilidade bem definida (validar um tipo específico de dado)
2. **Entrada e saída previsíveis:** Recebem um parâmetro e retornam um valor booleano previsível
3. **Independência:** Não dependem de estado global, DOM ou interações externas
4. **Reusabilidade:** Podem ser testadas em qualquer contexto sem configuração adicional

Em contraste, o clique no botão "Cadastrar" é um Teste de Sistema porque:
1. **Integração de múltiplos componentes:** Envolvendo HTML, validações, manipulação do DOM, localStorage, etc.
2. **Dependência de estado:** Requer que o formulário esteja preenchido
3. **Efeitos colaterais:** Modifica o estado da aplicação e persiste dados
4. **Fluxo completo:** Engloba todo o processo de cadastro do cliente

#### Tarefa 2.2: Particionamento de Equivalência

Para testar a função `validarEmailCompleto(email)`, a teoria de Particionamento de Equivalência sugere dividir as entradas em classes onde todos os membros de uma classe são tratados da mesma forma pelo sistema:

| Classe de Equivalência | Exemplo de Entrada | Resultado Esperado (True/False) |
|------------------------|-------------------|---------------------------------|
| Válida (Com formato correto) | usuario@dominio.com | True |
| Válida (Com subdomínio) | nome.sobrenome@sub.dominio.com.br | True |
| Inválida (Sem @) | usuariodominio.com | False |
| Inválida (Sem domínio) | usuario@ | False |
| Inválida (Sem usuário) | @dominio.com | False |
| Inválida (Caracteres especiais proibidos) | usuario@!dominio.com | False |
| Inválida (Espaços) | usuario @dominio.com | False |
| Vazia | "" | False |

### 🚀 Bloco 3: Nova Ação - Modelando Casos de Teste Unitário

#### Tarefa 3.1: Criação de 5 Casos de Teste Unitário para `validarCPFCompleto(cpf)`

| Nome do Teste | Pré-Condições | Passos para Executar | Resultado Esperado | Tipo de Teste |
|---------------|---------------|---------------------|-------------------|---------------|
| CTU-001: CPF Válido | Nenhuma | Chamar a função validarCPFCompleto('123.456.789-09') | True | Unitário |
| CTU-002: Dígitos Repetidos | Nenhuma | Chamar a função validarCPFCompleto('111.111.111-11') | False | Unitário |
| CTU-003: CPF com 10 dígitos | Nenhuma | Chamar a função validarCPFCompleto('123.456.789-0') | False | Unitário |
| CTU-004: CPF com Letras | Nenhuma | Chamar a função validarCPFCompleto('abc.123.456-78') | False | Unitário |
| CTU-005: CPF Vazio | Nenhuma | Chamar a função validarCPFCompleto('') | False | Unitário |
| CTU-006: CPF com caracteres especiais | Nenhuma | Chamar a função validarCPFCompleto('123!456@789-09') | False | Unitário |
| CTU-007: CPF com 12 dígitos | Nenhuma | Chamar a função validarCPFCompleto('123.456.789-099') | False | Unitário |
| CTU-008: CPF válido sem formatação | Nenhuma | Chamar a função validarCPFCompleto('12345678909') | True | Unitário |
| CTU-009: CPF com dígitos verificadores incorretos | Nenhuma | Chamar a função validarCPFCompleto('123.456.789-00') | False | Unitário |
| CTU-010: CPF com espaços | Nenhuma | Chamar a função validarCPFCompleto(' 123.456.789-09 ') | True | Unitário |

### 📋 Considerações Finais

A classificação entre defeito, erro e falha é fundamental para o processo de desenvolvimento de software, pois permite:

1. **Identificar a raiz do problema:** Saber se o problema está no código, na implementação ou no comportamento
2. **Direcionar correções apropriadas:** Corrigir o código para defeitos, treinar desenvolvedores para erros e melhorar a experiência do usuário para falhas
3. **Prevenir problemas futuros:** Compreender a origem dos problemas ajuda a estabelecer práticas de desenvolvimento mais robustas
4. **Melhorar a qualidade do software:** Através de testes unitários direcionados às funções críticas

A preparação para testes unitários é essencial para garantir a qualidade do software, permitindo validar funcionalidades isoladas de forma rápida, automatizada e confiável.