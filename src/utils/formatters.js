// Indian Rupee (INR) Formatter Utility
export function formatINR(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// Store Direct Product Search Deep-Link Generator
export function getStoreLink(storeName, phoneName) {
  const query = encodeURIComponent(phoneName);
  const lowerStore = (storeName || '').toLowerCase();

  if (lowerStore.includes('amazon')) {
    return `https://www.amazon.in/s?k=${query}`;
  } else if (lowerStore.includes('flipkart')) {
    return `https://www.flipkart.com/search?q=${query}`;
  } else if (lowerStore.includes('croma')) {
    return `https://www.croma.com/searchB?q=${query}`;
  } else if (lowerStore.includes('reliance')) {
    return `https://www.reliancedigital.in/search?q=${query}`;
  } else if (lowerStore.includes('pai')) {
    return `https://www.paiinternational.in/search/?q=${query}`;
  } else if (lowerStore.includes('samsung')) {
    return `https://www.samsung.com/in/search/?searchvalue=${query}`;
  } else if (lowerStore.includes('oneplus')) {
    return `https://www.oneplus.in/search?keyword=${query}`;
  } else if (lowerStore.includes('apple')) {
    return `https://www.apple.com/in/search/${query}`;
  } else if (lowerStore.includes('mi') || lowerStore.includes('xiaomi')) {
    return `https://www.mi.com/in/search/${query}`;
  }
  return `https://www.amazon.in/s?k=${query}`;
}
