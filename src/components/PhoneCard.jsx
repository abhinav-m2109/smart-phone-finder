import React from 'react';
import { 
  Check, Plus, Sparkles, TrendingUp, TrendingDown, 
  Store, Cpu, Zap, ExternalLink
} from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR, getStoreLink } from '../utils/formatters';

export default function PhoneCard({
  phone,
  matchScore,
  onOpenPriceHistory,
  onOpenStoreDeals,
  onOpenPythonAi,
  onToggleCompare,
  isCompared
}) {
  const lowestStore = phone.stores?.find(s => s.isLowest) || phone.stores?.[0];
  const directLowestLink = lowestStore ? getStoreLink(lowestStore.name, phone.name) : `https://www.amazon.in/s?k=${encodeURIComponent(phone.name)}`;

  return (
    <div className="phone-card">
      {/* Card Header Badges */}
      <div className="phone-card-header">
        <div className="brand-badge">{phone.brand}</div>

        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {phone.priceStatus === 'hike' && (
            <div className="badge-hike">
              <TrendingUp size={11} /> Hike
            </div>
          )}

          {phone.priceStatus === 'drop' && (
            <div className="badge-drop">
              <TrendingDown size={11} /> Price Drop
            </div>
          )}

          {phone.priceStatus === 'lowest' && (
            <div className="badge-drop">
              <Zap size={11} /> Record Low
            </div>
          )}

          <div className="match-score">
            <Sparkles size={11} /> {matchScore}% Match
          </div>
        </div>
      </div>

      {/* Clean Dark Image Container */}
      <div className="phone-img-container">
        <img 
          src={phone.image} 
          alt={phone.name} 
          className="phone-img" 
          loading="lazy" 
        />
      </div>

      {/* Card Body */}
      <div className="phone-card-body">
        <h3 className="phone-title">{phone.name}</h3>

        {/* Pricing Info */}
        <div style={{ margin: '0.6rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
            <span className="price-current">{formatINR(phone.currentPrice)}</span>
            {phone.launchPrice > phone.currentPrice && (
              <span className="price-original">{formatINR(phone.launchPrice)}</span>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.36rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Lowest: <strong style={{ color: 'var(--accent-green)' }}>{formatINR(phone.lowestPrice)}</strong>
            </span>
            
            {lowestStore && (
              <a 
                href={directLowestLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--accent-primary)', 
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
                title={`Click to open ${phone.name} on ${lowestStore.name}`}
              >
                Buy on {lowestStore.name.split(' ')[0]} <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>

        {/* Key Specs Pills */}
        <div className="spec-pills">
          <span className="pill">{phone.specs.chipset}</span>
          <span className="pill">{phone.specs.ramStorage}</span>
          <span className="pill">{phone.specs.camera.split('+')[0]}</span>
        </div>

        {/* Action Buttons */}
        <div className="card-actions">
          <button 
            className="btn-secondary"
            onClick={() => {
              soundFX.playClick();
              onOpenPriceHistory(phone);
            }}
          >
            <TrendingUp size={13} /> 6M Chart
          </button>

          <button 
            className="btn-secondary"
            onClick={() => {
              soundFX.playClick();
              onOpenStoreDeals(phone);
            }}
          >
            <Store size={13} /> Retailers ({phone.stores?.length || 0})
          </button>
        </div>

        <button 
          className="btn-python-ai"
          onClick={() => {
            soundFX.playClick();
            onOpenPythonAi(phone);
          }}
        >
          <Cpu size={14} /> Python AI Forecast & Risk Score
        </button>

        {/* Compare Toggle */}
        <button
          className={`compare-btn ${isCompared ? 'active' : ''}`}
          onClick={() => {
            soundFX.playClick();
            onToggleCompare(phone);
          }}
        >
          {isCompared ? <Check size={14} /> : <Plus size={14} />}
          <span>{isCompared ? 'Added to Compare' : 'Add to Side-by-Side Compare'}</span>
        </button>
      </div>
    </div>
  );
}
