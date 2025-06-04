import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
