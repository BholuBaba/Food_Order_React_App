import React, { useMemo } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'NoorJahan Rice with 2 Chicken Leg Pieces',
    price: 120,
  },
  {
    id: 'm2',
    name: 'Beef Biryani',
    description: 'Basmati Rice with 3 Beef Pieces',
    price: 100,
  },
  {
    id: 'm3',
    name: 'Palaw',
    description: 'Basmati Rice with 250 gm Beef Bowl',
    price: 80,
  },
  {
    id: 'm4',
    name: 'Naan Roti',
    description: 'Naan Roti with 250 gm Nehari Shorwa',
    price: 60,
  },
  {
    id: 'm5',
    name: 'Dum Biryani',
    description: 'Aflatoon Rice with 3 Chicken Leg Pieces',
    price: 180,
  },
  {
    id: 'm6',
    name: 'Chicken Manchurian',
    description: 'Desi Chicken 500gm with Dhaniya Patti ki Chatni',
    price: 200,
  },
];

const AvailableMeals = () => {
  //useMemo(()=>{},[]) is used for performance optimization and to avoid unecessary re-creation of DUMMY_MEALS array
  // every time whenever the Component AvailableMeals re-renders.
  const mealsList = useMemo(() => {
    return DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }, [DUMMY_MEALS])  
  //we cannot use useCallback() instead of useMemo() because "mealsList" is not function it is a data.

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
//React.memo() is used to prevent AvailableMeals component to be re-evaluated and re- executed
export default AvailableMeals;