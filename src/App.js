import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const { tg, onToggleBtn } = useTelegram;

  useEffect(() => {
    tg.ready()
  }, [])

  

  return (
    <>
    {/* <Header /> */}
    <button onClick={onToggleBtn}>toggle</button>
    </>
  );
}

export default App;
