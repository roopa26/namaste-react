const RestaurantSubMenu = ({menu}) =>{

    const {menuName,items} = menu || { menuName: '', items: [] };
console.log(items)
    return(
        <div className="overflow-scroll h-[500px]">
            <h4 className="text-[1.5rem]">{menuName}</h4>
                {items?.map((item) => (<div key={item.item.id} className="flex mb-4 gap-4 w-full">
                                        <div className="w-[50%] h-[10rem]">
                                            <img className="object-contain w-full h-full ml-0" src={item.item.item_image_url}></img>
                                        </div>
                                        <div className="flex flex-col items-start ml-8">
                                        <h4>{item.item.name} </h4>
                                        <p>{item.item.max_price} AED</p>
                                        <p>{item.item.desc}</p>
                                        </div>
                                      </div>))} 
                
        </div>
    )
}

export default RestaurantSubMenu;