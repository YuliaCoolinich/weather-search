import React from 'react';
import { shallow } from 'enzyme';
import * as TestIds from '../../../data/testingIds';
import ICard from '../../../interfaces/ICard';
import ICity from '../../../interfaces/ICity';

import CardBoard, { EMPTY_BOARD_NOTIFICATION } from '..';
import Card from '../../Card';

describe('Component: CardBoard', () => {
  it('should render a notification that card list is empty when card list is empty', () => {
    const wrapper = shallow(<CardBoard cards={[]} />);
    expect(wrapper.find({ 'data-testid': TestIds.EMPTY_CARDS_NOTIFICATION }).text()).toBe(EMPTY_BOARD_NOTIFICATION);
  });

  it('should render a card list when card list is not empty', () => {
    const Paris: ICity = {
      coord: { lon: 2.3486, lat: 48.853401 },
      country: 'FR',
      id: 2968815,
      name: 'Paris',
      state: '',
    };
    const Dnipro: ICity = {
      id: 709930,
      name: 'Dnipro',
      state: '',
      country: 'UA',
      coord: {
        lon: 34.98333,
        lat: 48.450001,
      },
    };
    const cards: ICard[] = [
      {
        id: '3214d69c-9754-4544-8f03-09c9802f75bd',
        city: Paris,
        createdAt: 1671399211000,
        updatedAt: 1671399211000,
      },
      {
        id: '52ec59d6-032f-48d7-866d-9e5515930262',
        city: Dnipro,
        createdAt: 1671399017230,
        updatedAt: 1671399211000,
      },
    ];

    const wrapper = shallow(<CardBoard cards={cards} />);
    expect(wrapper.find(Card).length).toBe(2);
  });
});
