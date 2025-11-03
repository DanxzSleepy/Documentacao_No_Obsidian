# 🐛 Bugs Identificados - v1.0.0

## Diferenças entre Erro, Bug e Falha

### ❌ Erro
Um erro é uma ação incorreta realizada por um desenvolvedor durante a criação do software. É uma falha humana no processo de desenvolvimento.

### 🐛 Bug
Um bug é um defeito ou anomalia no software que causa um comportamento inesperado ou indesejado. É o resultado de um erro de programação.

### 🔥 Falha
Uma falha ocorre quando o software não funciona conforme especificado ou esperado pelo usuário. É o impacto visível de um bug.

## Lista de Problemas Identificados

### 1. Validação de CPF Incompleta
- **Tipo**: Bug
- **Descrição**: A função `validarCPF()` apenas verifica se o campo não está vazio, mas não valida o formato ou os dígitos verificadores do CPF.
- **Impacto**: Permite cadastro de CPFs inválidos, comprometendo a integridade dos dados.
- **Localização**: Linhas 157-159 do arquivo index.html

### 2. Verificação de Cliente Existente Não Implementada
- **Tipo**: Bug
- **Descrição**: A função `verificarClienteExistente()` sempre retorna `false`, permitindo cadastros duplicados de clientes com mesmo CPF ou e-mail.
- **Impacto**: Banco de dados de clientes fica inconsistente com registros duplicados.
- **Localização**: Linhas 161-163 do arquivo index.html

### 3. Validação de E-mail Básica
- **Tipo**: Bug
- **Descrição**: A função `validarEmail()` apenas verifica se o texto contém "@", mas não valida se é um endereço de e-mail válido.
- **Impacto**: Permite cadastro de e-mails inválidos, impossibilitando comunicação futura com o cliente.
- **Localização**: Linhas 153-155 do arquivo index.html

### 4. Edição Não Atualiza Dados
- **Tipo**: Falha
- **Descrição**: A função `editarCliente()` apenas preenche o formulário com os dados do cliente, mas não atualiza os dados na lista quando o formulário é submetido novamente.
- **Impacto**: O usuário tem a falsa impressão de que pode editar clientes, mas as alterações não são salvas.
- **Localização**: Linhas 195-205 do arquivo index.html

### 5. Dados Não Persistentes
- **Tipo**: Falha
- **Descrição**: Os dados dos clientes são armazenados apenas em memória (variável `clientes`), sendo perdidos ao recarregar ou fechar a página.
- **Impacto**: Sistema impraticável para uso real, pois todos os dados são perdidos após sair da página.
- **Localização**: Variável `clientes` declarada na linha 148 do arquivo index.html

### 6. Ausência de Máscaras de Formatação
- **Tipo**: Erro (falta de implementação)
- **Descrição**: Os campos CPF e telefone não possuem máscaras de formatação automática, dificultando o preenchimento correto.
- **Impacto**: Experiência do usuário prejudicada, com maior probabilidade de erros de digitação.
- **Localização**: Campos CPF (linha 83) e telefone (linha 90) do arquivo index.html

### 7. Exclusão Sem Confirmação
- **Tipo**: Erro (falta de implementação)
- **Descrição**: A função `excluirCliente()` remove o cliente imediatamente sem pedir confirmação do usuário.
- **Impacto**: Risco de exclusão acidental de registros importantes.
- **Localização**: Linhas 207-211 do arquivo index.html

### 8. Código Não Modularizado
- **Tipo**: Erro (má prática de desenvolvimento)
- **Descrição**: Todo o código HTML, CSS e JavaScript está em um único arquivo, dificultando manutenção e colaboração.
- **Impacto**: Dificuldade de manutenção, testes e expansão do sistema.
- **Localização**: Arquivo index.html inteiro

### 9. Falta de Tratamento de Erros
- **Tipo**: Erro (má prática de desenvolvimento)
- **Descrição**: O código não possui tratamento adequado de erros e exceções que podem ocorrer durante a execução.
- **Impacto**: Em caso de falhas, o sistema pode parar de funcionar sem feedback adequado ao usuário.
- **Localização**: Em todo o código JavaScript