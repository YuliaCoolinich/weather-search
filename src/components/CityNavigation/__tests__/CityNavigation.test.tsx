import React from 'react';
import { shallow } from 'enzyme';
import * as TestIds from '../../../data/testingIds';

import CityNavigation from '..';

describe('Component: CityNavigation', () => {
  it('should render an enabled button component with correct value', () => {
    const addCardMocked = jest.fn();
    const wrapper = shallow(<CityNavigation addCard={addCardMocked} />);
    wrapper.find({ 'data-testid': TestIds.BUTTON_SUBMIT }).props();

    expect(wrapper.find({ 'data-testid': TestIds.BUTTON_SUBMIT }).text()).toBe('GO');
  });
});
