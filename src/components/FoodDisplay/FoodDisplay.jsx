import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

function FoodDisplay({category}) {
  const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((food,index)=>{
          if(category==="All" || category===food.category){
            return <FoodItem key={index} id={food._id} name={food.name} price={food.price} description={food.description}  image={food.image}></FoodItem>
          }
         
})}
      </div>
    </div>
  )
}

export default FoodDisplay