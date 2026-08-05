import React from 'react';
import { Zap, AlertTriangle, TrendingDown, Flame, Radio } from 'lucide-react';

export default function RacingTelemetryTicker({ hikeCount, lowestCount, onFilterHike }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0D1117 0%, #161B22 50%, #0D1117 100%)',
      borderBottom: '1px solid #FF8700',
      padding: '0.5rem 1rem',
      fontSize: '0.8rem',
      fontFamily: 'var(--font-heading)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#E6EDF3',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{
          background: '#FF8700',
          color: '#000',
          fontWeight: 800,
          padding: '0.15rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.7rem',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem'
        }}>
          <Radio size={12} className="animate-pulse" /> LIVE TELEMETRY
        </span>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <span style={{ color: '#FCA5A5', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <AlertTriangle size={14} /> <strong>{hikeCount} Price Hikes Active</strong>
          </span>

          <span style={{ color: '#6EE7B7', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Flame size={14} style={{ color: '#F59E0B' }} /> <strong>Record Low Deals Live</strong>
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={onFilterHike}
          style={{
            background: 'rgba(255, 135, 0, 0.15)',
            border: '1px solid #FF8700',
            color: '#FF8700',
            fontWeight: 700,
            fontSize: '0.75rem',
            padding: '0.2rem 0.65rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Toggle Price Hike Alerts ⚡
        </button>
      </div>
    </div>
  );
}
