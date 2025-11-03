# Script para verificar se o deploy no GitHub Pages foi bem-sucedido
Write-Host "Verificando status do deploy no GitHub Pages..." -ForegroundColor Green

# Verificar se o workflow foi acionado
Write-Host "1. Verificando workflows acionados..." -ForegroundColor Yellow
git fetch origin
$lastCommit = git rev-parse HEAD
Write-Host "Último commit: $lastCommit" -ForegroundColor Cyan

# Verificar se a branch gh-pages existe
Write-Host "2. Verificando branch gh-pages..." -ForegroundColor Yellow
try {
    git fetch origin gh-pages -q
    Write-Host "Branch gh-pages encontrada!" -ForegroundColor Green
} catch {
    Write-Host "Branch gh-pages ainda não criada. Aguarde alguns minutos e tente novamente." -ForegroundColor Red
}

# Verificar URL do GitHub Pages
Write-Host "3. Verificando URL do GitHub Pages..." -ForegroundColor Yellow
$username = git remote get-url origin | ForEach-Object { ($_ -split '/')[3] }
$repo = git remote get-url origin | ForEach-Object { ($_ -split '/')[4] -replace '\.git$', '' }
$url = "https://$username.github.io/$repo/"

Write-Host "URL do site: $url" -ForegroundColor Cyan
Write-Host "Acesse o site após alguns minutos para verificar se o deploy foi bem-sucedido." -ForegroundColor Yellow

# Testar se o site está online (opcional)
# Invoke-WebRequest -Uri $url -Method HEAD -UseBasicParsing