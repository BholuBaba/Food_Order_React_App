import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../asserts/meals.jpg';
import HaederCartButton from './HeaderCartButton';

const Header =(props) =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Book your Order Here</h1>
                <HaederCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}> 
                <img src={mealsImage} alt="A table full of deliciour food!"/>
            </div>
        </Fragment>
    );
}
//React.memo() is used to prevent Header component to be re-evaluated and re- executed
//export default Header;
export default React.memo(Header);