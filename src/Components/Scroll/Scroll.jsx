import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll the page to the top
  }, [location]);

  return null;
};

export default ScrollToTop;
