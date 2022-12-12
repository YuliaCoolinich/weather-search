import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import useAppDispatch from '../../hooks/useAppDispatch';
import SearchInput from '../SearchInput';
import ICity from '../../interfaces/ICity';
import citiesData from '../../data/city.list.json';
import * as actions from '../../containers/WeatherSearcherPage/redux/actionCreators/cards';

const CityNavigation = () => {
  const cities = citiesData as Array<ICity>;
  const [cityId, setCityId] = useState<number>();
  console.log(cityId);

  const dispatch = useAppDispatch();

  const handleCitySubmit = async (): Promise<void> => {
    if (cityId) {
      // TODO check if cards is already created:
      await dispatch(actions.addCard(cityId));
    }
  };

  return (
    <Box
      sx={{
        padding: 5,
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <SearchInput id={'city-input'} options={cities} labelText={'Input city name'} setCity={setCityId} />
        <Button variant="contained" size="large" onClick={handleCitySubmit}>
          GO
        </Button>
      </Stack>
    </Box>
  );
};

export default CityNavigation;
