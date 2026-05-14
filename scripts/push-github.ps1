$ErrorActionPreference = "Stop"
$repo = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $repo

$log = Join-Path $repo "git-push-output.txt"
"" | Out-File -FilePath $log -Encoding utf8

function Log([string]$m) {
  Add-Content -Path $log -Value $m
}

try {
  Log "PWD: $(Get-Location)"
  Log "git: $(git --version)"

  if (-not (Test-Path (Join-Path $repo ".git"))) {
    Log "git init..."
    git init | ForEach-Object { Log $_ }
  } else {
    Log ".git already exists"
  }

  Log "git add -A"
  git add -A 2>&1 | ForEach-Object { Log "$_" }

  Log "git status"
  git status 2>&1 | ForEach-Object { Log "$_" }

  Log "git commit"
  git commit -m "Initial commit: rulo.digital marketing site" 2>&1 | ForEach-Object { Log "$_" }

  Log "git branch -M main"
  git branch -M main 2>&1 | ForEach-Object { Log "$_" }

  Log "git remote"
  git remote remove origin 2>&1 | ForEach-Object { Log "$_" }
  git remote add origin "https://github.com/imrulo/rulodigital.git" 2>&1 | ForEach-Object { Log "$_" }
  git remote -v 2>&1 | ForEach-Object { Log "$_" }

  Log "git push"
  git push -u origin main 2>&1 | ForEach-Object { Log "$_" }

  Log "DONE OK"
} catch {
  Log "ERROR: $($_.Exception.Message)"
  Log $_.ScriptStackTrace
  exit 1
}
