import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import classes from "./Burger.css";

const burger = (props) => {
    const transformedIngridients = Object.keys(props.ingridients)
        .map(ingKey => {
            return [...Array(props.ingridients[ingKey])].map((_, index)=> {
                return <BurgerIngridient key={ingKey + index} type={ingKey} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default burger;