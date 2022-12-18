import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SearchInput from '../SearchInput';
import ICity from '../../interfaces/ICity';
import citiesData from '../../data/city.list.json';

export interface ICityNavigation {
  addCard: (cityId: number) => Promise<void>;
}

const BUTTON_CONTENT = 'GO';

const CityNavigation = (props: ICityNavigation): JSX.Element => {
  const cities = citiesData as Array<ICity>;
  const [cityId, setCityId] = useState<number>();

  const { addCard } = props;

  const handleCitySubmit = async (): Promise<void> => {
    if (cityId) {
      addCard(cityId);
    }
  };

  return (
    <Box style={{ padding: '20px' }}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <SearchInput id={'city-input'} options={cities} labelText={'Input city name'} setCity={setCityId} />
        <Button variant="contained" size="large" onClick={handleCitySubmit}>
          {BUTTON_CONTENT}
        </Button>
      </Stack>
    </Box>
  );
};

export default CityNavigation;
