import React from 'react';
import { SlidersHorizontal, DollarSign } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function SpeedometerBudget({ maxBudget, setMaxBudget }) {
  const PRESETS = [250, 400, 650, 950, 1500];

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setMaxBudget(val);
    if (val % 250 === 0) {
      soundFX.playClick();
    }
  };

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '16px',
      padding: '1.25rem 1.5rem',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)' }}>
          <SlidersHorizontal size={14} style={{ color: 'var(--accent-primary)' }} />
          Target Budget Limit
        </div>

        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.35rem',
          fontWeight: 800,
          color: 'var(--accent-primary)'
        }}>
          ${maxBudget === 1600 ? '1600+' : maxBudget}
        </div>
      </div>

      <input
        type="range"
        min="150"
        max="1600"
        step="25"
        value={maxBudget}
        onChange={handleSliderChange}
        className="range-slider"
        style={{ marginBottom: '0.85rem' }}
      />

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
          Any Price
        </button>
      </div>
    </div>
  );
}
