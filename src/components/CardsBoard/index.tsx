import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ICard from '../../interfaces/ICard';
import Card from '../Card/index';

import * as TestIds from '../../data/testingIds';

export const EMPTY_BOARD_NOTIFICATION = 'No cards yet. Add new city to own collection!';

export interface ICardsBoard {
  cards: ICard[];
}

const CardsBoard = (props: ICardsBoard): JSX.Element => {
  const { cards } = props;

  return (
    <Box sx={{ padding: 4 }} style={{ display: 'flex', minHeight: 'min-content' }}>
      {cards.length === 0 ? (
        <Box style={{ width: '100%' }} minHeight="80vh">
          <Typography component="div" style={{ textAlign: 'center' }} data-testid={TestIds.EMPTY_CARDS_NOTIFICATION}>
            {EMPTY_BOARD_NOTIFICATION}
          </Typography>
        </Box>
      ) : (
        <Grid
          container
          spacing={1}
          minHeight="80vh"
          style={{ overflowY: 'auto', flex: '1 1 auto', height: '80vh' }}
          data-testid={TestIds.CARDS_GRID}
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardsBoard;
