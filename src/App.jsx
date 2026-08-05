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
import { Sparkles, ArrowUpDown, Smartphone, Gauge, Zap } from 'lucide-react';
import { soundFX } from './utils/audioEffects';
import './styles/app.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxBudget, setMaxBudget] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [isHikeOnlyFilter, setIsHikeOnlyFilter] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Modals & Drawers
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

      if (maxBudget < 1600 && phone.currentPrice > maxBudget) {
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
      {/* F1 Style Telemetry Header Ticker */}
      <RacingTelemetryTicker
        hikeCount={hikeCount}
        lowestCount={lowestCount}
        onFilterHike={() => {
          soundFX.playClick();
          setIsHikeOnlyFilter(!isHikeOnlyFilter);
        }}
      />

      <div className="app-container">
        {/* Top Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          compareList={compareList}
          onOpenCompare={() => setIsCompareOpen(true)}
        />

        {/* Hero Header */}
        <section className="hero-section">
          <div className="hero-badge">
            <Sparkles size={16} /> Python AI & High-Octane Telemetry Hub
          </div>
          <h1 className="hero-title">
            Smart Prices. <span>Hike Alerts.</span> Cheapest Deals.
          </h1>
          <p className="hero-subtitle">
            Powered by Python Machine Learning. Track price hikes, forecast 90-day price trends, set drop alerts, and snipe the best smartphone deals.
          </p>
        </section>

        {/* Speedometer & Filters Container */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
          {/* Lando Norris Speedometer Budget Gauge */}
          <SpeedometerBudget maxBudget={maxBudget} setMaxBudget={setMaxBudget} />

          {/* Standard Filters */}
          <BudgetFilter
            maxBudget={maxBudget}
            setMaxBudget={setMaxBudget}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
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

        {/* Header bar for phone listings */}
        <div className="phones-section-header">
          <div className="section-title">
            <Smartphone size={24} style={{ color: '#FF8700' }} />
            <span>Telemetry Smartphone Grid</span>
            <span className="count-badge">{filteredPhones.length} Found</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowUpDown size={16} style={{ color: 'var(--text-dim)' }} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '0.85rem',
                fontWeight: 700,
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
          <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              No smartphones match your telemetry criteria
            </h3>
            <button
              className="btn-primary"
              style={{ margin: '1rem auto 0 auto' }}
              onClick={() => {
                setMaxBudget(1600);
                setSelectedBrand('All');
                setIsHikeOnlyFilter(false);
                setSearchQuery('');
              }}
            >
              Reset Pit Stop Filters
            </button>
          </div>
        )}

        {/* Floating Sticky Compare Bar */}
        {compareList.length > 0 && !isCompareOpen && (
          <div className="compare-sticky-bar">
            <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>
              🏎️ {compareList.length} Devices selected for comparison
            </span>
            <button className="btn-primary" onClick={() => setIsCompareOpen(true)}>
              Compare Now
            </button>
          </div>
        )}

        {/* Price History Modal */}
        {priceHistoryPhone && (
          <PriceHistoryModal
            phone={priceHistoryPhone}
            onClose={() => setPriceHistoryPhone(null)}
          />
        )}

        {/* Store Deals Modal */}
        {storeDealsPhone && (
          <StoreDealModal
            phone={storeDealsPhone}
            onClose={() => setStoreDealsPhone(null)}
          />
        )}

        {/* Python AI Forecast Modal */}
        {pythonAiPhone && (
          <PythonAiPredictorModal
            phone={pythonAiPhone}
            onClose={() => setPythonAiPhone(null)}
          />
        )}

        {/* Comparison Drawer Modal */}
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
