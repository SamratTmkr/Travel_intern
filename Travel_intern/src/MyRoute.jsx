
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/Login";
import UserInfo from "./pages/userInfo"

import Flights from "./pages/flights";

import History from "./pages/History";
import Stories from "./pages/stories";
import Signup from "./pages/Signup";
import Hotel from "./pages/hotel";




const router = createBrowserRouter ([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"",
                element: <Home />
            },
            {
                path:"/flights",
                element: <Flights />
            },
            {
                path:"/stories",
                element: <Stories />
            },
            {
                path:"/stories",
                element: <Stories />
            },
            {
                path:"/hotels",
                element: <Hotel />
            },
           
            {
                path:"/user/user_info",
                element: <Account />,
                children:[
                    {
                        path:"",
                        element:<UserInfo/>
                    },
                    {
                        path:"user_history",
                        element:<History/>
                    },
                ]
            },
           
            {
                path:"login",
                element: <Login />
            },
            {
                path:"signup",
                element: <Signup />
            },
            
        ]
    }
])
export default router

