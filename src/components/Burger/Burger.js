import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientsKey => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
        return (
          <BurgerIngredients key={ingredientsKey + i} type={ingredientsKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
