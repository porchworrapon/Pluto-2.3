import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from "./component/Hero/Hero";
import Products from './component/Products/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProduct from './component/TopProduct/TopProduct';

const App = () => {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
<TopProduct/>
    </div>
  );
};

export default App