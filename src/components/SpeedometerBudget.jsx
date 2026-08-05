import React from 'react';
import { Sliders } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

const PRESETS = [
  { label: "₹15K", val: 15000 },
  { label: "₹30K", val: 30000 },
  { label: "₹50K", val: 50000 },
  { label: "₹80K", val: 80000 },
  { label: "₹1.2L", val: 120000 },
  { label: "Max", val: 180000 }
];

export default function SpeedometerBudget({ budgetLimit, onChangeBudget, maxBudget, setMaxBudget }) {
  const currentBudget = budgetLimit !== undefined ? budgetLimit : (maxBudget !== undefined ? maxBudget : 180000);
  const updateBudget = onChangeBudget || setMaxBudget || (() => {});

  const formatINR = (val) => "₹" + val.toLocaleString('en-IN');

  const handleChange = (e) => {
    soundFX.playSliderTick();
    updateBudget(Number(e.target.value));
  };

  return (
    <div className="glass-panel budget-widget">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <div className="widget-label">
            <Sliders size={18} style={{ color: 'var(--accent-primary)' }} />
            <span>Max Budget Limit</span>
          </div>

          <div className="budget-value" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-primary)' }}>
            {currentBudget >= 180000 ? 'No Limit' : formatINR(currentBudget)}
          </div>
        </div>

        <input
          type="range"
          min="10000"
          max="180000"
          step="5000"
          value={currentBudget}
          onChange={handleChange}
          className="budget-slider"
        />

        <div className="budget-ticks" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>
          <span>₹10,000</span>
          <span>₹50,000</span>
          <span>₹1,00,000</span>
          <span>₹1,80,000+</span>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="preset-chips" style={{ marginTop: '1.25rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {PRESETS.map((item) => (
          <button
            key={item.val}
            className={`preset-chip ${currentBudget === item.val ? 'active' : ''}`}
            onClick={() => {
              soundFX.playClick();
              updateBudget(item.val);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
