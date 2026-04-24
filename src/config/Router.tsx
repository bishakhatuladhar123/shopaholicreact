import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserList from "../pages/admin/user/UserList";
import AdminLayout from "../pages/layouts/AdminLayout";
import UserLayout from "../pages/layouts/UserLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile";
import UserRegister from "../pages/admin/user/UserRegister";
import ResetPassword from "../pages/auth/ResetPassword";
import UserDetail from "../pages/admin/user/UserDetail";

const routerData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/ForgetPassword", Component: ForgetPassword },
    { path: "/ResetPassword", Component: ResetPassword },
    {
        path: "/admin", element: <AdminLayout />, children: [
            { index: true, Component: AdminDashboard },
            { path: "UserList", element: <UserList /> },
            { path:"user/UserRegister",element :<UserRegister/>},
            {path:"user/:username/detail",element:<UserDetail/>},
            {path:"user/:id",element:<>User Edit Form Display</>},
            {path:"*", Component:NotFound}
        ]
    },
    {
        path: "/user", element: <UserLayout />, children: [
            { index: true, element: <UserDashboard/> },
            { path: "profile", element: <UserProfile /> },
        ]
    },
    { path: "*", element: <NotFound /> }
]);

export default function RouterConfig() {
    return (
        <RouterProvider router={routerData} />
    );
}