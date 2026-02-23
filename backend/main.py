from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator
from datetime import datetime
import csv
import os
from typing import List, Optional

app = FastAPI(title="Aimantraas API", version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data directory for CSV files
DATA_DIR = "data"
os.makedirs(DATA_DIR, exist_ok=True)

# Email and phone regex patterns
PHONE_REGEX = r"^[0-9()+\-\s]{7,20}$"

# Subscription model
class SubscribeRequest(BaseModel):
    email: EmailStr
    phone: str
    
    @validator("phone")
    def validate_phone(cls, v):
        import re
        if not re.match(PHONE_REGEX, v.strip()):
            raise ValueError("Invalid phone number")
        return v.strip()

# Waitlist model
class WaitlistRequest(BaseModel):
    name: str
    company: str
    industry: str
    email: EmailStr
    phone: str
    
    @validator("name", "company", "industry")
    def validate_non_empty(cls, v):
        if not v.strip():
            raise ValueError("Field cannot be empty")
        return v.strip()
    
    @validator("phone")
    def validate_phone(cls, v):
        import re
        if not re.match(PHONE_REGEX, v.strip()):
            raise ValueError("Invalid phone number")
        return v.strip()

@app.get("/")
async def root():
    return {"message": "Aimantraas API is running"}

@app.post("/api/subscribe")
async def subscribe(request: SubscribeRequest):
    """Subscribe to the waitlist with email and phone"""
    try:
        file_path = os.path.join(DATA_DIR, "subscribers.csv")
        file_exists = os.path.isfile(file_path)
        
        with open(file_path, mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            
            if not file_exists:
                writer.writerow(["email", "phone", "timestamp"])
            
            # Check if header exists and is correct
            if file_exists:
                with open(file_path, mode='r', encoding='utf-8') as read_file:
                    first_line = read_file.readline().strip()
                    if first_line != "email,phone,timestamp":
                        # Migrate existing file
                        with open(file_path, mode='r', encoding='utf-8') as r:
                            lines = r.readlines()
                        with open(file_path, mode='w', newline='', encoding='utf-8') as w:
                            w.write("email,phone,timestamp\n")
                            for line in lines[1:]:
                                line = line.strip()
                                if line:
                                    parts = line.split(",")
                                    if len(parts) == 2:
                                        w.write(f"{parts[0]},,{parts[1]}\n")
                                    else:
                                        w.write(f"{line}\n")
            
            # Write new entry
            timestamp = datetime.now().isoformat()
            writer.writerow([request.email, request.phone, timestamp])
        
        return {"success": True, "message": "Subscribed successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Something went wrong: {str(e)}")

@app.post("/api/waitlist")
async def waitlist(request: WaitlistRequest):
    """Join the waitlist with complete information"""
    try:
        file_path = os.path.join(DATA_DIR, "wait.csv")
        file_exists = os.path.isfile(file_path)
        
        with open(file_path, mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            
            if not file_exists:
                writer.writerow(["name", "company", "industry", "email", "phone", "timestamp"])
            
            # Check if header exists and is correct
            if file_exists:
                with open(file_path, mode='r', encoding='utf-8') as read_file:
                    first_line = read_file.readline().strip()
                    if first_line != "name,company,industry,email,phone,timestamp":
                        # Migrate existing file
                        with open(file_path, mode='r', encoding='utf-8') as r:
                            lines = r.readlines()
                        with open(file_path, mode='w', newline='', encoding='utf-8') as w:
                            w.write("name,company,industry,email,phone,timestamp\n")
                            for line in lines[1:]:
                                line = line.strip()
                                if line:
                                    parts = line.split(",")
                                    if len(parts) < 6:
                                        parts.extend(["" for _ in range(6 - len(parts))])
                                    w.write(f"{','.join(parts)}\n")
            
            # Write new entry
            timestamp = datetime.now().isoformat()
            writer.writerow([
                request.name,
                request.company,
                request.industry,
                request.email,
                request.phone,
                timestamp
            ])
        
        return {"success": True, "message": "Waitlist application received"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Something went wrong: {str(e)}")

@app.get("/api/subscribers")
async def get_subscribers():
    """Get all subscribers (for admin purposes)"""
    try:
        file_path = os.path.join(DATA_DIR, "subscribers.csv")
        if not os.path.isfile(file_path):
            return {"success": True, "data": []}
        
        with open(file_path, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            subscribers = list(reader)
        
        return {"success": True, "data": subscribers}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Something went wrong: {str(e)}")

@app.get("/api/waitlist")
async def get_waitlist():
    """Get all waitlist entries (for admin purposes)"""
    try:
        file_path = os.path.join(DATA_DIR, "wait.csv")
        if not os.path.isfile(file_path):
            return {"success": True, "data": []}
        
        with open(file_path, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            waitlist = list(reader)
        
        return {"success": True, "data": waitlist}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Something went wrong: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
