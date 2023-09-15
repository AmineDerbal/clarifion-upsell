import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getScreenWidthName } from './redux/screen/screenSlice';
import Header from './components/Header/Header';
import Product from './components/Product';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();
  const screenWidth = useSelector((state) => state.screen.screenWidth);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      if (screenSize < 1220 && screenSize > 900) {
        dispatch(getScreenWidthName('xl'));
      } else if (screenSize < 900 && screenSize > 768) {
        dispatch(getScreenWidthName('lg'));
      } else if (screenSize < 768 && screenSize > 480) {
        dispatch(getScreenWidthName('md'));
      } else if (screenSize < 480) {
        dispatch(getScreenWidthName('sm'));
      } else {
        dispatch(getScreenWidthName('2xl'));
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
  }, [dispatch, screenWidth]);
  return (
    <div className="manrope">
      <Header />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
