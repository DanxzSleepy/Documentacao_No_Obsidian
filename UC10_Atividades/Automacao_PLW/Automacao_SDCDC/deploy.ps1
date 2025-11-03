# Script para versionamento e deploy no GitHub Pages

# Verificar se há alterações não commitadas
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "Existem alterações não commitadas. Por favor, faça commit antes de deployar." -ForegroundColor Red
    Write-Host $gitStatus
    exit 1
}

# Definir a versão
$version = "v2.5.6"

# Criar tag da versão
Write-Host "Criando tag $version..." -ForegroundColor Green
git tag -a $version -m "Release $version"

# Push das alterações e tags
Write-Host "Enviando alterações para o repositório..." -ForegroundColor Green
git push origin master
git push origin $version

Write-Host "Deploy concluído com sucesso! Versão $version publicada." -ForegroundColor Green
Write-Host "Acesse: https://danxzsleepy.github.io/CadastroCliente_UC10/" -ForegroundColor Yellow