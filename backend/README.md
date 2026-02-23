# Aimantraas FastAPI Backend

This is the FastAPI backend for the Aimantraas coming soon website. It provides API endpoints for managing email subscriptions and waitlist applications.

## Features

- **Email Subscription**: Allow users to subscribe with email and phone number
- **Waitlist Application**: Collect detailed information from potential customers
- **Data Storage**: CSV-based storage for easy management
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Validation**: Input validation using Pydantic
- **Error Handling**: Comprehensive error handling and response formatting

## Installation

1. Install Python 3.8 or higher
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Update the configuration in `.env` file if needed

## Running the Application

### Development Server

```bash
python main.py
```

### Production Server (with Uvicorn)

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Production with Gunicorn

```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000
```

## API Documentation

After starting the server, visit:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### POST /api/subscribe

Subscribe to the waitlist with email and phone.

**Request Body:**
```json
{
  "email": "user@example.com",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscribed successfully"
}
```

### POST /api/waitlist

Join the waitlist with complete information.

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "Acme Inc.",
  "industry": "Technology",
  "email": "john@acme.com",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Waitlist application received"
}
```

### GET /api/subscribers

Get all subscribers (for admin purposes).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "email": "user@example.com",
      "phone": "+1234567890",
      "timestamp": "2024-01-01T12:00:00"
    }
  ]
}
```

### GET /api/waitlist

Get all waitlist entries (for admin purposes).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "John Doe",
      "company": "Acme Inc.",
      "industry": "Technology",
      "email": "john@acme.com",
      "phone": "+1234567890",
      "timestamp": "2024-01-01T12:00:00"
    }
  ]
}
```

## Frontend Integration

Update your frontend API calls to point to the FastAPI backend:

```javascript
// For development
const API_BASE_URL = "http://localhost:8000";

// For production (replace with your domain)
const API_BASE_URL = "https://api.aimantraas.com";

// Example API call
const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "user@example.com",
    phone: "+1234567890"
  })
});
```

## Data Storage

Data is stored in CSV files in the `data/` directory:

- `subscribers.csv`: Stores email and phone subscriptions
- `wait.csv`: Stores complete waitlist applications

## Deployment

### Using Docker

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Heroku Deployment

1. Create a Heroku app
2. Install the Heroku CLI
3. Deploy:
   ```bash
   heroku login
   heroku git:remote -a your-app-name
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

## License

MIT
