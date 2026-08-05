import React, { useState } from 'react';
import { Smartphone, Sun, Moon, Scale, Volume2, VolumeX, Cpu } from 'lucide-react';
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
          📱
        </div>
        <div>
          <div className="brand-title">PhonePulse 🏎️</div>
          <div style={{ fontSize: '0.72rem', color: '#00F0FF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Python AI & Lando Norris Telemetry
          </div>
        </div>
      </a>

      <div className="nav-actions">
        {compareList.length > 0 && (
          <button className="btn-secondary" onClick={onOpenCompare}>
            <Scale size={18} />
            <span>Compare ({compareList.length})</span>
          </button>
        )}

        <button className="btn-icon" onClick={toggleSound} title="Toggle Audio Feedback FX">
          {soundOn ? <Volume2 size={20} style={{ color: '#FF8700' }} /> : <VolumeX size={20} style={{ color: 'var(--text-dim)' }} />}
        </button>

        <button className="btn-icon" onClick={toggleTheme} title="Toggle Dark/Light Mode">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
