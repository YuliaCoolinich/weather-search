import * as services from '../cardService';

const correctCityId = 709930; // Dnipro
const incorrectCityId = 111111;

describe('Card Services', () => {
  it('getCity function should return error when invokes with incorrect city id', () => {
    expect(async () => await services.getCity(incorrectCityId)).rejects.toThrow(services.NOT_FOUND_ERROR_MESSAGE);
  });
  it('getCity function should return correct value when invokes with correct city id', () => {
    expect(async () => await services.getCity(correctCityId)).resolves;
  });
});
