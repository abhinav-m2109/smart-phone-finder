import React from 'react';
import { Smartphone, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function Navbar({ theme, toggleTheme, compareList, onOpenCompare }) {
  const [muted, setMuted] = React.useState(soundFX.muted);

  const toggleAudio = () => {
    const isMuted = soundFX.toggleMute();
    setMuted(isMuted);
  };

  return (
    <nav className="navbar">
      {/* Brand Header */}
      <div className="nav-brand">
        <div className="nav-logo-icon">
          <Smartphone size={20} />
        </div>
        <div>
          <div className="nav-title">
            SmartPhone-<span>Scouter</span>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {compareList.length > 0 && (
          <button className="btn-primary" onClick={onOpenCompare} style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}>
            Compare ({compareList.length})
          </button>
        )}

        <button
          onClick={toggleAudio}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <button
          onClick={toggleTheme}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--accent-primary)',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Toggle Dark / Light Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
