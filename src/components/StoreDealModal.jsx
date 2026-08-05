import React from 'react';
import { X, ExternalLink, ShieldCheck, Tag, ShoppingBag, Truck } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';
import { formatINR } from '../utils/formatters';

export default function StoreDealModal({ phone, onClose }) {
  if (!phone) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Live Indian E-Commerce Deal Comparator
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
            {phone.name}
          </h2>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Compare prices across Amazon India, Flipkart, Croma, Reliance Digital, Pai International & Official Stores
          </div>
        </div>

        {/* Store List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {phone.stores?.map((store, index) => (
            <div
              key={index}
              style={{
                background: store.isLowest ? 'rgba(0, 240, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${store.isLowest ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: 'var(--accent-primary)'
                }}>
                  <ShoppingBag size={18} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{store.name}</span>
                    {store.isLowest && (
                      <span style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid #10B981',
                        color: '#34D399',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        ⚡ Lowest Price Deal
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Truck size={12} /> {store.freeShipping ? 'Free Delivery Across India' : 'Standard Shipping'} • In Stock
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: store.isLowest ? 'var(--accent-primary)' : 'var(--text-main)' }}>
                    {formatINR(store.price)}
                  </div>
                  {phone.launchPrice > store.price && (
                    <div style={{ fontSize: '0.72rem', color: '#34D399' }}>
                      Save {formatINR(phone.launchPrice - store.price)}
                    </div>
                  )}
                </div>

                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => soundFX.playClick()}
                  style={{ textDecoration: 'none', padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
                >
                  <span>Buy Now</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
