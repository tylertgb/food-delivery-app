import React, { useState } from "react";
import { useStoreContext } from "../../hooks/useStoreContext";

const PlaceOrder = () => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
    instructions: "",
  });
  const { getCartTotal, getCartSubtotal, deliveryFee } = useStoreContext();

  const handleChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-24">
      {/* Delivery Information */}
      <div className="flex-1 ">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Delivery Information
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="firstname">
                First Name
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="text"
                id="firstname"
                name="firstname"
                value={deliveryInfo.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="text"
                id="lastname"
                name="lastname"
                value={deliveryInfo.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="font-normal text-gray-600 mb-1" htmlFor="address">
              Address
            </label>
            <input
              className="w-full border border-gray-100 rounded-lg px-3 py-2"
              type="text"
              id="address"
              name="address"
              value={deliveryInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="city">
                City/Town
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="text"
                id="city"
                name="city"
                value={deliveryInfo.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="postalCode">
                Postal Code
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="text"
                id="postalCode"
                name="postalCode"
                value={deliveryInfo.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="tel"
                id="phone"
                name="phone"
                value={deliveryInfo.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-normal text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-100 rounded-lg px-3 py-2"
                type="email"
                id="email"
                name="email"
                value={deliveryInfo.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-normal text-gray-600 mb-1" htmlFor="instructions">
              Delivery Instructions
            </label>
            <textarea
              className="w-full border border-gray-100 rounded-lg px-3 py-2"
              id="instructions"
              name="instructions"
              value={deliveryInfo.instructions}
              onChange={handleChange}
              rows={2}
            />
          </div>
        </form>
      </div>
      {/* Cart Totals */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Cart Total</h2>
        <div className="w-full">
          <div className="flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600">
            <p>Subtotal</p>
            <b>${getCartSubtotal().toFixed(2)}</b>
          </div>
          <div className="flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600">
            <p>Delivery Fee</p>
            <b>${deliveryFee.toFixed(2)}</b>
          </div>
          <div className="flex items-center justify-between w-full border-b border-gray-100 py-2 text-gray-600">
            <p>Total</p>
            <b>${getCartTotal().toFixed(2)}</b>
          </div>
        </div>

        <button className="bg-black w-full font-semibold text-white capitalize py-3 px-6 rounded-xl mt-12">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
