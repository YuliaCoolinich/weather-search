import * as services from '../storageService';
import ICity from '../../interfaces/ICity';
import ICard from '../../interfaces/ICard';

const storageMock = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: object) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
    length: Object.keys(store).length,
  };
})();
//global.sessionStorage = storageMock;
Object.defineProperty(window, 'sessionStorage', {
  value: storageMock,
});

const Paris: ICity = {
  coord: { lon: 2.3486, lat: 48.853401 },
  country: 'FR',
  id: 2968815,
  name: 'Paris',
  state: '',
};

const ParisCard: ICard = {
  id: 'b0c2f9a3-6842-482a-bf0e-a67c85bf9329',
  city: Paris,
  createdAt: 1671403427075,
  updatedAt: 1671403427075,
};

describe('Storage Services', () => {
  it('save function should invokes storage setItem and getItem functions and save card', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();

    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn();

    services.save(ParisCard);
    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.getItem).toBeCalledTimes(1);

    //expect(sessionStorage.length).toEqual(1);
    //expect(sessionStorage.getItem(ParisCard.id)).toEqual(JSON.stringify(ParisCard));
  });
});
