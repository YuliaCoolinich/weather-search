import React from 'react';
import Box from '@mui/material/Box';
import CityNavigation from '../../components/CityNavigation';
import CardsBoard from '../../components/CardsBoard';
import useAppSelector from '../../hooks/useAppSelector';
import initialState from './redux/initialState';
import useAppDispatch from '../../hooks/useAppDispatch';
import * as actions from './redux/actionCreators/cards';
import Alert, { AlertType } from '../../components/Alert';

const WeatherSearcherPage = (): JSX.Element => {
  const state = useAppSelector((state) => state.weatherSearcherReducer ?? initialState);
  console.log(state);

  const dispatch = useAppDispatch();

  const addCard = async (cityId: number): Promise<void> => {
    await dispatch(actions.addCard(state.cards, cityId));
  };
  const handleCollapseError = () => {
    dispatch(actions.collapseError());
  };
  const handleCollapseNotification = () => {
    dispatch(actions.collapseNotification());
  };

  return (
    <>
      <CityNavigation addCard={addCard} />
      <CardsBoard cards={state.cards} />
      <Box
        sx={{
          marginBlockEnd: 1,
          padding: 1,
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
