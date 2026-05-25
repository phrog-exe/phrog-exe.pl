import random
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

from .database import engine, Base, get_db
from .models import Frog, Project, ContactMessage
from .schemas import FrogResponse, ProjectResponse, ContactMessageCreate, ContactMessageResponse
from .seed import seed_data

# 1. INICJALIZACJA BAZY DANYCH (Automatyczne tworzenie tabel)
Base.metadata.create_all(bind=engine)

# 2. ZASIEWANIE BAZY DANYCH (Seeding)
db = next(get_db())
try:
    seed_data(db)
finally:
    db.close()

# 3. UTWORZENIE APLIKACJI FASTAPI
app = FastAPI(
    title="phrog-exe.pl API",
    description="Backend API dla portfolio cyfrowego ogrodu",
    version="1.0.0"
)

# 4. KONFIGURACJA CORS (Pozwala na komunikację React <-> FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Zezwala na dowolne pochodzenie (przydatne przy testach na telefonie/lokalnie)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. ENDPOINTY (TRASY API)

# Pobranie wszystkich żab
@app.get("/api/frogs", response_model=List[FrogResponse], summary="Lista wszystkich żab")
def get_all_frogs(db: Session = Depends(get_db)):
    return db.query(Frog).all()

# Pobranie losowej żaby (Żaba Dnia)
@app.get("/api/frogs/random", response_model=FrogResponse, summary="Losowanie Żaby Dnia")
def get_random_frog(db: Session = Depends(get_db)):
    frogs = db.query(Frog).all()
    if not frogs:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Brak żab w bazie danych."
        )
    return random.choice(frogs)

# Pobranie listy projektów
@app.get("/api/projects", response_model=List[ProjectResponse], summary="Lista wszystkich projektów")
def get_all_projects(db: Session = Depends(get_db)):
    return db.query(Project).order_by(Project.id).all()

# Zapisanie nowej wiadomości kontaktowej
@app.post("/api/contact", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED, summary="Wyślij wiadomość kontaktową")
def create_contact_message(message: ContactMessageCreate, db: Session = Depends(get_db)):
    db_message = ContactMessage(
        name=message.name,
        email=message.email,
        message=message.message
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
