
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/Login";
import UserInfo from "./pages/userInfo"
<<<<<<< HEAD
import Flights from "./pages/flights";
=======
import History from "./pages/History";
>>>>>>> 8126d84e5220251b43b3f64c3f60188c9edd288a



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
            
        ]
    }
])
export default router

