// src/routes/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
import PlaceOrder from '../pages/order/PlaceOrder';

export const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart/> },
      { path: 'order', element: <PlaceOrder /> },
    ],
    },
    {path: 'cart', element: <Cart/>},
    {path: 'order', element: <PlaceOrder/>}
]);