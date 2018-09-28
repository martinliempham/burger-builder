import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BurgerIngredients from './BurgerIngredients';
configure({ adapter: new Adapter() });

describe('BurgerIngredients component', () => {
  it('should exists', () => {
    const wrapper = shallow(<BurgerIngredients />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the <ingredient/>', () => {
    let ingredient = [
      'BreadTop',
      'BreadBottom',
      'Seeds1',
      'Seeds2',
      'Meat',
      'Cheese',
      'Salad',
      'Bacon'
    ];
    const wrapper = shallow(<BurgerIngredients ingredient={ingredient} />);
    expect(wrapper.find(ingredient).children()).to.have.lengthOf(
      ingredient.length
    );
  });
});
