#!/bin/bash

# Aimantraas FastAPI Backend Startup Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Python is installed
if ! command_exists python3; then
    echo -e "${RED}Error: Python 3 is not installed.${NC}"
    exit 1
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo -e "${YELLOW}Creating virtual environment...${NC}"
    python3 -m venv venv
fi

# Activate virtual environment
echo -e "${YELLOW}Activating virtual environment...${NC}"
source venv/bin/activate

# Check if pip is available
if ! command_exists pip; then
    echo -e "${RED}Error: pip is not available in the virtual environment.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
pip install -r requirements.txt

# Create data directory if it doesn't exist
mkdir -p data

# Check if .env file exists, create from example if not
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}Creating .env file from .env.example...${NC}"
    cp .env.example .env
fi

# Run the application
echo -e "${GREEN}Starting Aimantraas API server...${NC}"
echo -e "${GREEN}API Documentation: http://localhost:8000/docs${NC}"
python3 main.py
