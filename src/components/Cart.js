import { useSelector } from "react-redux";
import RestaurantSubMenu from "./RestaurantSubMenu";

const CartComponent = () => {

   const cartItems = useSelector(state=>state.cart.items)
   console.log(cartItems);

   const handleClick = () => {
      
   }
     return(
      <div>
        <div>
          <button onClick={handleClick}>Clear All</button>
        </div>
        <div>
          {cartItems.map(item => <RestaurantSubMenu isCart={true} cartItems={item}/>)}
        </div>
      </div>
     )
}

export default CartComponent;