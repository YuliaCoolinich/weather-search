import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FlagImage from '../FlagImage/index';

import InfoCell from '../base/InfoCell';
import CelsiusSymbol from '../base/symbols/CelsiusSymbol';
import ICard from '../../interfaces/ICard';
import * as weatherService from '../../services/weatherService';
import * as dateService from '../../services/dateService';
import { Metric } from '../../data/units';
import Chart from '../Chart';
import IChartDataItem from '../../interfaces/IChartDataItem';

const userUnit = Metric; // set it in user settings

export interface ICardDetails {
  card: ICard;
}

const FORECAST_BOX_TITLE = 'Tomorrow forecast temperature for every next 3 hours';
const DETAILED_BOX_TITLE = 'Detailed weather data';

const CardDetails = (props: ICardDetails): JSX.Element => {
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
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <FlagImage iconCode={card.city.country} countryName={card.city.country} width={40} />
        <Typography variant="h6" style={{ padding: '2px' }}>
          {card.city.name}
        </Typography>
      </Box>
      <Box style={{ overflowY: 'auto', maxHeight: '65vh', marginTop: '15px' }}>
        <Typography id="modal-modal-title" component="span" variant="h6">
          {FORECAST_BOX_TITLE}
        </Typography>
        <Box>
          <Chart data={chartData} />
        </Box>
        <Typography id="modal-modal-title" component="span" variant="h6">
          {DETAILED_BOX_TITLE}
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
    </Box>
  );
};

export default CardDetails;
