import * as React from 'react';

const URL_WEATHER_ICON_API = 'http://openweathermap.org/img/wn/';

export interface IWeatherImage {
  weatherIcon?: string;
}

const WeatherImage = (props: IWeatherImage): JSX.Element => {
  const { weatherIcon } = props;

  return (
    <img
      loading="lazy"
      width="100"
      src={`${URL_WEATHER_ICON_API}${weatherIcon?.toLowerCase()}@2x.png`}
      srcSet={`${URL_WEATHER_ICON_API}${weatherIcon?.toLowerCase()}@2x.png`}
      alt="weather icon"
      style={{ padding: '1px' }}
    />
  );
};

export default WeatherImage;
