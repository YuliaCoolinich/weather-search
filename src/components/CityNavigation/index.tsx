import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SearchInput from '../SearchInput';
import ICity from '../../interfaces/ICity';
import citiesData from '../../data/city.list.json';

const CityNavigation = () => {
  const cities = citiesData as Array<ICity>;
  const [cityId, setCityId] = useState<number>();
  console.log(cityId);

  const handleCitySubmit = (): void => {
    if (cityId) {
      console.log('Go action');
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