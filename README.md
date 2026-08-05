# 📱 PhonePulse — Python AI Price Tracker  

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green.svg)

PhonePulse is a modern, high-performance web application combining a **Python FastAPI Machine Learning Backend**. It tracks price hikes vs drops, forecasts 90-day price curves, recommends smartphones based on budget RPM telemetry, and finds the cheapest store deals.

---

## 🐍 Python AI Features

- **FastAPI Machine Learning Service (`backend/main.py`)**:
  - `/api/predict-hike`: Uses Python's `numpy` and polynomial regression to calculate:
    - 🔴 **Price Hike Risk Index %**
    - 📊 **90-Day Projected Price Curve** (+30d, +60d, +90d)
    - 🏎️ **Recommended Action** (`BUY NOW BEFORE HIKE` vs `SNIPE DEAL NOW` vs `WAIT FOR PIT STOP`)
    - 💡 **Algorithm Trend Insights** (Slope $/mo & Volatility index)
- **Built-in Fallback**: If the Python server isn't running locally, the frontend seamlessly executes a browser-side Python-equivalent trend model so it works offline or when hosted on static GitHub Pages!

---

## 🏎️ High-Octane Interactive Features

- ⚡ **Best recommender**Real-time market stream showing live price hikes, record low deals, and instant deal toggles.
- ⏱️ **Speedometer Budget RPM Gauge**: Custom interactive SVG gauge for setting budget limits with visual speed/RPM feedback.
- 🔊 **Web Audio Synthesizer**: Native browser Web Audio feedback FX for button clicks, gear shifts, price hike alarms, and deal victory sounds.
- 🛒 **Cheapest Store Deal Link Finder**: Compares live price links across **Amazon, Best Buy, Walmart, Official Store, B&H Photo, and eBay**, highlighting the cheapest retailer.
- ⚔️ **Side-by-Side specification & Price Comparison**: Compare up to 3 smartphones side-by-side.

---

## 🚀 Running the Project

### 1. Run the Python AI Backend
```bash
cd backend
python main.py
```
*The Python FastAPI server will launch on `http://localhost:8000`.*

To test the Python API endpoints:
```bash
python test_api.py
```

### 2. Run the Frontend (React + Vite)
```bash
npm install
npm run dev
```
*Open `http://localhost:3000` in your browser.*

---

## 📤 How to Publish to GitHub

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PhonePulse Python AI & Telemetry Hub"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/smart-phone-finder.git
   git branch -M main
   git push -u origin main
   ```

---

