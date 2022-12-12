import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';

import ICard from '../../interfaces/ICard';
import FlagImage from '../FlagImage';

import useAppDispatch from '../../hooks/useAppDispatch';
import * as actions from '../../containers/WeatherSearcherPage/redux/actionCreators/cards';

export interface ICardProps {
  card: ICard;
  updateCard: (id: string) => void;
}

const WeatherCard = (props: ICardProps) => {
  const { card, updateCard } = props;

  const dispatch = useAppDispatch();

  const onDeleteHandler = async (): Promise<void> => {
    const isLogout: boolean = window.confirm(
      `Are you sure you want to delete card of ${card.city.name} city from your collection?`,
    );
    if (isLogout) {
      console.log(`delete ${card.id}`);
      await dispatch(actions.deleteCard(card.id));
    }
  };
  const onUpdateHandler = (): void => {
    updateCard(card.id);
  };
  return (
    <Box sx={{ maxWidth: 500, width: 300, margin: '10px', padding: '10px' }}>
      <Card variant="outlined">
        <CardContent style={{ paddingBottom: '5px' }}>
          <Box style={{ display: 'flex', justifyContent: 'right' }}>
            <Tooltip title="Update weather" describeChild>
              <IconButton aria-label="update" size="small" onClick={onUpdateHandler}>
                <UpdateOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete card" describeChild>
              <IconButton aria-label="delete" size="small" onClick={onDeleteHandler}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="h6" style={{ padding: '5px' }}>
            <FlagImage countryCode={card.city.country} />
            {card.city.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {card.city.country}
          </Typography>
          <CardActions style={{ display: 'flex', alignItems: 'normal', justifyContent: 'right' }}>
            <Button size="small">Details</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
