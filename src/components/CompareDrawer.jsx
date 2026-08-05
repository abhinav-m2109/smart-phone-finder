import React from 'react';
import { X, Trophy, CheckCircle, HelpCircle, ArrowRight, ExternalLink, Zap, Shield, Sparkles, UserCheck } from 'lucide-react';
import { soundFX } from '../utils/audioEffects';

export default function CompareDrawer({ isOpen, onClose, phones, onRemovePhone }) {
  if (!isOpen || phones.length === 0) return null;

  const formatINR = (val) => "₹" + val.toLocaleString('en-IN');

  // Determine overall winner using composite score (Camera, Battery, Gaming, Value, AnTuTu)
  const winner = React.useMemo(() => {
    if (phones.length === 0) return null;
    let bestPhone = phones[0];
    let maxScore = -1;

    phones.forEach(phone => {
      const antutuNum = parseInt((phone.specs.antutuScore || "1,000,000").replace(/,/g, ''), 10) / 30000;
      const compositeScore = (
        (phone.scores.camera * 0.25) +
        (phone.scores.gaming * 0.25) +
        (phone.scores.battery * 0.20) +
        (phone.scores.value * 0.15) +
        (antutuNum * 0.15)
      );
      if (compositeScore > maxScore) {
        maxScore = compositeScore;
        bestPhone = phone;
      }
    });

    return bestPhone;
  }, [phones]);

  // Compute price difference if comparing 2 or 3 phones
  const priceDiffAnalysis = React.useMemo(() => {
    if (phones.length < 2) return null;
    const sortedByPrice = [...phones].sort((a, b) => a.currentPrice - b.currentPrice);
    const cheapest = sortedByPrice[0];
    const expensive = sortedByPrice[sortedByPrice.length - 1];
    const diff = expensive.currentPrice - cheapest.currentPrice;

    const isExpensiveWinner = winner && winner.id === expensive.id;

    return {
      cheapest,
      expensive,
      diff,
      isWorthIt: isExpensiveWinner && (diff / cheapest.currentPrice) < 0.5,
      verdict: isExpensiveWinner 
        ? `Yes! Spending extra ${formatINR(diff)} for ${expensive.name} is worth it because it offers superior performance (${expensive.specs.chipset}), better display, and longer software updates.`
        : `${cheapest.name} at ${formatINR(cheapest.currentPrice)} offers better value for money! The extra ${formatINR(diff)} for ${expensive.name} may not be necessary unless you specifically need its exclusive features.`
    };
  }, [phones, winner]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0, 0, 0, 0.75)',
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
        maxWidth: '1050px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} style={{ color: 'var(--accent-primary)' }} />
              Smart Comparison & Decision Guide
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Comparing {phones.length} smartphones side-by-side with AI recommendation
            </p>
          </div>
          <button 
            onClick={() => { soundFX.playClick(); onClose(); }}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.4rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>

          {/* 👑 OVERALL WINNER & AI INTELLIGENCE BANNER */}
          {winner && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(79, 172, 254, 0.08) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Trophy size={22} style={{ color: '#FFB800' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-primary)' }}>
                  AI Overall Winner Recommendation
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.4rem' }}>
                👑 {winner.name} is the Overall Winner
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                Based on benchmark scores, camera system, battery endurance, and long-term value, <strong>{winner.name}</strong> leads this comparison.
              </p>

              {/* 💰 IS IT WORTH SPENDING EXTRA? */}
              {priceDiffAnalysis && (
                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  borderLeft: '4px solid var(--accent-primary)'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={16} style={{ color: 'var(--accent-primary)' }} /> Is it worth spending extra?
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {priceDiffAnalysis.verdict}
                  </div>
                </div>
              )}

              {/* 🎯 WHO SHOULD PREFER WHICH PHONE? */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {phones.map(phone => (
                  <div key={phone.id} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>
                      👤 User Persona for {phone.name}:
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {phone.targetUser || "Ideal for users seeking balanced performance and sleek design."}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 📊 COMPARISON TABLE */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>Specification</th>
                  {phones.map(phone => (
                    <th key={phone.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '2px solid var(--border-color)', width: `${80 / phones.length}%` }}>
                      <img src={phone.image} alt={phone.name} style={{ width: '60px', height: '60px', objectFit: 'contain', margin: '0 auto 0.4rem' }} />
                      <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{phone.name}</div>
                      <div style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>{formatINR(phone.currentPrice)}</div>
                      <button 
                        onClick={() => onRemovePhone(phone.id)}
                        style={{ fontSize: '0.7rem', color: 'var(--status-hike)', background: 'transparent', border: 'none', cursor: 'pointer', marginTop: '0.2rem' }}
                      >
                        Remove
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Overall Score</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', fontWeight: 800 }}>
                      ⭐ {p.rating} / 5.0
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>AnTuTu Score</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      ⚡ {p.specs.antutuScore || "1,500,000+"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Processor & GPU</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.chipset}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>RAM & Storage</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.ramStorage}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Display</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.display}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Rear Cameras</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.camera}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Battery & Charging</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.battery} • {p.specs.chargingSpeed || "Fast Charging"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>Water Resistance</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.ipRating || "IP68 Resistant"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>OS Updates</td>
                  {phones.map(p => (
                    <td key={p.id} style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
                      {p.specs.osUpdates}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255, 255, 255, 0.02)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose} style={{ fontSize: '0.85rem' }}>
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}
