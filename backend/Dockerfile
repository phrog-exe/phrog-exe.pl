FROM python:3.11-slim

WORKDIR /app

# Zainstaluj zależności systemowe (opcjonalnie dla psycopg2, ale slim zazwyczaj wystarcza)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Kopiowanie listy zależności
COPY requirements.txt .

# Instalacja zależności Pythona
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie kodu backendu
COPY . .

# Tworzenie folderu na trwałą bazę SQLite (montowany wolumen)
RUN mkdir -p /app/data

# Ustawienie zmiennej środowiskowej dla Pythona
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

# Uruchomienie aplikacji za pomocą uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
