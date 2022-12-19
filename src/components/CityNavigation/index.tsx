import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SearchInput from '../SearchInput';
import ICity from '../../interfaces/ICity';
import citiesData from '../../data/city.list.json';

import * as TestIds from '../../data/testingIds';

export interface ICityNavigation {
  addCard: (cityId: number) => Promise<void>;
}

const INPUT_LABEL = 'Input city name';
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
    <Box
      sx={{
        padding: 5,
      }}
      data-testid={TestIds.CITY_NAVIGATION}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <SearchInput
          id={'city-input'}
          options={cities}
          labelText={INPUT_LABEL}
          setCity={setCityId}
          data-testid={TestIds.SEARCH_INPUT}
        />
        <Button
          id={'submit-button'}
          variant="contained"
          size="large"
          onClick={handleCitySubmit}
          data-testid={TestIds.BUTTON_SUBMIT}
        >
          {BUTTON_CONTENT}
        </Button>
      </Stack>
    </Box>
  );
};

export default CityNavigation;
