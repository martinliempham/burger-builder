import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BurgerIngredients from './BurgerIngredients';
configure({ adapter: new Adapter() });

describe('BurgerIngredients component', () => {
  test('the component exists', () => {
    const component = shallow(<BurgerIngredients />);
    expect(component.exists()).toBe(true);
  });

  test('it renders the correct amount of ingredients', () => {
    const ingredientType = 'bacon';

    const component = shallow(
      <BurgerIngredients key={1} type={ingredientType} />
    );

    expect(component.find('bacon').length).toBe(props.ingredient.bacon);
  });

  test('it renders the bread', () => {});
});
