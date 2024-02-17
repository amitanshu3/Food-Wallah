/*import { useDispatch, useSelector } from "react-redux";
import Cartlist from "./Cartlist";

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);
    // Log the entire Redux store
  // console.log(cartItems);
  if(cartItems.length==0)
  return(
 <h1>Cart Is Empty</h1>
)

   return (
      <div className='res-container flex flex-wrap justify-evenly'>
         {cartItems.map((item, index) => (
            <Cartlist key={index} info={item} />
            
         ))}
      </div>
   );
};
export default Cart;*/



import { useDispatch, useSelector } from "react-redux";
import Cartlist from "./Cartlist";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handaleClearCart=()=>{
   dispatch(clearCart());
  }
  // Check if the cart is empty
  if (cartItems.length === 0)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-gray-800">Your Cart Is Empty</h1>
      </div>
    </div>
  );


  return (
    <div>
      <div class="flex justify-center">
  <button onClick={handaleClearCart} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline">
    Clear Cart
  </button>
</div>


      <h1 className="text-3xl font-semibold mb-4 ml-3 ">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cartItems.map((item, index) => (
          <Cartlist key={index} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
