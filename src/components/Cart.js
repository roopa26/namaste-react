import { useSelector } from "react-redux";
import RestaurantSubMenu from "./RestaurantSubMenu";

const CartComponent = () => {

   const cartItems = useSelector(state=>state.cart.items)
   console.log(cartItems);
     return(
      <div>
        <div>

        </div>
        <div>
      {cartItems.map(item => <RestaurantSubMenu isCart={true} cartItems={item}/>)}
      </div>
      </div>
     )
}

export default CartComponent;