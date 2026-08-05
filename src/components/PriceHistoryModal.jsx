import React, { useState } from 'react';
import { X, LineChart, Bell, CheckCircle, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

export default function PriceHistoryModal({ phone, onClose }) {
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState(phone.currentPrice - 50);
  const [subscribed, setSubscribed] = useState(false);

  if (!phone) return null;

  // Calculate SVG chart coordinates
  const history = phone.priceHistory || [];
  const prices = history.map(h => h.price);
  const maxP = Math.max(...prices, phone.highestPrice) + 50;
  const minP = Math.min(...prices, phone.lowestPrice) - 50;

  const chartWidth = 500;
  const chartHeight = 180;

  const points = history.map((item, idx) => {
    const x = (idx / (history.length - 1)) * (chartWidth - 40) + 20;
    const y = chartHeight - ((item.price - minP) / (maxP - minP)) * (chartHeight - 40) - 20;
    return `${x},${y}`;
  }).join(' ');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <LineChart size={24} style={{ color: 'var(--accent-primary)' }} />
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>
              Price History & Hike Tracker
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{phone.name}</div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          marginBottom: '1.25rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            padding: '0.75rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Launch Price</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>${phone.launchPrice}</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '0.75rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#6EE7B7' }}>Record Low</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10B981' }}>${phone.lowestPrice}</div>
          </div>
          <div style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '0.75rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#FCA5A5' }}>Peak Price</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#EF4444' }}>${phone.highestPrice}</div>
          </div>
        </div>

        {/* Hike Notice if present */}
        {phone.priceStatus === 'hike' && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid #EF4444',
            color: '#FCA5A5',
            padding: '0.85rem',
            borderRadius: '12px',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.25rem'
          }}>
            <AlertTriangle size={20} style={{ flexShrink: 0 }} />
            <div>
              <strong>Price Hike Alert!</strong> Current price has increased by {phone.priceChangePercent} from recent baseline. We recommend setting a price drop alert below.
            </div>
          </div>
        )}

        {/* SVG Interactive Line Chart */}
        <div className="chart-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <span>6-Month Price Trend (USD)</span>
            <span>Current: <strong>${phone.currentPrice}</strong></span>
          </div>

          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            {/* Grid lines */}
            <line x1="0" y1="20" x2={chartWidth} y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
            <line x1="0" y1={chartHeight/2} x2={chartWidth} y2={chartHeight/2} stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
            <line x1="0" y1={chartHeight-20} x2={chartWidth} y2={chartHeight-20} stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

            {/* Price Line */}
            <polyline
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="3"
              points={points}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Points */}
            {history.map((item, idx) => {
              const x = (idx / (history.length - 1)) * (chartWidth - 40) + 20;
              const y = chartHeight - ((item.price - minP) / (maxP - minP)) * (chartHeight - 40) - 20;
              return (
                <g key={idx}>
                  <circle cx={x} cy={y} r="5" fill="#6366F1" stroke="#FFF" strokeWidth="2" />
                  <text x={x} y={y - 10} fill="var(--text-muted)" fontSize="10" textAnchor="middle">
                    ${item.price}
                  </text>
                  <text x={x} y={chartHeight + 10} fill="var(--text-dim)" fontSize="10" textAnchor="middle">
                    {item.month}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Set Price Drop Alert Subscription */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          padding: '1.25rem',
          borderRadius: '14px',
          marginTop: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Bell size={18} style={{ color: 'var(--accent-primary)' }} />
            <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Get Price Drop Alerts</h4>
          </div>

          {subscribed ? (
            <div style={{
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              <CheckCircle size={18} />
              <span>Subscribed! We will notify <strong>{email}</strong> when price drops below ${targetPrice}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    outline: 'none'
                  }}
                />
                <input
                  type="number"
                  placeholder="Target Price ($)"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(Number(e.target.value))}
                  style={{
                    width: '120px',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    outline: 'none'
                  }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Set Price Drop Alert
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
