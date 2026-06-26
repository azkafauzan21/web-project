from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=True)
    nim = Column(String, unique=True, index=True, nullable=False)
    institution = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    astronomy_knowledge_level = Column(String, nullable=True)
    role = Column(String, default="siswa")
    is_active = Column(Boolean, default=True)
