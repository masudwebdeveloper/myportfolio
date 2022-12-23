import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Home data-aos='fade-left'></Home>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff'
        }}
      />
    </div>
  );
}

export default App;
