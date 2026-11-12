@echo off
title PhytoCure AI - Local Server
echo Starting PhytoCure AI Local Server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
