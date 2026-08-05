import React from 'react';
import { X, Scale, ExternalLink, Check, Trash2, Cpu, Tv, Camera, Battery, Shield } from 'lucide-react';

export default function CompareDrawer({ compareList, onRemove, onClear, onClose }) {
  if (compareList.length === 0) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '950px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Scale size={24} style={{ color: 'var(--accent-primary)' }} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>
                Smartphone Spec & Price Comparison
              </h2>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Comparing {compareList.length} device{compareList.length > 1 ? 's' : ''}
              </div>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClear} style={{ color: '#FCA5A5', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
            <Trash2 size={16} /> Clear All
          </button>
        </div>

        {/* Comparison Grid Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.85rem', width: '180px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>Feature</th>
                {compareList.map(phone => (
                  <th key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)' }}>
                    <div style={{ position: 'relative' }}>
                      <button
                        onClick={() => onRemove(phone.id)}
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          background: 'rgba(239, 68, 68, 0.2)',
                          border: 'none',
                          color: '#EF4444',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <X size={14} />
                      </button>
                      <img src={phone.image} alt={phone.name} style={{ height: '90px', objectFit: 'contain', marginBottom: '0.5rem' }} />
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>{phone.name}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.25rem' }}>${phone.currentPrice}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Market Status */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Price Status</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: phone.priceStatus === 'hike' ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)',
                      color: phone.priceStatus === 'hike' ? '#EF4444' : '#10B981'
                    }}>
                      {phone.priceStatus === 'hike' ? `⚠️ Hike (${phone.priceChangePercent})` : `🟢 Savings (${phone.priceChangePercent})`}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Chipset */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Processor</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    {phone.specs.chipset}
                  </td>
                ))}
              </tr>

              {/* Display */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Display</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    {phone.specs.display}
                  </td>
                ))}
              </tr>

              {/* Cameras */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Camera Setup</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    {phone.specs.camera}
                  </td>
                ))}
              </tr>

              {/* Battery */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Battery & Charging</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    {phone.specs.battery}
                  </td>
                ))}
              </tr>

              {/* OS Updates */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>OS Support</td>
                {compareList.map(phone => (
                  <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}>
                    {phone.specs.osUpdates}
                  </td>
                ))}
              </tr>

              {/* Lowest Price Store */}
              <tr>
                <td style={{ padding: '0.85rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cheapest Link</td>
                {compareList.map(phone => {
                  const lowest = phone.stores.find(s => s.isLowest) || phone.stores[0];
                  return (
                    <td key={phone.id} style={{ padding: '0.85rem', textAlign: 'center', borderLeft: '1px solid var(--border-subtle)' }}>
                      <a
                        href={lowest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '0.78rem', padding: '0.45rem 0.75rem', margin: '0 auto', display: 'inline-flex' }}
                      >
                        ${lowest.price} at {lowest.name} <ExternalLink size={12} />
                      </a>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
