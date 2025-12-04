import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

//named export
// export const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>,
//   },
// ])
//default export
 const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading.....</p>,
    children:[
        {
            // 
            index:true,
            element:<Home></Home>,
            loader: () => fetch('./furnitureData.json')
        },
        {
            path:'/products',
            element:<Products></Products>,
        },
        {
            path:'/wishlist',
            element:<Wishlist></Wishlist>,
        },
    ]
  },
//   {
//     path:'*',
//     element:<ErrorPage></ErrorPage>
//   }
  
])

export default router