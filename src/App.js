import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
