from sqlalchemy import Boolean, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
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

    progress = relationship("UserProgress", back_populates="user", uselist=False)
    activities = relationship("ActivityLog", back_populates="user")
    topic_scores = relationship("TopicScore", back_populates="user")

class UserProgress(Base):
    __tablename__ = "user_progress"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    literacy_score = Column(Float, default=0.0)
    modules_completed = Column(Integer, default=0)
    n_gain = Column(Float, default=0.0)
    streak_days = Column(Integer, default=0)
    
    user = relationship("User", back_populates="progress")

class ActivityLog(Base):
    __tablename__ = "activity_logs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    action = Column(String)
    description = Column(String)
    icon = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="activities")

class TopicScore(Base):
    __tablename__ = "topic_scores"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    topic = Column(String)
    score = Column(Float, default=0.0)

    user = relationship("User", back_populates="topic_scores")
