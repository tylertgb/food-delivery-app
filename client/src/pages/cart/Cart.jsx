import {useStoreContext} from '../../hooks/useStoreContext'
import { RiDeleteBinLine } from "react-icons/ri";
import {assets} from '../../assets/assets'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, food_list, addToCart, removeFromCart, deleteFromCart, clearCart, getCartSubtotal, getCartTotal, deliveryFee, applyPromoCode} = useStoreContext();
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();
  const sumbitPromoCode = (e) => {
    e.preventDefault();
    applyPromoCode(promoCode);
  }
  
  return (
    <div id='cart' className='pb-24 pt-0 bg-white md:gap-12'>
      <div className=''> 
        <h2 className='text-2xl font-bold text-gray-700 mb-6'>Your Cart</h2>
        <div className="grid grid-cols-6 gap-6 md:gap-2 items-center bg-gray-50/60 rounded-tr-2xl rounded-tl-2xl py-4 px-1">
          <p className="text-lg font-medium md:font-semibold text-gray-600">Items</p>
          <p className="text-lg font-medium md:font-semibold text-gray-600">Name</p>
          <p className="text-lg font-medium md:font-semibold text-gray-600">Price</p>
          <p className="hidden md:flex text-lg font-semibold text-gray-600">Quantity</p>
          <p className="text-lg font-medium md:font-semibold text-gray-600">Total</p>
          <p className="text-lg font-medium md:font-semibold text-gray-600">Action</p>
        </div>
        <div className='pt-1 flex flex-col gap-1'>
           {food_list.map((item) => {
            if(cartItems[item._id] > 0){
              return(
                <div className="grid grid-cols-6 items-center gap-4 bg-gray-50/50 border border-gray-50 p-1 rounded-2xl" key={item._id}>
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl" />
                  <h3 className="md:text-lg">{item.name}</h3>
                  <p> GH₵{item.price.toFixed(2)}</p>
                  <p className='hidden md:flex'>{cartItems[item._id]}</p>
                  <p>GH₵{(item.price * cartItems[item._id]).toFixed(2)}</p>

                  <div className='flex  items-center justify-start gap-2'>                   
                    <div className=''>
                      {!cartItems[item._id] ? (
                          <img src={assets.add_icon_white} alt="" onClick={() => addToCart(item._id)} className='w-8' />
                      ) : (
                          <div className='flex items-center gap-2'>
                              <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(item._id)} className='w-8' />
                              <span className='text-gray-600'>{cartItems[item._id]}</span>
                              <img src={assets.add_icon_green} alt="" onClick={() => addToCart(item._id)} className='w-8' />
                          </div>
                      )}
                    </div>
                    <RiDeleteBinLine onClick={() => deleteFromCart(item._id)} size={24} title="Delete" className="hidden md:flex text-red-600 cursor-pointer"/>
                  </div>
                </div>
              );
            }
            return null;
           })}
            </div>

            <div className='my-4'>
              {Object.keys(cartItems).length > 0 && (
              <button title='Clear Cart' onClick={clearCart} className="bg-red-600 text-white py-3 px-6 rounded-xl mt-4">Clear Cart</button>
              )}
            </div>

            <div className='flex flex-col md:flex-row items-start justify-between gap-8 mt-20'>
              <div className='w-full md:w-2/6'>
              <h2 className='text-2xl font-bold text-gray-700 mb-6'>Cart Total</h2>
              <div className='w-full'>
                <div className='flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600'>
                  <p>Subtotal</p>
                  <b>GH₵{getCartSubtotal().toFixed(2)}</b>
                  </div>
                  <div className='flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600'>
                  <p>Delivery Fee</p>
                  <b>GH₵{getCartSubtotal() > 0 ? deliveryFee.toFixed(2) : (0).toFixed(2)}</b>
                  </div>
                  <div className='flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600'>
                  <p>Total</p>
                  <b>
                    GH₵{getCartSubtotal() > 0 
                    ? (getCartTotal() + deliveryFee).toFixed(2) 
                    : (0).toFixed(2)}
                  </b>
                </div>
              </div>

              <button onClick={() => {navigate('/order')}} className="bg-black w-full font-semibold text-white capitalize py-3 px-6 rounded-xl mt-12">Proceed to Checkout</button>
          </div>

          <div className='w-full md:w-2/5'>
              <p className='text-gray-600'>If you have a promo code, enter it here!</p>
              <div className='flex items-center mt-6'>
                <input
                type="text"
                name="code"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
                className='w-full bg-gray-50 focus:outline-0 focus:ring-2 focus:ring-orange-600 border border-gray-100 py-3 px-2 rounded-tr-0 rounded-br-0 rounded-tl-xl rounded-bl-xl'
                placeholder='Promo code'
                />
                <button onClick={sumbitPromoCode} className="bg-black font-semibold text-white capitalize py-3 px-6 rounded-tl-0 rounded-bl-0 rounded-tr-xl rounded-br-xl">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cart