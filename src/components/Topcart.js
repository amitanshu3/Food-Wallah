/*import { useState,useEffect } from "react";
import Shimmerui from "./Shimmerui";
import { API_URL } from "../Util/Constants";
import Resturantcard from "./Resturantcard";



const Topcart=()=>{
    const [listofRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchdata();
      }, []);
    
    const fetchdata = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       
      };


      if(listofRestaurant.length==0)
  {
   // return <h1>Loading......</h1>//instead of this you can display dummy images
   return (<div>

   < Shimmerui />
   </div>
  )}
  return (
    
    <div className='body'>
        <h1 className="text-center text-lg">Best Restaurants</h1>
      <div className='filter flex'>
       
      <div className='res-container flex flex-wrap justify-evenly  '>
        {listofRestaurant.map((restaurant, index) => (
          <Resturantcard key={index} resData={restaurant} />
        ))}
        </div>




        </div>
        
      </div>
    
  );

}
export default Topcart;*/


// Topcart.js
import React, { useState, useEffect } from "react";
import Shimmerui from "./Shimmerui";
import { API_URL } from "../Util/Constants";
import Resturantcard from "./Resturantcard";
import Search from "./Search";

const Topcart = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleSearch = (searchText) => {
    const filteredRestaurant = listofRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  if (listofRestaurant.length === 0) {
    return <Shimmerui />;
  }

  return (
    <div className="body">
      <Search onSearch={handleSearch} />

      <h2 className="text-3xl  text-center font-extrabold mb-8">Top Restaurants</h2>
      <div className="res-container flex flex-wrap justify-evenly">
        {filteredRestaurants.map((restaurant, index) => (
          <Resturantcard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Topcart;
