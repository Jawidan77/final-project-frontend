import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Discover a world of flavors with our carefully crafted menu! From savory classics to innovative creations, every item is made with the freshest ingredients and a passion for great taste. Whether you're in the mood for a hearty meal, a light snack, or something sweet, our menu offers something to satisfy every craving. Explore our selection and find your next favorite dish!</p>
        <div className="explore-menu-list">
           {menu_list.map((item, index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>  
                </div>
            )
           })} 
        </div>
      
    </div>
  )
}

export default ExploreMenu
