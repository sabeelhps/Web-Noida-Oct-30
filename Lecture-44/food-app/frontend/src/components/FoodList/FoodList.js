import React from 'react';
import Food from '../Food/Food';

const FoodList = (props) => {
  return (
      <ul>
          {
              props.foods.map((food) => {
                  return <Food
                      key={food._id}
                      name={food.name}
                      price={food.price}
                      desc={food.desc}
                  />
              })
          }
    </ul>
  )
}

export default FoodList;