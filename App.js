
import React ,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './src/components/Heading';
import Body from './src/components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './src/components/About';
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import { RestaurantMenu } from './src/components/RestaurantMenu';
import appStore from './src/components/appStore';
import { Provider } from 'react-redux';
import Footer from './src/components/Footer';
import Topcart from './src/components/Topcart';

/*const Grocery=lazy(()=>
import("./src/components/Grocery")
)*/

function Applayout() {
  return (
    <Provider store={appStore}>
    <div className='app'>
      <Heading />
      <Outlet />
      <Footer />
     
    </div>
    </Provider>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Body />
            <Topcart />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
