import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

//Local State Variable - super powerful variable

const [listOfRestaurants,setListOfRestaurants] = useState([])
const [filteredRestaurant,setFilteredRestaurant] = useState([])

const [searchText,setSearchText] = useState("");

useEffect(() => {
    console.log("useEffect called");
    fetchData()
},[])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.958610308999955&lng=77.70562203200258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();

    console.log(json);

    //optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

// conditional rendering
// if(listOfRestaurants.length === 0){
//     return <Shimmer />
// }

const onlineStatus = useOnlineStatus()

if(onlineStatus === false){
    return <h1>Looks like you are Offline!! Please check your Internet Connection</h1>
}


console.log("body rendered");

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
              
              <div className="search">
                <input 
                type="text" 
                className="search-box" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                onClick={() => {
                    // filter the restaurant cards and update the UI
                    // SEARCHtEXT
                    console.log(searchText);

                    const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    setFilteredRestaurant(filteredList)
                    
                }}
                >Search</button>
              </div>
              
              <button 
              className="filter-btn"
              onClick={() => {
                // fILTER lOGIC HERE
 
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                )
                setListOfRestaurants(filteredList)
                console.log(filteredList);
                
              }
              }
              >Top Rated Restaurants</button>
            </div>
            
            
            <div className="res-container">
        
            { 
              
            filteredRestaurant.map(restaurant => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }><RestaurantCard resData={restaurant} /></Link>
            ))

            }
               
            </div>

        </div>
    )
}

export default Body;