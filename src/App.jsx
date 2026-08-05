import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import RacingTelemetryTicker from './components/RacingTelemetryTicker';
import SpeedometerBudget from './components/SpeedometerBudget';
import BudgetFilter from './components/BudgetFilter';
import PhoneCard from './components/PhoneCard';
import PriceHistoryModal from './components/PriceHistoryModal';
import StoreDealModal from './components/StoreDealModal';
import PythonAiPredictorModal from './components/PythonAiPredictorModal';
import CompareDrawer from './components/CompareDrawer';
import { SMARTPHONES, PRIORITY_PREFERENCES } from './data/smartphones';
import { Sparkles, ArrowUpDown, Smartphone } from 'lucide-react';
import { soundFX } from './utils/audioEffects';
import { formatINR } from './utils/formatters';
import './styles/app.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxBudget, setMaxBudget] = useState(180000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [isHikeOnlyFilter, setIsHikeOnlyFilter] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Modals
  const [priceHistoryPhone, setPriceHistoryPhone] = useState(null);
  const [storeDealsPhone, setStoreDealsPhone] = useState(null);
  const [pythonAiPhone, setPythonAiPhone] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    soundFX.playClick();
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const hikeCount = useMemo(() => {
    return SMARTPHONES.filter(p => p.priceStatus === 'hike').length;
  }, []);

  const lowestCount = useMemo(() => {
    return SMARTPHONES.filter(p => p.priceStatus === 'lowest').length;
  }, []);

  // Calculate AI Match Scores
  const phonesWithScores = useMemo(() => {
    return SMARTPHONES.map(phone => {
      let score = 70;

      if (phone.currentPrice <= maxBudget) {
        const budgetRatio = phone.currentPrice / maxBudget;
        score += Math.min(20, Math.round((1 - budgetRatio) * 20));
      } else {
        const overBudgetRatio = (phone.currentPrice - maxBudget) / maxBudget;
        score -= Math.round(overBudgetRatio * 50);
      }

      if (selectedPriority !== 'all' && phone.scores[selectedPriority]) {
        score += (phone.scores[selectedPriority] - 80) * 0.5;
      }

      if (phone.priceStatus === 'drop' || phone.priceStatus === 'lowest') {
        score += 5;
      }

      const finalScore = Math.min(99, Math.max(35, Math.round(score)));

      return {
        ...phone,
        matchScore: finalScore
      };
    });
  }, [maxBudget, selectedPriority]);

  // Filter & Sort
  const filteredPhones = useMemo(() => {
    return phonesWithScores.filter(phone => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = phone.name.toLowerCase().includes(query);
        const matchesBrand = phone.brand.toLowerCase().includes(query);
        const matchesTag = phone.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesTag) return false;
      }

      if (maxBudget < 180000 && phone.currentPrice > maxBudget) {
        return false;
      }

      if (selectedBrand !== 'All' && phone.brand !== selectedBrand) {
        return false;
      }

      if (isHikeOnlyFilter && phone.priceStatus !== 'hike') {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'recommended') {
        return b.matchScore - a.matchScore;
      }
      if (sortBy === 'price-asc') {
        return a.currentPrice - b.currentPrice;
      }
      if (sortBy === 'price-desc') {
        return b.currentPrice - a.currentPrice;
      }
      if (sortBy === 'hikes') {
        if (a.priceStatus === 'hike' && b.priceStatus !== 'hike') return -1;
        if (b.priceStatus === 'hike' && a.priceStatus !== 'hike') return 1;
        return b.priceChangePercent.localeCompare(a.priceChangePercent);
      }
      return 0;
    });
  }, [phonesWithScores, searchQuery, maxBudget, selectedBrand, isHikeOnlyFilter, sortBy]);

  const handleToggleCompare = (phone) => {
    if (compareList.some(p => p.id === phone.id)) {
      setCompareList(prev => prev.filter(p => p.id !== phone.id));
    } else {
      if (compareList.length >= 3) {
        alert('Maximum 3 smartphones allowed in side-by-side comparison.');
        return;
      }
      setCompareList(prev => [...prev, phone]);
    }
  };

  return (
    <div>
      {/* Top Live Ticker */}
      <RacingTelemetryTicker
        hikeCount={hikeCount}
        lowestCount={lowestCount}
        onFilterHike={() => {
          soundFX.playClick();
          setIsHikeOnlyFilter(!isHikeOnlyFilter);
        }}
      />

      <div className="app-container">
        {/* Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          compareList={compareList}
          onOpenCompare={() => setIsCompareOpen(true)}
        />

        {/* Minimal Hero Header */}
        <section className="hero-section">
          <div className="hero-badge">
            <Sparkles size={14} /> Live Indian Smartphone Price & Deal Intelligence
          </div>
          <h1 className="hero-title">
            Smart Prices. <span>Indian E-Commerce Deals.</span> Python AI.
          </h1>
          <p className="hero-subtitle">
            Track prices in Indian Rupees (₹), compare Amazon India, Flipkart, Croma, Reliance Digital & Pai International deals, and forecast 90-day price trends.
          </p>
        </section>

        {/* Speedometer & Filter Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <SpeedometerBudget maxBudget={maxBudget} setMaxBudget={setMaxBudget} />
          
          <BudgetFilter
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
            isHikeOnlyFilter={isHikeOnlyFilter}
            setIsHikeOnlyFilter={setIsHikeOnlyFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priorities={PRIORITY_PREFERENCES}
          />
        </div>

        {/* Section Header */}
        <div className="phones-section-header">
          <div className="section-title">
            <Smartphone size={20} style={{ color: 'var(--accent-primary)' }} />
            <span>Indian Smartphone Market</span>
            <span className="count-badge">{filteredPhones.length} Devices</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowUpDown size={15} style={{ color: 'var(--text-dim)' }} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 0.75rem',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '0.82rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="recommended">Best AI Match</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="hikes">Price Hikes First</option>
            </select>
          </div>
        </div>

        {/* Phones Grid */}
        {filteredPhones.length > 0 ? (
          <div className="phones-grid">
            {filteredPhones.map(phone => (
              <PhoneCard
                key={phone.id}
                phone={phone}
                matchScore={phone.matchScore}
                onOpenPriceHistory={(p) => setPriceHistoryPhone(p)}
                onOpenStoreDeals={(p) => setStoreDealsPhone(p)}
                onOpenPythonAi={(p) => setPythonAiPhone(p)}
                onToggleCompare={handleToggleCompare}
                isCompared={compareList.some(p => p.id === phone.id)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              No smartphones match your current filters
            </h3>
            <button
              className="btn-primary"
              style={{ margin: '1rem auto 0 auto' }}
              onClick={() => {
                setMaxBudget(180000);
                setSelectedBrand('All');
                setIsHikeOnlyFilter(false);
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Sticky Compare Bar */}
        {compareList.length > 0 && !isCompareOpen && (
          <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0D121A',
            border: '1px solid var(--accent-primary)',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 100
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>
              {compareList.length} Device{compareList.length > 1 ? 's' : ''} selected for comparison
            </span>
            <button className="btn-primary" onClick={() => setIsCompareOpen(true)}>
              Compare Devices
            </button>
          </div>
        )}

        {/* Modals */}
        {priceHistoryPhone && (
          <PriceHistoryModal
            phone={priceHistoryPhone}
            onClose={() => setPriceHistoryPhone(null)}
          />
        )}

        {storeDealsPhone && (
          <StoreDealModal
            phone={storeDealsPhone}
            onClose={() => setStoreDealsPhone(null)}
          />
        )}

        {pythonAiPhone && (
          <PythonAiPredictorModal
            phone={pythonAiPhone}
            onClose={() => setPythonAiPhone(null)}
          />
        )}

        {isCompareOpen && (
          <CompareDrawer
            compareList={compareList}
            onRemove={(id) => setCompareList(prev => prev.filter(p => p.id !== id))}
            onClear={() => setCompareList([])}
            onClose={() => setIsCompareOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
