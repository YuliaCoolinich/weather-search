import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import CityNavigation from '../../components/CityNavigation';
import CardsBoard from '../../components/CardsBoard';
import useAppSelector from '../../hooks/useAppSelector';
import initialState from './redux/initialState';
import useAppDispatch from '../../hooks/useAppDispatch';
import * as actionsCard from './redux/actionCreators/cards';
import * as actionsWeather from './redux/actionCreators/weather';
import Alert, { AlertType } from '../../components/Alert';

const WeatherSearcherPage = (): JSX.Element => {
  const state = useAppSelector((state) => state.weatherSearcherReducer ?? initialState);
  console.log(state);

  useEffect(() => {
    if (state.cards.length !== 0) {
      // The weather should be updated for each card at the first render
      state.cards.forEach(async (card) => {
        await dispatch(actionsWeather.getCityWeather(card.city.id));
      });
    }
  }, []);

  const dispatch = useAppDispatch();

  const addCard = async (cityId: number): Promise<void> => {
    await dispatch(actionsCard.addCard(state.cards, cityId));
  };
  const handleCollapseError = () => {
    dispatch(actionsCard.collapseError());
  };
  const handleCollapseNotification = () => {
    dispatch(actionsCard.collapseNotification());
  };

  return (
    <>
      <CityNavigation addCard={addCard} />
      <CardsBoard cards={state.cards} />
      <Box
        sx={{
          marginBlockEnd: 1,
          padding: 1,
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        }}
      >
        <Alert
          isShown={!!state.errorMessage}
          onCollapse={handleCollapseError}
          type={AlertType.Error}
          message={state.errorMessage}
        />
        <Alert
          isShown={!!state.notificationMessage}
          onCollapse={handleCollapseNotification}
          type={AlertType.Success}
          message={state.notificationMessage}
        />
      </Box>
    </>
  );
};

export default WeatherSearcherPage;
