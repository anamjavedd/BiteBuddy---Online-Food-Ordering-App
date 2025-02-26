import {CDN_URL}
 from "../utils/constant";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    }=resData?.info

    const deliveryTime = resData?.info?.sla?.deliveryTime; // Access delivery time safely

    return(
        <div className="bg-card-color m-[38px] p-4 w-[300px]"> 
        <img src={CDN_URL+cloudinaryImageId} className=""></img>
        <div className="my-3">
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="text-white">{cuisines.join(", ")}</h3>
            <h3 className="text-white">{avgRating} stars</h3>
            <h3 className="text-white">{costForTwo}</h3>
            <h3 className="text-white">{deliveryTime} minutes</h3>
        </div>
        </div>
    )
}

export default RestaurantCard;


    //props passing

    // const RestaurantCard = (props) =>{
    //   {resName, cuisine}=props
    //     return(
    //         <div className="res-card"> 
    //         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"></img>
    //         <h2>{resName}</h2>
    //         <h3>{cuisine}</h3>
    //         <h3>4.4 stars</h3>
    //         <h3>35 minutes</h3>
    //         </div>
    //     )
    // }

     //props passing -- destructuring on the go

    // const RestaurantCard = ( {resName, cuisine}) =>{
    //     return(
    //         <div className="res-card"> 
    //         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"></img>
    //         <h2>{resName}</h2>
    //         <h3>{cuisine}</h3>
    //         <h3>4.4 stars</h3>
    //         <h3>35 minutes</h3>
    //         </div>
    //     )
    // }
