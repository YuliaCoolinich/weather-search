export default interface IWeather {
  weather: {
    id: number; //  Weather condition id
    main: string; //  Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; //  Weather condition within the group.
    icon: string; //  Weather icon id
  };
  main?: {
    temp: number;
    feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather.
    temp_min: number; // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_max: number; // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: number; // in %
    sea_level?: number; // Atmospheric pressure on the sea level, hPa
    grnd_level?: number; // Atmospheric pressure on the ground level, hPa
  };
  wind?: {
    speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number; // Wind direction, degrees (meteorological)
    gust: number; // Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  };
  rain?: {
    '1h'?: number; // Rain volume for the last 1 hour, mm
    '3h'?: number; // Rain volume for the last 3 hour, mm
  };
  clouds?: {
    all?: number; // Cloudiness, %
  };
  snow?: {
    '1h'?: number; // Snow volume for the last 1 hour, mm
    '3h'?: number; // Snow volume for the last 3 hour, mm
  };
  visibility: number; //  Visibility, meter. The maximum value of the visibility is 10km
  dt: number; //  Time of data calculation, unix, UTC
}
