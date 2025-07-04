import { assets } from "../../assets/assets";
import { useStoreContext } from "../../hooks/useStoreContext";
// eslint-disable-next-line
import { motion } from "framer-motion";

//Here in the cart page the items added to cart, when i use the remove from cart for a particular item, when i subtract to 0 and beyound it remove the other items added. Why it is this happening?

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useStoreContext();
  return (
    <motion.div
      key={id}
      className="flex flex-col items-start shadow rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="overflow-hidden rounded-2xl relative">
        <div className="z-10 absolute bottom-0 w-full h-20 bg-gradient-to-t from-orange-400 to-transparent">
          <span className="h-10 w-20 rounded-tr-2xl rounded-br-2xl flex items-center justify-center bg-white text-black text-sm font-semibold">
            GH₵{price.toFixed(2)}
          </span>
        </div>
        <img
          src={image}
          alt={name}
          className="z-0 w-full h-full rounded-2xl object-cover hover:scale-110 duration-500 "
        />
        <div className="absolute top-0 right-3 bg-white rounded-full flex items-center p-1 mt-3">
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              alt=""
              onClick={() => addToCart(id)}
              className="w-8"
            />
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={assets.remove_icon_red}
                alt=""
                onClick={() => removeFromCart(id)}
                className="w-8"
              />
              <span className="text-gray-600">{cartItems[id]}</span>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => addToCart(id)}
                className="w-8"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">{name}</p>
          <img src={assets.rating_starts} alt="rate" className="w-20" />
        </div>
        <p className="text-gray-600">{description}</p>
        <p className="text-xl font-semibold text-orange-500">
          GH₵{price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default FoodItem;
