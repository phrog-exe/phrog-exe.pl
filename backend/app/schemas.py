from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# Schemat dla Żaby
class FrogBase(BaseModel):
    name: str
    file: str

class FrogResponse(FrogBase):
    id: int

    class Config:
        from_attributes = True

# Schemat dla Projektu
class ProjectBase(BaseModel):
    title: str
    objective: Optional[str] = None
    method: Optional[str] = None
    strike_team: Optional[str] = None
    hardware_mod: Optional[str] = None
    tech_stack: Optional[str] = None
    source_code: Optional[str] = None
    live_link: Optional[str] = None
    image_url: Optional[str] = None
    status: Optional[str] = None
    view_logs: Optional[str] = None

class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True

# Schemat do zapisu wiadomości kontaktowej (Request)
class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

# Schemat odpowiedzi wiadomości kontaktowej (Response)
class ContactMessageResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True
