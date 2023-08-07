import React, { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = ()=>{

    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}
//React.memo() is used to prevent Meals component to be re-evaluated and re- executed
export default React.memo(Meals);