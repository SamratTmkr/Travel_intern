
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/Login";
import Histroy from "./pages/histroy";
import UserInfo from "./pages/userInfo"



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
                        path:"user_hstry",
                        element:<Histroy/>
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

