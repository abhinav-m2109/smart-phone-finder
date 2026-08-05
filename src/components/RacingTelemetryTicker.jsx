import React from 'react';
import { AlertTriangle, TrendingDown, Flame, Activity } from 'lucide-react';

export default function RacingTelemetryTicker({ hikeCount, lowestCount, onFilterHike }) {
  return (
    <div style={{
      background: 'rgba(13, 18, 26, 0.95)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0.45rem 1.5rem',
      fontSize: '0.78rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'var(--text-muted)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
          <Activity size={14} /> LIVE MARKET TRACKER
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <span style={{ color: '#FDA4AF', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <AlertTriangle size={13} /> <strong>{hikeCount} Price Hikes Active</strong>
          </span>

          <span style={{ color: '#6EE7B7', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Flame size={13} style={{ color: '#FBBF24' }} /> <strong>Record Low Deals Active</strong>
          </span>
        </div>
      </div>

      <button
        onClick={onFilterHike}
        style={{
          background: 'rgba(244, 63, 94, 0.1)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          color: '#FDA4AF',
          fontWeight: 700,
          fontSize: '0.72rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Filter Price Hikes Only
      </button>
    </div>
  );
}
