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
            <div className="flex gap-16 text-black items-center mb-3">
                <div className="mx-10">
                    <input type="text" className="border border-font-color p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 hover:border-gray-600" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="border-2 border-font bg-font text-white rounded-2xl text-lg p-2 ml-5" onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="border-2 border-font bg-font text-white rounded-2xl text-lg p-2"
                onClick={()=>{
                    const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4.3)
                    setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            

            <div className="flex flex-wrap">
               { filteredRestaurant.map(restaurant => 
               <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                )}      
            </div>
        </div>
    )
}

export default Body;