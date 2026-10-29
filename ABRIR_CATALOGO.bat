@echo off
title Nosda Clei - Catalogo de Croche Artesanal
color 0D
echo ======================================================================
echo           NOSDA CLEI - CROCHE ARTESANAL & AFETO FEITO A MAO
echo ======================================================================
echo.
echo  Iniciando o servidor local e abrindo o catalogo no seu navegador...
echo.
echo  Aguarde alguns segundos...
echo.

start "" "http://localhost:5173"
call npm run dev

pause
