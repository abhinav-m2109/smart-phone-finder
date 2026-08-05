import React, { useState } from 'react';
import { X, TrendingUp, TrendingDown, Bell, CheckCircle2, ShieldAlert } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR } from '../utils/formatters';

export default function PriceHistoryModal({ phone, onClose }) {
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState(phone ? Math.round(phone.currentPrice * 0.9) : '');
  const [subscribed, setSubscribed] = useState(false);

  if (!phone) return null;

  const history = phone.priceHistory || [];
  const prices = history.map(h => h.price);
  const minP = Math.min(...prices, phone.lowestPrice);
  const maxP = Math.max(...prices, phone.highestPrice);
  const rangeP = maxP - minP || 1;

  const chartHeight = 120;
  const chartWidth = 380;
  const stepX = history.length > 1 ? chartWidth / (history.length - 1) : 0;

  const points = history.map((h, i) => {
    const x = i * stepX;
    const y = chartHeight - ((h.price - minP) / rangeP) * (chartHeight - 20) - 10;
    return `${x},${y}`;
  }).join(' ');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    soundFX.playClick();
    setSubscribed(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            6-Month Price Analytics
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
            {phone.name}
          </h2>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.65rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Current Street Price</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem' }}>
              {formatINR(phone.currentPrice)}
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.75rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.72rem', color: '#6EE7B7' }}>Record Low Price</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34D399', marginTop: '0.15rem' }}>
              {formatINR(phone.lowestPrice)}
            </div>
          </div>

          <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.3)', padding: '0.75rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.72rem', color: '#FDA4AF' }}>Peak Price</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F43F5E', marginTop: '0.15rem' }}>
              {formatINR(phone.highestPrice)}
            </div>
          </div>
        </div>

        {/* SVG Chart */}
        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>6-Month Trend Curve</span>
            <span>Range: {formatINR(minP)} - {formatINR(maxP)}</span>
          </div>

          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: '120px', overflow: 'visible' }}>
            <polyline
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />

            {history.map((h, i) => {
              const x = i * stepX;
              const y = chartHeight - ((h.price - minP) / rangeP) * (chartHeight - 20) - 10;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#070A0E" stroke="var(--accent-primary)" strokeWidth="2" />
                  <text x={x} y={chartHeight + 15} fontSize="9" fill="var(--text-dim)" textAnchor="middle">
                    {h.month}
                  </text>
                  <text x={x} y={y - 8} fontSize="9" fill="var(--accent-primary)" textAnchor="middle" fontWeight="bold">
                    {formatINR(h.price)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Email Alert Subscribed */}
        <div style={{ background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '1rem', borderRadius: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.88rem', fontWeight: 700 }}>
            <Bell size={16} style={{ color: 'var(--accent-primary)' }} />
            <span>Set Price Drop Email Alert (India)</span>
          </div>

          {subscribed ? (
            <div style={{ color: '#34D399', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
              <CheckCircle2 size={16} /> Alert set for {email}! We'll notify you when price drops below {formatINR(targetPrice)}.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <input
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--border-subtle)',
                  color: '#FFF',
                  fontSize: '0.82rem'
                }}
              />
              <input
                type="number"
                placeholder="Target Price (₹)"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                style={{
                  width: '120px',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--border-subtle)',
                  color: '#FFF',
                  fontSize: '0.82rem'
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
