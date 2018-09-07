import React from 'react';
import BurgerBuilder from './BurgerBuilder.js';
import Renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({ adapter: new Adapter() });

describe('BurgerBuilder component', () => {
  test('it at least 2 children', () => {
    const component = shallow(<BurgerBuilder />);
    expect(component.children().length).toBeGreaterThanOrEqual(2);
  });

  test('it renders a Burger component', () => {
    const component = shallow(<BurgerBuilder />);
    expect(component.find(Burger).exists()).toBe(true);
  });

  test('it renders BuildControls component', () => {
    const component = shallow(<BurgerBuilder />);
    expect(component.find(BuildControls).exists()).toBe(true);
  });
});
