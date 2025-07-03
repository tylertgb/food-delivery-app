import {useStoreContext} from '../../hooks/useStoreContext'
import { RiDeleteBinLine } from "react-icons/ri";
import {assets} from '../../assets/assets'

const Cart = () => {
  const {cartItems, food_list, addToCart, removeFromCart, deleteFromCart, clearCart} = useStoreContext();
  return (
    <div id='cart' className='py-24 bg-white md:gap-12'>
      <div>
        <div className="grid grid-cols-6 gap-2 items-center bg-gray-50 rounded-tr-2xl rounded-tl-2xl py-4 px-1">
          <p className="text-lg font-semibold text-gray-600">Items</p>
          <p className="text-lg font-semibold text-gray-600">Name</p>
          <p className="text-lg font-semibold text-gray-600">Price</p>
          <p className="text-lg font-semibold text-gray-600">Quantity</p>
          <p className="text-lg font-semibold text-gray-600">Total</p>
          <p className="text-lg font-semibold text-gray-600">Action</p>
        </div>
        <div className='pt-4 flex flex-col gap-4'>
           {food_list.map((item) => {
            if(cartItems[item._id] > 0){
              return(
                <div className="grid grid-cols-6 items-center gap-4 bg-gray-50 p-1 border border-gray-100 rounded-2xl">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl" />
                  <h3 className="text-lg">{item.name}</h3>
                  <p> ${item.price.toFixed(2)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price.toFixed(2)*cartItems[item._id]}</p>

                  <div className='flex items-center gap-4'>
                  <RiDeleteBinLine onClick={() => deleteFromCart(item._id)} size={24} title="Delete" className="text-red-600 cursor-pointer"/>
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
                </div>
                </div>
              )
            }
          })}
        </div>

        <div className='my-4'>
          {Object.keys(cartItems).length > 0 && (
            <button title='Clear Cart' onClick={clearCart} className="bg-red-600 text-white py-3 px-6 rounded-xl mt-4">Clear Cart</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart