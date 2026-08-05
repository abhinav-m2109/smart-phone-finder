import React from 'react';
import { 
  Check, Plus, Sparkles, TrendingUp, TrendingDown, 
  Store, Cpu, ShieldCheck, Zap
} from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR } from '../utils/formatters';

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

  return (
    <div className="glass-panel phone-card">
      {/* Card Header Badges */}
      <div className="phone-card-header">
        <div className="brand-badge">{phone.brand}</div>

        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {phone.priceStatus === 'hike' && (
            <div className="badge-hike">
              <TrendingUp size={12} /> Hike
            </div>
          )}

          {phone.priceStatus === 'drop' && (
            <div className="badge-drop">
              <TrendingDown size={12} /> Price Drop
            </div>
          )}

          {phone.priceStatus === 'lowest' && (
            <div className="badge-drop">
              <Zap size={12} /> Record Low
            </div>
          )}

          <div className="match-score">
            <Sparkles size={12} /> {matchScore}% Match
          </div>
        </div>
      </div>

      {/* Product Image & Badges */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
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
        <div style={{ margin: '0.75rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
            <span className="price-current">{formatINR(phone.currentPrice)}</span>
            {phone.launchPrice > phone.currentPrice && (
              <span className="price-original">{formatINR(phone.launchPrice)}</span>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.35rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Lowest: <strong style={{ color: 'var(--accent-green)' }}>{formatINR(phone.lowestPrice)}</strong>
            </span>
            {lowestStore && (
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {lowestStore.name}
              </span>
            )}
          </div>
        </div>

        {/* Key Specs Pills */}
        <div className="spec-pills">
          <span className="pill">{phone.specs.chipset.split(' ')[0]} {phone.specs.chipset.split(' ')[1] || ''}</span>
          <span className="pill">{phone.specs.ramStorage.split('/')[0]}</span>
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
            <Store size={13} /> Stores ({phone.stores?.length || 0})
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
