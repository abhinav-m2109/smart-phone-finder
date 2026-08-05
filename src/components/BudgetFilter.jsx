import React from 'react';
import { 
  Sparkles, Camera, BatteryCharging, Zap, BadgeDollarSign, Palette, 
  Search, SlidersHorizontal, AlertTriangle, ArrowDownRight, Tag 
} from 'lucide-react';
import { CATEGORIES, BRANDS } from '../data/smartphones';

const ICON_MAP = {
  Sparkles: Sparkles,
  Camera: Camera,
  BatteryCharging: BatteryCharging,
  Zap: Zap,
  BadgeDollarSign: BadgeDollarSign,
  Palette: Palette
};

export default function BudgetFilter({
  maxBudget,
  setMaxBudget,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedPriority,
  setSelectedPriority,
  isHikeOnlyFilter,
  setIsHikeOnlyFilter,
  searchQuery,
  setSearchQuery,
  priorities
}) {
  const PRESETS = [250, 400, 600, 900, 1500];

  return (
    <div className="glass-panel filter-panel">
      {/* Search Input */}
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search by phone name (e.g., iPhone 15 Pro, S24 Ultra, Pixel 8a)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filter-grid">
        {/* Budget Section */}
        <div>
          <div className="filter-group-title">
            <SlidersHorizontal size={16} /> Max Budget Limit
          </div>
          <div className="budget-header">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target Budget</span>
            <span className="budget-val">${maxBudget}</span>
          </div>
          <input
            type="range"
            min="150"
            max="1600"
            step="50"
            value={maxBudget}
            onChange={(e) => setMaxBudget(Number(e.target.value))}
            className="range-slider"
          />
          <div className="budget-presets">
            {PRESETS.map((val) => (
              <button
                key={val}
                className={`preset-chip ${maxBudget === val ? 'active' : ''}`}
                onClick={() => setMaxBudget(val)}
              >
                ${val}
              </button>
            ))}
            <button
              className={`preset-chip ${maxBudget === 1600 ? 'active' : ''}`}
              onClick={() => setMaxBudget(1600)}
            >
              Any Price
            </button>
          </div>
        </div>

        {/* Priority Preferences */}
        <div>
          <div className="filter-group-title">
            <Sparkles size={16} /> What matters most to you?
          </div>
          <div className="priority-chips">
            {priorities.map((item) => {
              const IconComp = ICON_MAP[item.icon] || Sparkles;
              const isActive = selectedPriority === item.id;
              return (
                <button
                  key={item.id}
                  className={`chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedPriority(item.id)}
                >
                  <IconComp size={15} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand & Price Hike Filter */}
        <div>
          <div className="filter-group-title">
            <Tag size={16} /> Brand & Market Status
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
            {BRANDS.map((brand) => (
              <button
                key={brand}
                className={`preset-chip ${selectedBrand === brand ? 'active' : ''}`}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>

          <button
            className={`hike-toggle-btn ${isHikeOnlyFilter ? 'active' : ''}`}
            onClick={() => setIsHikeOnlyFilter(!isHikeOnlyFilter)}
          >
            <AlertTriangle size={18} />
            <span>{isHikeOnlyFilter ? 'Showing Price Hikes Only' : 'Filter Price Hikes Only'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
