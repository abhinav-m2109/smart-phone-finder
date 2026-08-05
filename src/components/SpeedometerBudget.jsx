import React from 'react';
import { Gauge, Zap, Flame } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function SpeedometerBudget({ maxBudget, setMaxBudget }) {
  const PRESETS = [250, 400, 600, 900, 1500];

  // Calculate gauge angle (0 to 180 deg)
  const minB = 150;
  const maxB = 1600;
  const percentage = Math.min(100, Math.max(0, ((maxBudget - minB) / (maxB - minB)) * 100));
  const needleAngle = -90 + (percentage * 1.8);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setMaxBudget(val);
    if (val % 200 === 0) {
      soundFX.playGearShift();
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(145deg, rgba(20, 26, 40, 0.95), rgba(10, 14, 24, 0.95))',
      border: '1px solid rgba(255, 135, 0, 0.3)',
      borderRadius: '20px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Decorative neon accent strip */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #FF8700, #00F0FF, #D946EF)'
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Gauge size={20} style={{ color: '#FF8700' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '0.05em' }}>
            Budget RPM Telemetry
          </span>
        </div>

        <div style={{
          background: 'rgba(255, 135, 0, 0.15)',
          border: '1px solid #FF8700',
          padding: '0.3rem 0.85rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          fontWeight: 900,
          color: '#FF8700',
          boxShadow: '0 0 15px rgba(255, 135, 0, 0.2)'
        }}>
          ${maxBudget}
        </div>
      </div>

      {/* Speedometer Visual SVG Gauge */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 1.25rem 0', position: 'relative' }}>
        <svg width="220" height="120" viewBox="0 0 220 120">
          {/* Outer Arc */}
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Active Colored Arc */}
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="url(#speedGradient)"
            strokeWidth="14"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * percentage) / 100}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
          />

          {/* Needle */}
          <g transform={`rotate(${needleAngle}, 110, 110)`} style={{ transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <line x1="110" y1="110" x2="110" y2="35" stroke="#FF8700" strokeWidth="4" strokeLinecap="round" />
            <circle cx="110" cy="110" r="8" fill="#FFF" stroke="#FF8700" strokeWidth="3" />
          </g>

          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#FF8700" />
            </linearGradient>
          </defs>
        </svg>

        <div style={{
          position: 'absolute',
          bottom: '5px',
          fontSize: '0.75rem',
          color: 'var(--text-dim)',
          fontWeight: 700
        }}>
          {percentage > 75 ? '🔥 UNLIMITED POWER' : percentage > 40 ? '⚡ MID-RANGE SWEET SPOT' : '💡 VALUE ZONE'}
        </div>
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min="150"
        max="1600"
        step="25"
        value={maxBudget}
        onChange={handleSliderChange}
        className="range-slider"
        style={{ marginBottom: '1rem' }}
      />

      {/* Presets */}
      <div className="budget-presets">
        {PRESETS.map((val) => (
          <button
            key={val}
            className={`preset-chip ${maxBudget === val ? 'active' : ''}`}
            onClick={() => {
              setMaxBudget(val);
              soundFX.playClick();
            }}
          >
            ${val}
          </button>
        ))}
        <button
          className={`preset-chip ${maxBudget === 1600 ? 'active' : ''}`}
          onClick={() => {
            setMaxBudget(1600);
            soundFX.playClick();
          }}
        >
          Any Budget
        </button>
      </div>
    </div>
  );
}
