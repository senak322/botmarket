import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const { tg } = useTelegram;

  useEffect(() => {
    tg.ready()
  }, [])

  

  return (
    <Header />
  );
}

export default App;
