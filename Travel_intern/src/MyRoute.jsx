
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/Login";
import UserInfo from "./pages/userInfo"
import History from "./pages/History";
import Signup from "./pages/Signup";



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
                path:"user",
                element: <Account />,
                children:[
                    {
                        path:"user_info",
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

