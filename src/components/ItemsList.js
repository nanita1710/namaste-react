import { CDN_URL } from "../utils/contants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="p-2 border-b border-gray-200 text-left flex justify-between"
          >
            <div className="w-10/12 p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold py-1">
                  {item.card.info.name}
                </span>
                <span className="text-gray-500">
                  ₹{item.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 p-4">
              <div className="absolute">
                <button className="p-2 bg-black text-white rounded-lg shadow-lg m-auto">
                  Add+
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className=" rounded-lg"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
