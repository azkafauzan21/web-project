from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    first_name: str
    last_name: Optional[str] = None
    nim: str
    institution: str
    email: EmailStr
    astronomy_knowledge_level: Optional[str] = None
    role: str = "siswa"

class UserUpdate(BaseModel):
    astronomy_knowledge_level: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
