
import {createBrowserRouter,RouterProvider} from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";

const routerData=createBrowserRouter([
    {path:"/",element:<HomePage/>},
    {path:"/forget-password",Component:ForgetPassword},
    {path:"*",element:<NotFound/>}
])
export default function RouterConfig() {
    return (
        <RouterProvider router={routerData}/>
        // <BrowserRouter>
        // <Routes>
        //     <Route path="/" element ={<HomePage/>}></Route>
        //     <Route path="forget-password" Components={ForgetPassword}/>
        // </Routes>
        // </BrowserRouter>
    );
}