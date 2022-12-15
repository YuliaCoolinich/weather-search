import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import InfoCell from '../base/InfoCell';
import CelsiusSymbol from '../base/symbols/CelsiusSymbol';
import ICard from '../../interfaces/ICard';
import * as weatherService from '../../containers/WeatherSearcherPage/services/weatherService';
import * as dateService from '../../containers/WeatherSearcherPage/services/dateService';
import { Metric } from '../../data/units';
import Chart from '../Chart';
import IChartDataItem from '../../interfaces/IChartDataItem';

const userUnit = Metric; // set it in user settings

export interface ICardDetails {
  card: ICard;
}

const CardDetails = (props: ICardDetails) => {
  const { card } = props;

  const temperature = card.weather ? weatherService.roundTemperature(card.weather?.main.temp) : undefined;
  const tempFeelsLike = card.weather ? weatherService.roundTemperature(card.weather?.main.feels_like) : undefined;
  const tempMin = card.weather ? weatherService.roundTemperature(card.weather?.main.temp_min) : undefined;
  const tempMax = card.weather ? weatherService.roundTemperature(card.weather?.main.temp_max) : undefined;

  const chartData: IChartDataItem[] = card.forecast?.map((forecastItem) => ({
    time: dateService.getTimeString(forecastItem.dt),
    temp: forecastItem.main.temp,
  })) as IChartDataItem[];

  return (
    <Box>
      <Typography id="modal-modal-title" component="span" variant="h6">
        Forecast temperature for every next 3 hour
      </Typography>
      <Box>
        <Chart data={chartData} />
      </Box>
      <Typography id="modal-modal-title" component="span" variant="h6">
        Detailed weather data
      </Typography>
      <Typography id="modal-modal-description" component="span" sx={{ mt: 2 }}>
        <InfoCell cellName="Temperature" cellValue={temperature} specialSymbol={<CelsiusSymbol />} />
        <InfoCell cellName="Feels like" cellValue={tempFeelsLike} specialSymbol={<CelsiusSymbol />} />
        <InfoCell cellName="Temperature min" cellValue={tempMin} specialSymbol={<CelsiusSymbol />} />
        <InfoCell cellName="Temperature max" cellValue={tempMax} specialSymbol={<CelsiusSymbol />} />
        <InfoCell cellName="Atmospheric pressure" cellValue={card.weather?.main.pressure} unit={'hPa'} />
        <InfoCell
          cellName="Atmospheric pressure on the sea level"
          cellValue={card.weather?.main.sea_level}
          unit={'hPa'}
        />
        <InfoCell
          cellName="Atmospheric pressure on the ground level"
          cellValue={card.weather?.main.grnd_level}
          unit={'hPa'}
        />
        <InfoCell cellName="Humidity" cellValue={card.weather?.main.humidity} unit={'%'} />
        <InfoCell cellName="Visibility" cellValue={card.weather?.visibility} unit={'m'} />
        <InfoCell cellName="Cloudiness" cellValue={card.weather?.clouds?.all} unit={'%'} />
        <InfoCell cellName="Wind speed" cellValue={card.weather?.wind?.speed} unit={userUnit.windSpeed} />
        <InfoCell cellName="Wind direction" cellValue={card.weather?.wind?.speed} unit={'degrees'} />
        <InfoCell cellName="Wind gust" cellValue={card.weather?.wind?.speed} unit={userUnit.windGust} />
        <InfoCell cellName="Rain volume for the last 1 hour" cellValue={card.weather?.rain?.['1h']} unit={'mm'} />
        <InfoCell cellName="Rain volume for the last 3 hours" cellValue={card.weather?.rain?.['3h']} unit={'mm'} />
        <InfoCell cellName="Snow volume for the last 1 hour" cellValue={card.weather?.snow?.['3h']} unit={'mm'} />
        <InfoCell cellName="Snow volume for the last 3 hours" cellValue={card.weather?.snow?.['3h']} unit={'mm'} />
      </Typography>
    </Box>
  );
};

export default CardDetails;