/*import React, { useEffect, useState } from "react";
import Resturantcard from "./Resturantcard";
import resList from "../Util/Mockdata";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  //console.log("listofRestaurant:", listofRestaurant);
  const [searchTxt,setSearchTxt]=useState("");
  const[filteredresturant,setfilteredresturant]=useState([]);

  const handleFilterClick = () => {
    const filterList = listofRestaurant.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(filterList);
  };

   useEffect(()=>{
        fetchdata();
   },[])
  const  fetchdata=async()=>{
       const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       const json=await data.json();
       //optional chaining
       setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       setfilteredresturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

  }
  //this is called shimerui
  if(listofRestaurant.length==0)
  {
   // return <h1>Loading......</h1>//instead of this you can display dummy images
   return (<div className="dummy-container" >
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
         <div className="dummy-card"></div>
   </div>)
  }

  return (
    <div className='body'>
      <div className='filter-btn'>
        <div className="searchbtn">
          <input   className="inputbox"  type="text" value={searchTxt}   onChange={(e)=>{
              setSearchTxt(e.target.value)
          }}/>
           <button  className="btn"onClick={
          ()=>{
             const filteredrestaurant =listofRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
             setfilteredresturant(filteredrestaurant)
            }}>search</button> </div>
        <button className="btn" onClick={handleFilterClick}>
          Click here to see top-rated restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredresturant.map((restaurant, index) => (
          <Resturantcard key={index} resData={restaurant} />
        ))}


                
      </div>
    </div>
  );
};

export default Body;*/



//this code is perfectlt structured by chatgpt
/*import React, { useEffect, useState } from "react";
import Resturantcard, { withPromotedLabel } from "./Resturantcard";
import useOnlineStatus from "./useOnlineStatus";
import Shimmerui from "./Shimmerui";
import { API_URL } from "../Util/Constants";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  const RestaurantCardPromoted=withPromotedLabel(Resturantcard)
  
  const handleFilterClick = () => {
    const filterList = listofRestaurant.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filterList);
  };

  const handleSearch = () => {
    const filteredRestaurant = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
    setFilteredRestaurants(filteredRestaurant);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  const onlinestatus=useOnlineStatus();

  if(onlinestatus==false)
  {
    return (
    <h1>Soory you are offline</h1>
 
    )
  }

  //this is called shimer ui
  if(listofRestaurant.length==0)
  {
   // return <h1>Loading......</h1>//instead of this you can display dummy images
   return (<div>

   < Shimmerui />
   </div>
  )}






  return (
    <div className='body'>
      <div className='filter flex'>
        <div className="search m-4 p-4 ">
          <input type="text"
            className="border  border-solid border-black"
            
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
            onKeyDown={handleEnterKeyPress}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleButtonClick}>
            Search
          </button>
        </div>
        <div  className=" m-4 p-4 flex items-center" >
        

        <button className="py-4 px-4 bg-gray-100 rounded-lg" onClick={handleFilterClick}>
          top-rated restaurants
        </button>
        </div>
        </div>
      
      <div className='res-container flex flex-wrap justify-evenly  '>
        {filteredRestaurants.map((restaurant, index) => (
          <Resturantcard key={index} resData={restaurant} />
        ))}




        </div>
        
      </div>
    
  );
};

export default Body;*/


// Body.js
import React, { useEffect, useState } from "react";
import Resturantcard from "./Resturantcard";
import useOnlineStatus from "./useOnlineStatus";
import Shimmerui from "./Shimmerui";
import Search from "./Search";
import { API_URL } from "../Util/Constants";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlinestatus = useOnlineStatus();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleSearch = (searchText) => {
    const filteredRestaurant = listofRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  if (onlinestatus === false) {
    return <h1>Sorry, you are offline</h1>;
  }

  if (listofRestaurant.length === 0) {
    return <Shimmerui />;
  }

  return (
   
    <div className="body">
      
      <Search onSearch={handleSearch} />
      <h2 className="text-3xl  text-center font-extrabold mb-8 my-3"> Restaurants</h2>

      <div className="res-container flex flex-wrap justify-evenly">
        {filteredRestaurants.map((restaurant, index) => (
          <Resturantcard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;


