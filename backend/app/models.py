from sqlalchemy import Column, Integer, String, Text, DateTime, func
from .database import Base

class Frog(Base):
    __tablename__ = "frogs"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    file = Column(String(255), nullable=False)

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    objective = Column(String(500), nullable=True)
    method = Column(String(500), nullable=True)
    strike_team = Column(String(255), nullable=True)
    hardware_mod = Column(String(500), nullable=True)
    tech_stack = Column(String(255), nullable=True)
    source_code = Column(String(255), nullable=True)
    live_link = Column(String(255), nullable=True)
    image_url = Column(String(255), nullable=True)
    status = Column(String(50), nullable=True)
    view_logs = Column(Text, nullable=True)

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
