import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import burger from './Burger';
configure({ adapter: new Adapter() });

describe('Burger component', () => {
  test('the component exists', () => {
    const props = {
      ingredients: {
        salad: 0,
        bacon: 5,
        cheese: 0,
        meat: 0
      }
    };
    const component = shallow(<burger {...props} />);
    debugger;
    expect(component.exists()).toBe(true);
  });
});
