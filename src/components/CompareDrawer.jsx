import React from 'react';
import { X, Trash2, Check, Zap, ExternalLink } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR } from '../utils/formatters';

export default function CompareDrawer({ compareList, onRemove, onClear, onClose }) {
  if (!compareList || compareList.length === 0) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Drawer Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
              Side-by-Side Smartphone Comparison
            </h2>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Comparing {compareList.length} of 3 maximum devices
            </div>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClear();
            }}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: '#F43F5E',
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Trash2 size={13} /> Clear All
          </button>
        </div>

        {/* Grid Comparison Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${compareList.length}, 1fr)`,
          gap: '1.25rem',
          overflowX: 'auto'
        }}>
          {compareList.map((phone) => (
            <div
              key={phone.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1.25rem',
                position: 'relative'
              }}
            >
              <button
                onClick={() => {
                  soundFX.playClick();
                  onRemove(phone.id);
                }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={14} />
              </button>

              <img
                src={phone.image}
                alt={phone.name}
                style={{ width: '100%', height: '140px', objectFit: 'contain', marginBottom: '1rem' }}
              />

              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {phone.name}
              </h3>

              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                {formatINR(phone.currentPrice)}
              </div>

              {/* Specs Rows */}
              <div style={{ fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Processor / Chipset</div>
                  <div style={{ fontWeight: 700, marginTop: '0.1rem' }}>{phone.specs.chipset}</div>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Display Specs</div>
                  <div style={{ fontWeight: 600, marginTop: '0.1rem' }}>{phone.specs.display}</div>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Main Camera Setup</div>
                  <div style={{ fontWeight: 600, marginTop: '0.1rem' }}>{phone.specs.camera}</div>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Battery & Charging</div>
                  <div style={{ fontWeight: 600, marginTop: '0.1rem' }}>{phone.specs.battery}</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Lowest Price Store</div>
                  <div style={{ color: '#34D399', fontWeight: 700, marginTop: '0.1rem' }}>
                    {formatINR(phone.lowestPrice)} on {phone.stores?.[0]?.name || 'Official Store'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
