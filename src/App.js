import './App.css';

import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';

import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import ProductsList from './components/ProductsList/ProductsList';
import Form from './components/Form/Form';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route index element={<ProductsList />} /> */}
        <Route index element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
