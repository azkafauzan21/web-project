from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

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

class SimulationRequest(BaseModel):
    diameter_m: float
    velocity_kms: float
    distance_km: float

class SimulationResponse(BaseModel):
    energy_megatons: float
    crater_diameter_m: float
    eff_mag: float
    v_wind_ms: float
    overpressure_pa: float
    thermal_radiation_jm2: float
    ejecta_thickness_m: float
    vuln_crater_pct: float
    vuln_seismic_pct: float
    vuln_wind_pct: float
    vuln_pressure_pct: float
    vuln_thermal_pct: float
    vuln_ejecta_pct: float
    max_fatality_pct: float

class ActivityLogOut(BaseModel):
    id: int
    action: str
    description: Optional[str] = None
    icon: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class TopicScoreOut(BaseModel):
    topic: str
    score: float

    class Config:
        from_attributes = True

class UserProgressOut(BaseModel):
    literacy_score: float
    modules_completed: int
    n_gain: float
    streak_days: int

    class Config:
        from_attributes = True

class DashboardResponse(BaseModel):
    user: UserOut
    progress: Optional[UserProgressOut] = None
    activities: List[ActivityLogOut] = []
    topic_scores: List[TopicScoreOut] = []
