import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () =>{

     const[resInfo, setResInfo] = useState(null);
     const {resId} = useParams();
     //const[params] = useParams();
     //could alse be written like const[resId] = useParams();
    

useEffect(()=>{
  fetchData();
},[]);

const fetchData = async() =>{
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
}
//if you dont handle the state variable null condition on first render of the component then error will be there because on the first render
//it will find resInfo to be null and then suddenly error, it will not fetch for the data and go for second render
if(resInfo ===  null){
    return <Shimmer />;
}

const {name,avgRating,areaName,city,costForTwoMessage,locality} = resInfo?.data?.cards[2]?.card?.card?.info
const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
console.log(itemCards);
return(
    <div>
        <h1>{name} - {locality},{areaName},{city}.</h1>
        <h3>Rating:{avgRating}</h3>
        <h3>Cost for Two:{costForTwoMessage}</h3>
        <ul>
            {itemCards.map((item)=><li key={item.card.info.id}><h1>{item.card.info.name}</h1>
                <ul>
                <li>Category:{item.card.info.category}</li>
                <li>Category:{item.card.info.description}</li>
                <li>Rating:{item.card.info.ratings.aggregatedRating.rating}</li>
                </ul>
            </li>)}
        </ul>
    </div>
);
}

export default RestaurantMenu;