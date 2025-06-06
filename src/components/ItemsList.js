const ItemsList = ({items}) =>{
    console.log(items);
    return (
        <div>
            <ul className="list-none">
                {items.map((item) => (
                    <li key={item.card.info.id} className="p-2 border-b border-gray-200 text-left">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold py-1">{item.card.info.name}</span>
                            <span className="text-gray-500">₹{item.card.info.price / 100}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.card.info.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ItemsList;