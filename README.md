# Smart-Phone-Scouter: Indian Smartphone Price Hike & Deal Intelligence Hub 🇮🇳📱

SmartPhone-Scouter is a full-stack AI-powered smartphone price tracker, price hike alert engine, and Indian retailer deal comparator built with **React 18 + Vite** and a **Python FastAPI Machine Learning backend**.

![Obsidian Dark UI](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200)

## ✨ Core Features

1. **🇮🇳 Indian Rupee (₹) Market Pricing & Retailer Comparison**:
   - Compares live prices across **Amazon India (`Amazon.in`)**, **Flipkart**, **Croma**, **Reliance Digital**, **Pai International**, **Vijay Sales**, and **Official Brand Stores** (Apple India, Samsung India, OnePlus India, Mi India).
   - Highlights the **⚡ Lowest Price Deal** vendor for every smartphone model.

2. **🔴 Real-Time Price Hike & Price Drop Alerts**:
   - **`🔴 Price Hike`**: Triggers when a smartphone price increases due to high market demand or supply shortages.
   - **`🟢 Price Drop`**: Highlights active festive discounts and instant price drops off MSRP.
   - **`⚡ Record Low`**: Identifies all-time lowest price records in India.

3. **📊 6-Month Interactive SVG Price History & Email Alerts**:
   - Interactive price curve displaying 6-month historical price movements.
   - Integrated email alert form allowing users to set target price drop notifications in ₹ INR.

4. **🤖 Python FastAPI Machine Learning Trend Engine**:
   - Polynomial regression model predicting 30-day, 60-day, and 90-day price trajectories.
   - Calculates a **Price Hike Risk Index (%)** and recommends strategic buying advice (*"BUY NOW BEFORE HIKE"* vs *"SNIPE DEAL NOW"*).

5. **⚡ Side-by-Side Spec & Price Comparison Drawer**:
   - Compare up to 3 smartphones simultaneously across chipset, display, camera setup, battery charging speed, and lowest available price in India.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Lucide Icons, Web Audio API Sound Effects.
- **Styling**: Vanilla CSS with obsidian dark theme (`#070A0E`), electric cyan accents (`#00F0FF`), and glassmorphism.
- **Backend**: Python 3.10+, FastAPI, NumPy, Uvicorn.
- **Deployment**: Node.js static build + FastAPI service.

---

## 🚀 Quick Start Guide

### 1. Run Frontend App locally

```bash
# Install dependencies
npm install

# Start Vite Dev Server
npm run dev
```

The app will launch at `http://localhost:3000`.

### 2. Run Python ML Backend (Optional)

```bash
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --port 8000
```

The ML server will be active at `http://localhost:8000`.

---

## You can view the live deployment of this project here:
[https://smart-phone-scouter-mlj9cmusr-the-peak1.vercel.app/]

