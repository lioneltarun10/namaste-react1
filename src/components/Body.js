import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import User from "./User";

const Body = () => {

//Local State Variable - super powerful variable

const [listOfRestaurants,setListOfRestaurants] = useState([])
const [filteredRestaurant,setFilteredRestaurant] = useState([])

const [searchText,setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

useEffect(() => {
    // console.log("useEffect called");
    fetchData()
},[])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.958610308999955&lng=77.70562203200258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();

    // console.log(json);

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

const {loggedInUser,setUserName} = useContext(UserContext)


// console.log("body rendered");

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
              
              <div className="m-4 p-4">
                <input 
                data-testid = "searchInput"
                type="text" 
                className="border border-solid border-black" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                onClick={() => {
                    // filter the restaurant cards and update the UI
                    // SEARCHtEXT
                    console.log(searchText);

                    const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    setFilteredRestaurant(filteredList)
                    
                }}
                >Search</button>
              </div>

              <div className="m-4 p-4 flex items-center">
              <button 
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                // fILTER lOGIC HERE
 
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                )
                setFilteredRestaurant(filteredList)
                console.log(filteredList);
                
              }
              }
              >Top Rated Restaurants</button>
              </div>


              <div className="m-4 p-4 flex items-center">
              <label>UserName : </label>
              <input className="border border-black p-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser} />
              
              </div>

            </div>
            
            
            <div className="flex flex-wrap">
        
            { 
              
            filteredRestaurant.map(restaurant => (
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id }>

                {/* if the restaurant is promoted, then add a promoted label to it */}
                
                {
                  restaurant.info.avgRating > 4.5? 
                   <RestaurantCardPromoted resData={restaurant} /> 
                   : 
                   <RestaurantCard resData={restaurant} />
                   
                }
                
                
            </Link>
            ))

            }
               
            </div>

        </div>
    )
}

export default Body;