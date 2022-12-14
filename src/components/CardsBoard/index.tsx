import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ICard from '../../interfaces/ICard';
import Card from '../Card/index';

const EMPTY_BOARD_NOTIFICATION = 'No cards yet. Add new city to own collection!';

export interface ICardsBoard {
  cards: ICard[];
}

const CardsBoard = (props: ICardsBoard): JSX.Element => {
  const { cards } = props;

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      {cards.length === 0 ? (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>{EMPTY_BOARD_NOTIFICATION}</Box>
      ) : (
        <Grid container spacing={1} minHeight="70vh">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardsBoard;
