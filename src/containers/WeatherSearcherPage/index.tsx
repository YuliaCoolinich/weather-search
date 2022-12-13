import React from 'react';
import Box from '@mui/material/Box';
import CityNavigation from '../../components/CityNavigation';
import CardsBoard from '../../components/CardsBoard';
import Alert, { AlertType } from '../../components/Alert';
import useAppSelector from '../../hooks/useAppSelector';
import initialState from './redux/initialState';
import useAppDispatch from '../../hooks/useAppDispatch';
import * as actions from './redux/actionCreators/cards';

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
      </Box>
    </> // TODO show message about added card
  );
};

export default WeatherSearcherPage;
