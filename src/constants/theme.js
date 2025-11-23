/**
 * Theme Constants
 * Centralized color system and design tokens for the application
 */

export const COLORS = {
  primary: {
    DEFAULT: '#8B1A5C',
    light: '#E91E63',
    dark: '#7A1650',
    hover: '#D81B60',
  },
  secondary: {
    DEFAULT: '#1E3A8A',
  },
  gradient: {
    primary: 'linear-gradient(to right, #8B1A5C, #E91E63)',
    primaryHover: 'linear-gradient(to right, #7A1650, #D81B60)',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  whatsapp: '#25D366',
};

export const CONTACT_INFO = {
  phones: [
    { number: '97516 69229', isWhatsApp: false },
    { number: '97906 33090', isWhatsApp: true },
    { number: '99527 33090', isWhatsApp: false },
  ],
  address: {
    line1: 'D.No.65E, Plot No.38, Seetha Arcade',
    line2: 'New Raja Colony, Beema Nagar',
    line3: 'Trichy - 620 001',
    full: 'D.No.65E, Plot No.38, Seetha Arcade, New Raja Colony, Beema Nagar, Trichy - 620 001',
  },
  email: 'info@seethaladieshostel.com',
  officeHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
};

export const HOSTEL_INFO = {
  name: 'Seetha Ladies Hostel',
  tagline: 'Safe & Serene Living for Girls ..',
  targetAudience: "For Working Women's & Students",
  description: 'Safe & Serene Living for Girls. For Working Women\'s & Students.',
};

export const FACILITIES = {
  left: [
    'Licensed Hostel',
    'Excellent Accommodation',
    'Fully Ventilated & Spacious Rooms',
    'Spacious Dining Hall / Study Room',
    'A/C & Non A/C',
    'Hygienic Home Made Food',
    '24 Hrs Security',
    'CCTV Surveillance',
  ],
  right: [
    'RO Water',
    'Regular Cleaning Service',
    'Hi-Speed - Free Wifi',
    'Washing Machine / Hot Water',
    'Available 1/2/3/4/5 Sharing Rooms',
    'Lift Facility',
    'Doctor On Call (24X7)',
    'Safe Environment / Prime Location',
  ],
};

export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  easing: {
    easeOut: 'ease-out',
    easeIn: 'ease-in',
    easeInOut: 'ease-in-out',
  },
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

