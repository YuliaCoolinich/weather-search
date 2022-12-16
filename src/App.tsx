import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Rotes from './data/Routes';

import WeatherSearcherPage from './containers/WeatherSearcherPage';

import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Rotes.HOME} element={<WeatherSearcherPage />} />
        <Route path={Rotes.WEATHER_PAGE} element={<WeatherSearcherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
