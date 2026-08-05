import React, { useState } from 'react';
import { Smartphone, Sun, Moon, Scale, Volume2, VolumeX, TrendingUp } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function Navbar({ theme, toggleTheme, compareList, onOpenCompare }) {
  const [soundOn, setSoundOn] = useState(true);

  const toggleSound = () => {
    soundFX.enabled = !soundOn;
    setSoundOn(!soundOn);
    if (!soundOn) soundFX.playClick();
  };

  return (
    <header className="navbar">
      <a href="#" className="brand-logo">
        <div className="brand-icon">
          <Smartphone size={20} />
        </div>
        <div>
          <div className="brand-title">PhonePulse</div>
          <div className="brand-subtitle">Python AI & Price Tracker</div>
        </div>
      </a>

      <div className="nav-actions">
        {compareList.length > 0 && (
          <button className="btn-secondary" onClick={onOpenCompare}>
            <Scale size={16} />
            <span>Compare ({compareList.length})</span>
          </button>
        )}

        <button className="btn-icon" onClick={toggleSound} title="Toggle Audio Feedback">
          {soundOn ? <Volume2 size={18} style={{ color: 'var(--accent-primary)' }} /> : <VolumeX size={18} style={{ color: 'var(--text-dim)' }} />}
        </button>

        <button className="btn-icon" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
