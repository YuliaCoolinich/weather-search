import * as React from 'react';
import Image from '../base/Image';

const weatherWidth = 100;
const altTextDefault = 'weather icon';
const qualityParam = '@2x';

export interface IWeatherImage {
  weatherIcon?: string;
  weatherName?: string;
}

const WeatherImage = (props: IWeatherImage): JSX.Element => {
  const { weatherIcon, weatherName } = props;
  const altText = weatherName ? `${weatherName} ${altTextDefault}` : altTextDefault;

  return (
    <>
      {weatherIcon ? (
        <Image
          iconCode={weatherIcon}
          width={weatherWidth}
          apiUrl={process.env.REACT_APP_WEATHER_ICON_API_URL}
          altText={altText}
          qualityParam={qualityParam}
        />
      ) : null}
    </>
  );
};

export default WeatherImage;
