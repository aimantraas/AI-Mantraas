@echo off
title Aimantraas FastAPI Backend

echo ===============================================
echo  Aimantraas FastAPI Backend Startup Script
echo ===============================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python 3 is not installed. Please install Python 3.8 or higher.
    pause
    exit /b 1
)

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo [INFO] Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo [INFO] Activating virtual environment...
call venv\Scripts\activate.bat

REM Install dependencies
echo [INFO] Installing dependencies...
pip install -r requirements.txt

REM Create data directory if it doesn't exist
if not exist "data" mkdir data

REM Check if .env file exists, create from example if not
if not exist ".env" (
    echo [INFO] Creating .env file from .env.example...
    copy .env.example .env
)

REM Run the application
echo.
echo [SUCCESS] Starting Aimantraas API server...
echo [INFO] API Documentation: http://localhost:8000/docs
python main.py

pause
