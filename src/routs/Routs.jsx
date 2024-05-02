import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import CardDetails from "../component/cardDetails/CardDetails";
import Error from "../component/error/Error";
import { PiSquareSplitVerticalDuotone } from "react-icons/pi";
import PrivateRoute from "../component/privateRoute/PrivateRoute";
import About from "../component/about/About";
import UserProfile from "../component/privateRoute/UserProfile";
import Contact from "../component/contact/Contact";

const routs= createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
      
        {
            path:'/login',
            element:<Login></Login>
        },
        {
         path: '/register',
         element: <Register></Register>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },

        {
            path:'/cardDetails/:id',
            element:<PrivateRoute>
                <CardDetails></CardDetails>
            </PrivateRoute>,
            loader:()=>fetch('/card.json')
        },
        {
            path:'/userProfile',
            element: <PrivateRoute> 
                <UserProfile></UserProfile>
            </PrivateRoute>
        }
    ]
   } 
]);
export default routs;