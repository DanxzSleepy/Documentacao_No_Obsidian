# Backlog - Sistema de Cadastro de Clientes

## Correcoes de Bugs
1. Validacao de CPF incompleta
   - Prioridade: Alta
   - Descricao: A funcao validarCPF apenas verifica o tamanho, nao valida o formato ou digitos verificadores

2. Verificacao de cliente existente nao implementada
   - Prioridade: Alta
   - Descricao: A funcao verificarClienteExistente sempre retorna false, permitindo cadastros duplicados

3. Validacao de e-mail basica
   - Prioridade: Media
   - Descricao: A validacao de e-mail apenas verifica se ha "@" no texto, nao segue padroes de e-mail validos

4. Edicao nao atualiza dados
   - Prioridade: Alta
   - Descricao: Ao editar um cliente, os dados nao sao atualizados na lista, apenas preenchem o formulario

5. Dados nao persistentes
   - Prioridade: Alta
   - Descricao: Os dados sao perdidos ao recarregar ou fechar a pagina

## Novas Funcionalidades
1. Validacao completa de CPF
   - Prioridade: Alta
   - Descricao: Implementar algoritmo de validacao dos digitos verificadores do CPF

2. Mascaras para CPF e telefone
   - Prioridade: Media
   - Descricao: Adicionar formatacao automatica para os campos CPF e telefone

3. Busca e filtro de clientes
   - Prioridade: Media
   - Descricao: Permitir buscar clientes por nome, e-mail ou CPF

4. Exportar lista de clientes
   - Prioridade: Baixa
   - Descricao: Opcao de exportar a lista de clientes para CSV/JSON

5. Contador de clientes ativos/inativos
   - Prioridade: Baixa
   - Descricao: Mostrar estatisticas de clientes ativos e inativos

6. Confirmacao antes de excluir cliente
   - Prioridade: Media
   - Descricao: Adicionar dialogo de confirmacao antes de excluir um cliente

7. Interface melhorada
   - Prioridade: Baixa
   - Descricao: Melhorar o feedback visual e a usabilidade

8. Sistema de login basico
   - Prioridade: Baixa
   - Descricao: Implementar um sistema de login mockado

9. Modo escuro/claro
   - Prioridade: Baixa
   - Descricao: Adicionar opcao para alternar entre temas claro e escuro

## Melhorias Tecnicas
1. Separacao de responsabilidades
   - Prioridade: Alta
   - Descricao: Separar HTML, CSS e JavaScript em arquivos distintos

2. Persistencia de dados
   - Prioridade: Alta
   - Descricao: Implementar armazenamento local (localStorage) para persistir os dados

3. Refatoracao do codigo
   - Prioridade: Media
   - Descricao: Organizar melhor o codigo JavaScript e seguir boas praticas

4. Tratamento de erros
   - Prioridade: Media
   - Descricao: Adicionar tratamento adequado de erros e excecoes