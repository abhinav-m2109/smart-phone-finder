import React from 'react';
import { TrendingDown, TrendingUp, Sparkles, Scale, ExternalLink, ShieldCheck, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function PhoneCard({ 
  phone, 
  onOpenPriceModal, 
  onOpenAiModal, 
  onOpenDetailModal, 
  isComparing, 
  onToggleCompare 
}) {
  const formatINR = (val) => "₹" + val.toLocaleString('en-IN');

  const lowestStore = phone.stores.find(s => s.isLowest) || phone.stores[0];

  return (
    <div className="phone-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top Header & Status Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span style={{ 
          fontSize: '0.7rem', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          color: 'var(--text-muted)',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px'
        }}>
          {phone.brand} • {phone.category}
        </span>

        {phone.priceStatus === 'drop' || phone.priceStatus === 'lowest' ? (
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.25rem', 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            color: 'var(--status-drop)', 
            background: 'rgba(0, 230, 153, 0.12)', 
            padding: '0.25rem 0.55rem', 
            borderRadius: '20px' 
          }}>
            <TrendingDown size={12} /> PRICE DROP {phone.priceChangePercent}
          </span>
        ) : phone.priceStatus === 'hike' ? (
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.25rem', 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            color: 'var(--status-hike)', 
            background: 'rgba(255, 77, 106, 0.12)', 
            padding: '0.25rem 0.55rem', 
            borderRadius: '20px' 
          }}>
            <TrendingUp size={12} /> PRICE HIKE {phone.priceChangePercent}
          </span>
        ) : (
          <span style={{ 
            fontSize: '0.72rem', 
            fontWeight: 600, 
            color: 'var(--text-muted)', 
            background: 'rgba(255, 255, 255, 0.04)', 
            padding: '0.25rem 0.55rem', 
            borderRadius: '20px' 
          }}>
            STABLE PRICE
          </span>
        )}
      </div>

      {/* Target User Persona Badge */}
      {phone.targetUser && (
        <div style={{
          background: 'rgba(0, 242, 254, 0.06)',
          border: '1px solid rgba(0, 242, 254, 0.2)',
          borderRadius: '8px',
          padding: '0.4rem 0.6rem',
          marginBottom: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.76rem',
          fontWeight: 600,
          color: 'var(--accent-primary)'
        }}>
          <User size={13} style={{ shrink: 0 }} />
          <span>{phone.targetUser}</span>
        </div>
      )}

      {/* Phone Image Container */}
      <div 
        className="phone-img-container" 
        onClick={() => onOpenDetailModal(phone)}
        style={{ cursor: 'pointer', position: 'relative' }}
        title="Click for full specs & details"
      >
        <img 
          src={phone.image} 
          alt={phone.name} 
          className="phone-img" 
          loading="lazy"
        />
      </div>

      {/* Title & AnTuTu Score */}
      <div style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>
        <h3 
          onClick={() => onOpenDetailModal(phone)}
          style={{ fontSize: '1.15rem', fontWeight: 800, cursor: 'pointer', color: 'var(--text-primary)', marginBottom: '0.25rem' }}
        >
          {phone.name}
        </h3>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem' }}>
          <span>⚡ AnTuTu: <strong style={{ color: 'var(--accent-primary)' }}>{phone.specs.antutuScore || "1,500,000+"}</strong></span>
          <span>⭐ Rating: <strong style={{ color: '#FFB800' }}>{phone.rating}</strong> ({phone.reviewsCount})</span>
        </div>
      </div>

      {/* Key Spec Pills */}
      <div className="spec-pills" style={{ marginBottom: '1rem' }}>
        <span className="spec-pill">{phone.specs.chipset}</span>
        <span className="spec-pill">{phone.specs.ramStorage}</span>
        <span className="spec-pill">{phone.specs.display}</span>
        <span className="spec-pill">{phone.specs.battery}</span>
      </div>

      {/* Pricing Section */}
      <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Best Price in India</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-primary)' }}>
              {formatINR(phone.currentPrice)}
            </span>
            {phone.launchPrice > phone.currentPrice && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '0.4rem' }}>
                {formatINR(phone.launchPrice)}
              </span>
            )}
          </div>

          {lowestStore && (
            <a 
              href={lowestStore.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              onClick={() => soundFX.playClick()}
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              Buy on {lowestStore.name} <ExternalLink size={12} />
            </a>
          )}
        </div>

        {phone.dropNotice && (
          <div style={{ fontSize: '0.73rem', color: 'var(--status-drop)', marginTop: '0.3rem', fontWeight: 600 }}>
            🎉 {phone.dropNotice}
          </div>
        )}
        {phone.hikeNotice && (
          <div style={{ fontSize: '0.73rem', color: 'var(--status-hike)', marginTop: '0.3rem', fontWeight: 600 }}>
            {phone.hikeNotice}
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        <button
          className="btn-secondary"
          onClick={() => { soundFX.playClick(); onOpenPriceModal(phone); }}
          style={{ fontSize: '0.78rem', padding: '0.5rem', width: '100%' }}
        >
          📈 Price History
        </button>

        <button
          className={isComparing ? "btn-primary" : "btn-secondary"}
          onClick={() => onToggleCompare(phone)}
          style={{ fontSize: '0.78rem', padding: '0.5rem', width: '100%' }}
        >
          <Scale size={13} style={{ marginRight: '0.3rem', display: 'inline-block', verticalAlign: 'middle' }} />
          {isComparing ? "Remove" : "Compare"}
        </button>
      </div>
    </div>
  );
}
