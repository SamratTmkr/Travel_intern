import { createBrowserRouter } from "react-router-dom";

import Account from "./pages/Account";
import Home from "./pages/home";
import App from "./App";



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
                path:"account",
                element: <Account />
            },
            
        ]
    }
])
export default router