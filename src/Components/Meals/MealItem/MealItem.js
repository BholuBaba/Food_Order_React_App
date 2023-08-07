import React, { useContext, useCallback } from 'react';
import CartContext from '../../../Store/CartContext';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs: ${props.price.toFixed(2)}`;
  //UseCallback() is used to stop the function to re-create every time whenever MealItem Component re-renders
  const addToCartHandler = useCallback((amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }, [])
  //we cannot use useMenmo() instead of useCallback() because "addToCartHandler" is not data it is a function.

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;