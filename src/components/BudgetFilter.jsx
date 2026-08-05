import React from 'react';
import { 
  Sparkles, Camera, BatteryCharging, Zap, BadgeDollarSign, Palette, 
  Search, SlidersHorizontal, AlertTriangle, Tag 
} from 'lucide-react';
import { BRANDS } from '../data/smartphones';

const ICON_MAP = {
  Sparkles: Sparkles,
  Camera: Camera,
  BatteryCharging: BatteryCharging,
  Zap: Zap,
  BadgeDollarSign: BadgeDollarSign,
  Palette: Palette
};

export default function BudgetFilter({
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
  return (
    <div className="glass-panel filter-panel">
      {/* Search Input */}
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search by smartphone model (e.g. iPhone 16 Pro, S25 Ultra, Pixel 9, OnePlus 13)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filter-grid">
        {/* Priority Preferences */}
        <div>
          <div className="filter-group-title">
            <Sparkles size={14} /> Priority Focus
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
                  <IconComp size={13} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand & Market Filter */}
        <div>
          <div className="filter-group-title">
            <Tag size={14} /> Brand & Price Filter
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
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
            <AlertTriangle size={15} />
            <span>{isHikeOnlyFilter ? 'Showing Price Hikes Only' : 'Filter Price Hikes Only'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
