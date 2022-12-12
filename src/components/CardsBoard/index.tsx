import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ICard from '../../interfaces/ICard';
import Card from '../Card/index';

export interface ICardsBoard {
  cards: ICard[];
}

const CardsBoard = (props: ICardsBoard) => {
  const { cards } = props;

  const updateCard = (idCard: string): void => {
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
            <Card card={card} updateCard={updateCard} key={card.id} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardsBoard;
