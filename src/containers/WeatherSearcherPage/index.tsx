import React from 'react';
import CityNavigation from '../../components/CityNavigation';
import CardsBoard from '../../components/CardsBoard';
import useAppSelector from '../../hooks/useAppSelector';
//import initialState from './redux/initialState';

const WeatherSearcherPage = () => {
  const state = useAppSelector((state) => state.weatherSearcherReducer); // TODO add using new js version: ?? initialState
  console.log(state);

  return (
    <>
      <CityNavigation />
      <CardsBoard cards={state.cards} />
    </>
  );
};

export default WeatherSearcherPage;
