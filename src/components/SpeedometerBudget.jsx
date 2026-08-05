import React from 'react';
import { Sliders } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR } from '../utils/formatters';

const PRESETS = [
  { label: "₹15K", val: 15000 },
  { label: "₹30K", val: 30000 },
  { label: "₹50K", val: 50000 },
  { label: "₹80K", val: 80000 },
  { label: "₹1.2L", val: 120000 },
  { label: "Max", val: 180000 }
];

export default function SpeedometerBudget({ maxBudget, setMaxBudget }) {
  const handleChange = (e) => {
    soundFX.playSliderTick();
    setMaxBudget(Number(e.target.value));
  };

  return (
    <div className="glass-panel budget-widget">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <div className="widget-label">
            <Sliders size={16} style={{ color: 'var(--accent-primary)' }} />
            <span>Max Budget Limit</span>
          </div>

          <div className="budget-value">
            {maxBudget >= 180000 ? 'No Limit' : formatINR(maxBudget)}
          </div>
        </div>

        <input
          type="range"
          min="10000"
          max="180000"
          step="5000"
          value={maxBudget}
          onChange={handleChange}
          className="budget-slider"
        />

        <div className="budget-ticks">
          <span>₹10,000</span>
          <span>₹50,000</span>
          <span>₹1,00,000</span>
          <span>₹1,80,000+</span>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="preset-chips" style={{ marginTop: '1.25rem' }}>
        {PRESETS.map((item) => (
          <button
            key={item.val}
            className={`preset-chip ${maxBudget === item.val ? 'active' : ''}`}
            onClick={() => {
              soundFX.playClick();
              setMaxBudget(item.val);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
