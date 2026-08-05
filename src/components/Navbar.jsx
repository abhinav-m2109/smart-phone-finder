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
      {/* Brand Header on Far Left */}
      <div className="nav-brand">
        <div className="nav-logo-icon">
          <Smartphone size={22} />
        </div>
        <div className="nav-title">
          SmartPhone-<span>Scouter</span>
        </div>
      </div>

      {/* Far Right Controls (Compare Badge, Sound Mute, Theme Switcher) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {compareList.length > 0 && (
          <button 
            className="btn-primary" 
            onClick={onOpenCompare} 
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
          >
            Compare ({compareList.length})
          </button>
        )}

        <button
          onClick={toggleAudio}
          style={{
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--accent-primary)',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title={theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
