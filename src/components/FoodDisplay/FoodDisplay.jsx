import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  // // Filter food list by category if a category is specified
  // const filteredFoodList = category === "All" 
  //   ? food_list 
  //   : food_list.filter(item => item.category === category);

  return (
    <div className="food-display" id='food-display'>
      <h1>Top Dishes</h1>
      <div className="food-display-list">
        {food_list.map((item, index)=>{
          if(category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

          }


          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
