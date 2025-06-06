import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) =>{
    return (
        <div>
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
            <div>
                <ItemsList items={data.itemCards}/>
            </div>
            </div>
            
        </div>
    )
}

export default RestaurantCategory;