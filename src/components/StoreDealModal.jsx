import React from 'react';
import { X, ShoppingCart, ExternalLink, Check, ShieldCheck, Tag } from 'lucide-react';

export default function StoreDealModal({ phone, onClose }) {
  if (!phone) return null;

  const stores = [...phone.stores].sort((a, b) => a.price - b.price);
  const lowest = stores[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <ShoppingCart size={24} style={{ color: '#10B981' }} />
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>
              Cheapest Store Price Comparison
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{phone.name}</div>
          </div>
        </div>

        {/* Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
          border: '1px solid #10B981',
          padding: '1rem',
          borderRadius: '14px',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Tag size={14} /> Lowest Price Deal Found
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
              ${lowest.price} at {lowest.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Save up to ${(phone.highestPrice - lowest.price)} compared to MSRP peak!
            </div>
          </div>

          <a
            href={lowest.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.75rem 1.25rem' }}
          >
            Buy Now <ExternalLink size={14} />
          </a>
        </div>

        {/* Store Links List */}
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
          Available Store Deals ({stores.length})
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {stores.map((store, idx) => (
            <div
              key={idx}
              className={`store-link-row ${store.isLowest ? 'lowest' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}>
                  {store.name.substring(0, 2)}
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {store.name}
                    {store.isLowest && (
                      <span style={{
                        background: '#10B981',
                        color: 'white',
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        Cheapest
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={12} style={{ color: '#38BDF8' }} /> Verified Retailer • {store.freeShipping ? 'Free Shipping' : 'Standard Shipping'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <div className="store-price" style={{ color: store.isLowest ? '#10B981' : 'var(--text-main)' }}>
                    ${store.price}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: store.inStock ? '#10B981' : '#EF4444' }}>
                    {store.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>

                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={store.isLowest ? 'btn-primary' : 'btn-secondary'}
                  style={{ textDecoration: 'none', padding: '0.55rem 0.85rem' }}
                >
                  Visit Store <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
