import React from 'react';
import { 
  TrendingDown, TrendingUp, Flame, ExternalLink, LineChart, 
  ShoppingCart, Scale, Check, Cpu, Tv, Camera, Battery, Zap 
} from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function PhoneCard({ 
  phone, 
  matchScore, 
  onOpenPriceHistory, 
  onOpenStoreDeals, 
  onOpenPythonAi,
  onToggleCompare, 
  isCompared 
}) {
  const lowestStore = phone.stores.find(s => s.isLowest) || phone.stores[0];

  return (
    <div className="glass-panel phone-card">
      {/* Top Banner & Image */}
      <div className="card-top">
        <div className="card-badges">
          {phone.priceStatus === 'hike' && (
            <div className="status-badge badge-hike">
              <TrendingUp size={14} /> Price Hike
            </div>
          )}
          {phone.priceStatus === 'drop' && (
            <div className="status-badge badge-drop">
              <TrendingDown size={14} /> Price Drop
            </div>
          )}
          {phone.priceStatus === 'lowest' && (
            <div className="status-badge badge-lowest">
              <Flame size={14} /> Record Low
            </div>
          )}

          <div className="match-score-badge" title="AI Match Score based on your budget & preference priorities">
            {matchScore}% Match
          </div>
        </div>

        <img src={phone.image} alt={phone.name} className="phone-img" loading="lazy" />
      </div>

      {/* Card Content */}
      <div className="card-body">
        <div className="phone-brand">{phone.brand} • {phone.category}</div>
        <h3 className="phone-name">{phone.name}</h3>

        {/* Pricing Row */}
        <div className="card-price-row">
          <span className="current-price">${phone.currentPrice}</span>
          {phone.launchPrice > phone.currentPrice && (
            <span className="launch-price">${phone.launchPrice}</span>
          )}
          <span style={{ 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            color: phone.priceStatus === 'hike' ? '#EF4444' : '#10B981',
            marginLeft: 'auto'
          }}>
            {phone.priceChangePercent}
          </span>
        </div>

        {/* Hike Alert or Drop Alert Notice */}
        {phone.hikeNotice && (
          <div className="hike-alert-text">
            {phone.hikeNotice}
          </div>
        )}
        {phone.dropNotice && (
          <div className="drop-alert-text">
            {phone.dropNotice}
          </div>
        )}

        {/* Key Specs */}
        <div className="spec-list">
          <div className="spec-item">
            <Cpu size={14} style={{ color: '#FF8700', flexShrink: 0 }} />
            <span>{phone.specs.chipset}</span>
          </div>
          <div className="spec-item">
            <Tv size={14} style={{ color: '#00F0FF', flexShrink: 0 }} />
            <span>{phone.specs.display}</span>
          </div>
          <div className="spec-item">
            <Camera size={14} style={{ color: '#F472B6', flexShrink: 0 }} />
            <span>{phone.specs.camera}</span>
          </div>
          <div className="spec-item">
            <Battery size={14} style={{ color: '#34D399', flexShrink: 0 }} />
            <span>{phone.specs.battery}</span>
          </div>
        </div>

        {/* Cheapest Store Callout */}
        <div style={{
          fontSize: '0.8rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 0.75rem',
          borderRadius: '8px',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px dashed rgba(16, 185, 129, 0.3)',
          marginBottom: '0.85rem'
        }}>
          <span style={{ color: 'var(--text-muted)' }}>
            Lowest at <strong>{lowestStore.name}</strong>:
          </span>
          <a
            href={lowestStore.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            style={{
              color: '#10B981',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              textDecoration: 'none'
            }}
          >
            ${lowestStore.price} <ExternalLink size={12} />
          </a>
        </div>

        {/* Python AI Trigger Button */}
        <button
          className="btn-python"
          onClick={() => {
            soundFX.playGearShift();
            onOpenPythonAi(phone);
          }}
        >
          🐍 Python AI Price Hike Forecast
        </button>

        {/* Actions */}
        <div className="card-actions" style={{ marginTop: '0.65rem' }}>
          <button className="btn-primary" onClick={() => { soundFX.playClick(); onOpenStoreDeals(phone); }}>
            <ShoppingCart size={16} /> Deals
          </button>
          
          <button className="btn-secondary" onClick={() => { soundFX.playClick(); onOpenPriceHistory(phone); }}>
            <LineChart size={16} /> History
          </button>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            onToggleCompare(phone);
          }}
          style={{
            marginTop: '0.65rem',
            width: '100%',
            background: isCompared ? 'rgba(255, 135, 0, 0.2)' : 'transparent',
            border: isCompared ? '1px solid #FF8700' : '1px solid var(--border-subtle)',
            color: isCompared ? '#FF8700' : 'var(--text-dim)',
            padding: '0.45rem',
            borderRadius: '8px',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            transition: 'all 0.2s ease'
          }}
        >
          {isCompared ? <Check size={14} /> : <Scale size={14} />}
          {isCompared ? 'Added to Compare' : '+ Add to Compare'}
        </button>
      </div>
    </div>
  );
}
