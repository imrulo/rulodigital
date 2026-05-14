@echo off
setlocal
cd /d "%~dp0"

echo Resolviendo README.md quedandose con la version LOCAL del proyecto...
git checkout --ours README.md
if errorlevel 1 (
  echo [ERROR] No pude hacer checkout --ours. Revisa: git status
  exit /b 1
)

git add README.md
git commit -m "Merge origin/main; keep local README"
if errorlevel 1 (
  echo [ERROR] No pude completar el commit de merge. Pega aqui la salida de: git status
  exit /b 1
)

echo Subiendo...
git push -u origin main
if errorlevel 1 (
  echo [ERROR] Push fallo. Revisa autenticacion.
  exit /b 1
)

echo LISTO.
endlocal
