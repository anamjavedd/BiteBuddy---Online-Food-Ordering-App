import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

  
const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7782697&lng=80.9332155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    return listOfRestaurant.length === 0?(<Shimmer />):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-input" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4.3)
                    setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            

            <div className="restaurant-container">
               { filteredRestaurant.map(restaurant => 
               <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                )}      
            </div>
        </div>
    )
}

export default Body;