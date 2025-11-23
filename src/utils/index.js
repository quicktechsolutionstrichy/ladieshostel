/**
 * Utility functions
 */

/**
 * Formats phone number for display
 * @param {string} phone - Phone number string
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Format as Indian phone number (10 digits)
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};

/**
 * Generates WhatsApp link
 * @param {string} phone - Phone number
 * @returns {string} - WhatsApp link
 */
export const getWhatsAppLink = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const countryCode = cleaned.length === 10 ? '91' : '';
  return `https://wa.me/${countryCode}${cleaned}`;
};

/**
 * Generates tel: link
 * @param {string} phone - Phone number
 * @returns {string} - Tel link
 */
export const getTelLink = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const countryCode = cleaned.length === 10 ? '+91' : '';
  return `tel:${countryCode}${cleaned}`;
};

/**
 * Clamp value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Clamped value
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};




