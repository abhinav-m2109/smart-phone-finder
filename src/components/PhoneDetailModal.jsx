import React from 'react';
import { X, Cpu, HardDrive, Smartphone, Camera, Battery, ShieldCheck, Award, ExternalLink, User } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function PhoneDetailModal({ phone, onClose }) {
  if (!phone) return null;

  const formatINR = (val) => "₹" + val.toLocaleString('en-IN');

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '850px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Full Technical Specifications & User Persona
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              {phone.name}
            </h2>
          </div>
          <button 
            onClick={() => { soundFX.playClick(); onClose(); }}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.4rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          
          {/* Top Banner with Image & Persona */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div className="phone-img-container" style={{ height: '220px', background: 'rgba(0, 0, 0, 0.3)' }}>
              <img src={phone.image} alt={phone.name} style={{ maxHeight: '180px', objectFit: 'contain' }} />
            </div>

            <div>
              <div style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '0.75rem 1rem', borderRadius: '12px', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={14} /> Who Should Prefer This Phone:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {phone.targetUser || "Users seeking flagship speed, brilliant display, and premium build quality."}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Best Price</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent-primary)' }}>{formatINR(phone.currentPrice)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AnTuTu Score</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>⚡ {phone.specs.antutuScore}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {phone.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.06)', padding: '0.25rem 0.6rem', borderRadius: '6px', color: 'var(--text-secondary)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Deep Specifications Grid */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
            🛠️ Detailed Technical Specifications
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Cpu size={16} /> Processor & Architecture
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>{phone.specs.chipset}</div>
              {phone.specs.gpu && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>GPU: {phone.specs.gpu}</div>}
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <HardDrive size={16} /> RAM & Memory Tech
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>{phone.specs.ramStorage}</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Smartphone size={16} /> Display & Brightness
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>{phone.specs.display}</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Camera size={16} /> Camera Setup
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>Main: {phone.specs.camera}</div>
              {phone.specs.frontCamera && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Selfie: {phone.specs.frontCamera}</div>}
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Battery size={16} /> Battery & Charging Speed
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>{phone.specs.battery}</div>
              {phone.specs.chargingSpeed && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Speed: {phone.specs.chargingSpeed}</div>}
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} /> Durability & OS Updates
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>Protection: {phone.specs.ipRating || "IP68 Resistant"}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Software: {phone.specs.osUpdates}</div>
            </div>

          </div>

          {/* E-Commerce Stores Pricing List */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
            🛒 Verified Indian Retailers Price Comparison
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {phone.stores.map(store => (
              <div key={store.name} style={{
                background: store.isLowest ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                border: store.isLowest ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                padding: '0.75rem',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{store.name}</div>
                  <div style={{ fontWeight: 900, color: store.isLowest ? 'var(--accent-primary)' : 'var(--text-primary)', fontSize: '1.05rem' }}>
                    {formatINR(store.price)}
                  </div>
                </div>

                <a 
                  href={store.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.6rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  Visit <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255, 255, 255, 0.02)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose} style={{ fontSize: '0.85rem' }}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
