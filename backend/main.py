from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
from typing import List, Optional
import math

app = FastAPI(
    title="PhonePulse Python AI Price Hike Predictor API",
    description="Machine learning price forecasting engine for smartphones.",
    version="1.0.0"
)

# Enable CORS for Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PricePoint(BaseModel):
    month: str
    price: float

class HikePredictionRequest(BaseModel):
    phone_id: str
    phone_name: str
    current_price: float
    launch_price: float
    lowest_price: float
    highest_price: float
    price_history: List[PricePoint]

class PredictionResponse(BaseModel):
    phone_id: str
    hike_probability: float  # 0 to 100%
    risk_level: str          # "HIGH RISK", "MODERATE", "LOW RISK", "RECORD LOW DEALS"
    recommended_action: str  # "BUY NOW", "WAIT FOR PIT STOP", "SNIPE DEAL"
    projected_price_30d: float
    projected_price_60d: float
    projected_price_90d: float
    ai_confidence: float
    forecast_points: List[dict]
    insights: List[str]

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "PhonePulse Python AI Price Engine",
        "algorithm": "Polynomial Trend Regression & Market Volatility Predictor v1.0",
        "racing_mode": "Lando Norris Telemetry Enabled 🏎️"
    }

@app.post("/api/predict-hike", response_model=PredictionResponse)
def predict_price_hike(data: HikePredictionRequest):
    prices = [p.price for p in data.price_history]
    if not prices:
        prices = [data.launch_price, data.current_price]
    
    # Python Polynomial & Linear Trend Fitting using numpy
    x = np.arange(len(prices))
    y = np.array(prices)

    # Calculate slope and trend momentum
    if len(prices) >= 2:
        slope, intercept = np.polyfit(x, y, 1)
    else:
        slope = 0.0

    # Recent momentum (last 2 price points)
    recent_delta = prices[-1] - prices[-2] if len(prices) >= 2 else 0
    volatility = float(np.std(prices)) if len(prices) > 1 else 10.0

    # Calculate Hike Probability Score (%)
    hike_score = 50.0
    
    # If price recently jumped up
    if recent_delta > 0:
        hike_score += 25.0
    elif recent_delta < 0:
        hike_score -= 20.0

    # If current price is near highest historical price
    if data.current_price >= data.highest_price - 20:
        hike_score += 20.0
    
    # If slope is positive (upward price trend)
    if slope > 5:
        hike_score += 15.0
    elif slope < -5:
        hike_score -= 15.0

    hike_probability = float(np.clip(hike_score, 5.0, 95.0))

    # Determine Risk Level & Recommendation
    if hike_probability >= 70:
        risk_level = "HIGH RISK OF PRICE HIKE 🔴"
        action = "BUY NOW BEFORE HIKE"
    elif hike_probability <= 35:
        risk_level = "PRICE DROP ZONE 🟢"
        action = "SNIPE DEAL NOW"
    else:
        risk_level = "STABLE MARKET 🟡"
        action = "WAIT FOR PIT STOP"

    # Project 30d, 60d, 90d prices using Python ML trend line
    last_x = len(prices) - 1
    proj_30d = float(round(max(data.lowest_price * 0.9, prices[-1] + slope * 1.0 + (5 if hike_probability > 60 else -10)), 2))
    proj_60d = float(round(max(data.lowest_price * 0.85, prices[-1] + slope * 2.0 + (10 if hike_probability > 60 else -20)), 2))
    proj_90d = float(round(max(data.lowest_price * 0.8, prices[-1] + slope * 3.0 + (15 if hike_probability > 60 else -30)), 2))

    # Forecast points for visualization graph
    forecast_points = [
        {"day": "Current", "price": data.current_price},
        {"day": "+30 Days", "price": proj_30d},
        {"day": "+60 Days", "price": proj_60d},
        {"day": "+90 Days", "price": proj_90d}
    ]

    insights = [
        f"Python Numpy ML trend slope: {'Upward +' if slope >= 0 else 'Downward '}{slope:.1f}$/mo",
        f"Historical volatility index: {volatility:.1f} USD standard deviation",
        f"Current price is {data.current_price - data.lowest_price:.0f}$ above historical record low (${data.lowest_price})"
    ]

    return PredictionResponse(
        phone_id=data.phone_id,
        hike_probability=round(hike_probability, 1),
        risk_level=risk_level,
        recommended_action=action,
        projected_price_30d=proj_30d,
        projected_price_60d=proj_60d,
        projected_price_90d=proj_90d,
        ai_confidence=float(round(85.0 + min(12.0, len(prices) * 2.0), 1)),
        forecast_points=forecast_points,
        insights=insights
    )

if __name__ == "__main__":
    import uvicorn
    print("🏎️ Launching PhonePulse Python AI Engine on http://localhost:8000 ...")
    uvicorn.run(app, host="0.0.0.0", port=8000)
