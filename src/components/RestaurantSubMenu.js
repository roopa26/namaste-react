import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ item, isCart, handleClick }) => (
  <div key={item.id} className="mb-6 relative flex w-[60rem]">
    <div className="h-40 w-[180px] rounded-md bg-zinc-600 border-gray-700">
      <img className="object-cover rounded-md w-[100%] h-[100%]" src={item.item_image_url}></img>
    </div>
    <div className="flex flex-col items-start justify-center p-2 ml-6">
      <h4>{item.name}</h4>
      <p>{item.max_price} AED</p>
      <p className="text-wrap">{item.desc}</p>
    </div>
    {!isCart && (
      <div className="absolute top-2 left-[7.5%]">
        <button className="w-12 h-8 rounded-lg bg-black text-white" onClick={() => handleClick(item)}>
          Add+
        </button>
      </div>
    )}
  </div>
);

const RestaurantSubMenu = ({ menu = {}, isCart, cartItems = {} }) => {
  let { menuName = '', items = [] } = menu;

  const item = isCart ? cartItems : null;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  // If isCart, render individual item and center it
  if (isCart && item) {
    return (
      <div className="flex justify-center items-center h-full">
        <MenuItem key={item.id} item={item} isCart={isCart} />
      </div>
    );
  }

  // Regular rendering for the menu items
  return (
    <div className="ml-6">
      <h4 className="text-[1.5rem]">{menuName}</h4>
      {Array.isArray(items) &&
        items.map((item) => (
          <MenuItem key={item.item.id} item={item.item} isCart={isCart} handleClick={handleClick} />
        ))}
    </div>
  );
};

export default RestaurantSubMenu;
