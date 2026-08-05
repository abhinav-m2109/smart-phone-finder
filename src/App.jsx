import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SpeedometerBudget from './components/SpeedometerBudget';
import PhoneCard from './components/PhoneCard';
import CompareDrawer from './components/CompareDrawer';
import PriceHistoryModal from './components/PriceHistoryModal';
import PythonAiPredictorModal from './components/PythonAiPredictorModal';
import PhoneDetailModal from './components/PhoneDetailModal';
import { SMARTPHONES, CATEGORIES, BRANDS, PRIORITY_PREFERENCES } from './data/smartphones';
import { Search, Sparkles, Camera, BatteryCharging, Zap, BadgeDollarSign, Palette, RefreshCw } from 'lucide-react';
import { soundFX } from './utils/audioEffects';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [budgetLimit, setBudgetLimit] = useState(180000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priorityFocus, setPriorityFocus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterHikesOnly, setFilterHikesOnly] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Modal States
  const [activeModalPhone, setActiveModalPhone] = useState(null);
  const [activeAiPhone, setActiveAiPhone] = useState(null);
  const [activeDetailPhone, setActiveDetailPhone] = useState(null);

  const toggleTheme = () => {
    soundFX.playClick();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Filter & Priority Algorithm
  const filteredPhones = useMemo(() => {
    return SMARTPHONES.filter(phone => {
      // Budget limit
      if (budgetLimit < 180000 && phone.currentPrice > budgetLimit) return false;
      // Category
      if (selectedCategory !== 'All' && phone.category !== selectedCategory) return false;
      // Brand
      if (selectedBrand !== 'All' && phone.brand !== selectedBrand) return false;
      // Price Hikes Filter
      if (filterHikesOnly && phone.priceStatus !== 'hike') return false;
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = phone.name.toLowerCase().includes(q);
        const matchesChip = phone.specs.chipset.toLowerCase().includes(q);
        const matchesTags = phone.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesChip && !matchesTags) return false;
      }
      return true;
    }).sort((a, b) => {
      if (priorityFocus === 'camera') return b.scores.camera - a.scores.camera;
      if (priorityFocus === 'battery') return b.scores.battery - a.scores.battery;
      if (priorityFocus === 'gaming') return b.scores.gaming - a.scores.gaming;
      if (priorityFocus === 'value') return b.scores.value - a.scores.value;
      if (priorityFocus === 'design') return b.scores.design - a.scores.design;
      // Default: Best overall balance
      return b.rating - a.rating;
    });
  }, [budgetLimit, selectedCategory, selectedBrand, priorityFocus, searchQuery, filterHikesOnly]);

  const handleToggleCompare = (phone) => {
    if (compareList.some(p => p.id === phone.id)) {
      soundFX.playRemove();
      setCompareList(compareList.filter(p => p.id !== phone.id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 smartphones at a time.");
        return;
      }
      soundFX.playAdd();
      setCompareList([...compareList, phone]);
    }
  };

  const getPriorityIcon = (iconName) => {
    switch (iconName) {
      case 'Camera': return <Camera size={14} />;
      case 'BatteryCharging': return <BatteryCharging size={14} />;
      case 'Zap': return <Zap size={14} />;
      case 'BadgeDollarSign': return <BadgeDollarSign size={14} />;
      case 'Palette': return <Palette size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  return (
    <div className="app-container">
      {/* Sleek Top Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        compareList={compareList} 
        onOpenCompare={() => setIsCompareOpen(true)} 
      />

      {/* Main Container */}
      <main className="main-content">
        {/* Clean Hero Header */}
        <section style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1.5rem' }}>
          <h1 style={{ fontSize: '2.75rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Smart <span style={{ color: 'var(--accent-primary)' }}>Prices.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.5' }}>
            Discover top smartphone deals, track price trends, compare detailed specs, and find the perfect phone for your needs.
          </p>
        </section>

        {/* Interactive Dashboard Control Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Speedometer Budget Slider */}
          <SpeedometerBudget 
            budgetLimit={budgetLimit} 
            onChangeBudget={setBudgetLimit} 
          />

          {/* Search & Filters Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.25rem', boxShadow: 'var(--card-shadow)' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search by smartphone model (e.g. iPhone 17, S26 Ultra, Pixel 10)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Priority Focus Selector */}
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                ⚡ Priority Focus
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {PRIORITY_PREFERENCES.map(pref => (
                  <button
                    key={pref.id}
                    onClick={() => { soundFX.playClick(); setPriorityFocus(pref.id); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: priorityFocus === pref.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                      background: priorityFocus === pref.id ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                      color: priorityFocus === pref.id ? 'var(--accent-primary)' : 'var(--text-secondary)'
                    }}
                  >
                    {getPriorityIcon(pref.icon)}
                    {pref.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                🏷️ Brand Filter
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {BRANDS.map(brand => (
                  <button
                    key={brand}
                    onClick={() => { soundFX.playClick(); setSelectedBrand(brand); }}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: selectedBrand === brand ? 700 : 500,
                      cursor: 'pointer',
                      border: 'none',
                      background: selectedBrand === brand ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedBrand === brand ? '#000' : 'var(--text-secondary)'
                    }}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filter Tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Showing <strong style={{ color: 'var(--accent-primary)' }}>{filteredPhones.length}</strong> smartphones matching your criteria
          </div>

          {(budgetLimit < 180000 || selectedBrand !== 'All' || searchQuery !== '' || priorityFocus !== 'all') && (
            <button
              onClick={() => {
                soundFX.playClick();
                setBudgetLimit(180000);
                setSelectedCategory('All');
                setSelectedBrand('All');
                setPriorityFocus('all');
                setSearchQuery('');
                setFilterHikesOnly(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-primary)',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} /> Reset All Filters
            </button>
          )}
        </div>

        {/* Smartphones Grid */}
        {filteredPhones.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredPhones.map(phone => (
              <PhoneCard
                key={phone.id}
                phone={phone}
                onOpenPriceModal={setActiveModalPhone}
                onOpenAiModal={setActiveAiPhone}
                onOpenDetailModal={setActiveDetailPhone}
                isComparing={compareList.some(p => p.id === phone.id)}
                onToggleCompare={handleToggleCompare}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Smartphones Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Try adjusting your max budget slider or clearing your search filters.
            </p>
            <button
              className="btn-secondary"
              onClick={() => {
                setBudgetLimit(180000);
                setSelectedBrand('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Comparison Drawer with AI Recommendation */}
      <CompareDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        phones={compareList}
        onRemovePhone={(id) => setCompareList(compareList.filter(p => p.id !== id))}
      />

      {/* Modals */}
      <PriceHistoryModal
        phone={activeModalPhone}
        onClose={() => setActiveModalPhone(null)}
      />

      <PythonAiPredictorModal
        phone={activeAiPhone}
        onClose={() => setActiveAiPhone(null)}
      />

      <PhoneDetailModal
        phone={activeDetailPhone}
        onClose={() => setActiveDetailPhone(null)}
      />
    </div>
  );
}
