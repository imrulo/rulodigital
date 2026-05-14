@echo off
setlocal EnableExtensions
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git no esta en PATH. Instala "Git for Windows" y reinicia la terminal.
  exit /b 1
)

echo [1/6] Repo local...
if not exist ".git" (
  git init -b main
) else (
  git branch -M main 2>nul
)

echo [2/6] Staging...
git add -A
git status

echo [3/6] Commit ^(si hay cambios^)...
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Initial commit: rulo.digital marketing site"
  if errorlevel 1 (
    echo.
    echo [ERROR] No pude hacer commit. Lo mas tipico:
    echo   - Falta identidad: ejecuta:
    echo       git config --global user.name "Tu Nombre"
    echo       git config --global user.email "tu@email.com"
    echo   - O no hay cambios nuevos para commitear.
    exit /b 1
  )
) else (
  echo Sin cambios nuevos para commitear ^(ok^).
)

echo [4/6] Rama main...
git branch -M main 2>nul

echo [5/6] Remote origin...
git remote remove origin 2>nul
git remote add origin "https://github.com/imrulo/rulodigital.git"
git remote -v

echo [6/6] Push...
git push -u origin main
if errorlevel 1 (
  echo.
  echo [AVISO] Primer push fallo. Intentando fusionar historial remoto ^(p.ej. README creado en GitHub^)...
  git pull origin main --allow-unrelated-histories --no-edit
  if errorlevel 1 (
    echo [ERROR] pull fallo. Revisa autenticacion / permisos del repo.
    goto :authhelp
  )
  git push -u origin main
  if errorlevel 1 goto :authhelp
)

echo.
echo LISTO: codigo subido a https://github.com/imrulo/rulodigital
endlocal
exit /b 0

:authhelp
echo.
echo [ERROR] Push fallo. Autenticacion GitHub ^(elige UNA^):
echo   A) GitHub CLI:
echo        winget install GitHub.cli
echo        gh auth login
echo        git push -u origin main
echo   B) HTTPS + PAT ^(classic con scope "repo"^):
echo        cuando pida password, pega el PAT ^(no tu password de GitHub^)
echo   C) SSH:
echo        git remote set-url origin git@github.com:imrulo/rulodigital.git
echo        git push -u origin main
endlocal
exit /b 1
