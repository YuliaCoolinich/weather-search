import * as services from '../weatherService';
import IWeather from '../../interfaces/IWeather';

const correctCityId = 709930; // Dnipro
const incorrectCityId = 111111;
const DniproWeather: IWeather = {
  weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
  main: {
    temp: -3.21,
    feels_like: -9.51,
    temp_min: -3.21,
    temp_max: -3.21,
    pressure: 1032,
    humidity: 73,
    sea_level: 1032,
    grnd_level: 1014,
  },
  visibility: 10000,
  wind: { speed: 5.97, deg: 326, gust: 10.24 },
  clouds: { all: 84 },
  dt: 1671405722,
};

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Weather Services', () => {
  it('getCityWeather function should return error when invokes with incorrect city id', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,
        json: () => Promise.resolve({ success: false }),
      }),
    ) as jest.Mock;

    expect(async () => await services.getCityWeather(incorrectCityId)).rejects.toThrow();
  });
  it('getCityWeather function should return correct value when invokes with correct city id', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(DniproWeather),
      }),
    ) as jest.Mock;

    expect(async () => await services.getCityWeather(correctCityId)).resolves;
  });
  it('getCityDayForecast function should return error when invokes with incorrect city id', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,
        json: () => Promise.resolve({ success: false }),
      }),
    ) as jest.Mock;

    expect(async () => await services.getCityDayForecast(incorrectCityId)).rejects.toThrow();
  });
  it('getCityDayForecast function should return correct value when invokes with correct city id', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(),
      }),
    ) as jest.Mock;

    expect(async () => await services.getCityDayForecast(correctCityId)).resolves;
  });
});
