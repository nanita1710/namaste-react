import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] =  useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            // console.log(listOfRestaurant);
          }
        }
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((res) => {
          return <RestaurantCard resData={res} key={res?.id} />;
        })}

        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
