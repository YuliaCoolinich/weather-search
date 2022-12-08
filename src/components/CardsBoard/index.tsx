import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '../Card/index';

// TODO get rid of mocked data
const cards = [
  {
    id: 1,
    city: {
      id: 710202,
      name: 'Dmitrivka',
      state: '',
      country: 'UA',
      coord: {
        lon: 24.62466,
        lat: 48.52354,
      },
    },
  },
  {
    id: 2,
    city: {
      id: 710202,
      name: 'Dnipro',
      state: '',
      country: 'UA',
      coord: {
        lon: 24.62466,
        lat: 48.52354,
      },
    },
  },
  {
    id: 3,
    city: {
      id: 710202,
      name: 'London',
      state: '',
      country: 'UA',
      coord: {
        lon: 24.62466,
        lat: 48.52354,
      },
    },
  },
  {
    id: 4,
    city: {
      id: 710202,
      name: 'Paris',
      state: '',
      country: 'UA',
      coord: {
        lon: 24.62466,
        lat: 48.52354,
      },
    },
  },
  {
    id: 5,
    city: {
      id: 710202,
      name: 'Not Paris',
      state: '',
      country: 'UA',
      coord: {
        lon: 24.62466,
        lat: 48.52354,
      },
    },
  },
];

const CardsBoard = () => {
  const deleteCard = (idCard: number): void => {
    console.log(`delete ${idCard}`);
  };
  const updateCard = (idCard: number): void => {
    console.log(`update ${idCard}`);
  };

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      {cards.length === 0 ? (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>No cards yet. Add new city to own collection!</Box>
      ) : (
        <Grid container spacing={1} minHeight="100vh">
          {cards.map((card) => (
            <Card card={card} deleteCard={deleteCard} updateCard={updateCard} key={card.id} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardsBoard;
