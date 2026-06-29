#!/bin/bash
cd "$(dirname "$0")/backend"
source venv/bin/activate
echo "Memulai server FastAPI di port 8001..."
uvicorn main:app --port 8001 --reload
