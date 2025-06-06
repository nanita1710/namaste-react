import { useEffect, useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithLabel =  withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log(filteredRestaurant);
  

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>Looks like you are offline, please check your internet connection.</h1>;

  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black rounded-md p-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          className="px-4 mx-4 py-1 bg-purple-200 rounded-md"
            onClick={() => {
              let newList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(newList);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
         <button
          className="bg-slate-300 px-4 py-1 rounded-md m-4"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
            // console.log(listOfRestaurant);
          }}
        >
          Top rated restaurants
        </button>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res?.info?.id}>
              {!res.info.promoted ? <RestaurantCardWithLabel resData={res?.info} /> : <RestaurantCard resData={res?.info} />}
            </Link>
          );
        })}

        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
