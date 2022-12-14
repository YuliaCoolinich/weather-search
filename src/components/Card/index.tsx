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

import CelsiusSymbol from '../base/symbols/CelsiusSymbol';
import InfoCell from '../base/InfoCell';
import ICard from '../../interfaces/ICard';
import FlagImage from '../FlagImage';
import WeatherImage from '../WeatherImage';

import useAppDispatch from '../../hooks/useAppDispatch';
import * as actionsCard from '../../containers/WeatherSearcherPage/redux/actionCreators/cards';
import * as actionWeather from '../../containers/WeatherSearcherPage/redux/actionCreators/weather';

import * as dateService from '../../containers/WeatherSearcherPage/services/dateService';
import * as weatherService from '../../containers/WeatherSearcherPage/services/weatherService';

export interface ICardProps {
  card: ICard;
}

const WeatherCard = (props: ICardProps): JSX.Element => {
  const { card } = props;

  const dispatch = useAppDispatch();

  const onDeleteHandler = async (): Promise<void> => {
    const isDelete: boolean = window.confirm(
      `Are you sure you want to delete card of ${card.city.name} city from your collection?`,
    );
    if (isDelete) {
      await dispatch(actionsCard.deleteCard(card.id));
    }
  };
  const onUpdateHandler = async (): Promise<void> => {
    await dispatch(actionWeather.getCityWeather(card.city.id));
  };

  const temperature = card.weather ? weatherService.roundTemperature(card.weather?.main.temp) : undefined;
  const tempFeelsLike = card.weather ? weatherService.roundTemperature(card.weather?.main.feels_like) : undefined;
  const tempMin = card.weather ? weatherService.roundTemperature(card.weather?.main.temp_min) : undefined;
  const tempMax = card.weather ? weatherService.roundTemperature(card.weather?.main.temp_max) : undefined;

  return (
    <Box sx={{ maxWidth: 500, width: 300, margin: '10px', padding: '10px' }}>
      <Card variant="outlined">
        <CardContent style={{ paddingBottom: '5px' }}>
          <Box style={{ display: 'flex', justifyContent: 'right' }}>
            <Tooltip title="Delete card" describeChild followCursor>
              <IconButton aria-label="delete" size="small" onClick={onDeleteHandler}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={`Update weather. Last updated ${dateService.getTimeFrom(card.updatedAt)}`}
              describeChild
              followCursor
            >
              <IconButton aria-label="update" size="small" onClick={onUpdateHandler}>
                <UpdateOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <FlagImage iconCode={card.city.country} countryName={card.city.country} width={40} />
            <Typography variant="h6" style={{ padding: '2px' }}>
              {card.city.name}
            </Typography>
          </Box>
          <Box style={{ paddingInlineEnd: 5 }}>
            <Box
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', textAlign: 'right', width: '100%' }}
            >
              <WeatherImage weatherIcon={card.weather?.weather[0].icon} weatherName={card.weather?.weather[0].main} />
              <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.weather?.weather[0].description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h4">
                  <Typography component="span" sx={{ mb: 1.5 }} variant="h4">
                    {temperature}
                  </Typography>
                  <CelsiusSymbol />
                </Typography>
              </Box>
            </Box>
          </Box>
          <InfoCell cellName="Feels like" cellValue={tempFeelsLike} specialSymbol={<CelsiusSymbol />} />
          <InfoCell cellName="Temperature min" cellValue={tempMin} specialSymbol={<CelsiusSymbol />} />
          <InfoCell cellName="Temperature max" cellValue={tempMax} specialSymbol={<CelsiusSymbol />} />
          <CardActions style={{ display: 'flex', alignItems: 'normal', justifyContent: 'right' }}>
            <Button size="small">Details</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
