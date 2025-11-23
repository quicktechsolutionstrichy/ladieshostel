import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 * @returns {Function} - Function to scroll to a section by ID
 */
export const useSmoothScroll = () => {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToSection;
};




