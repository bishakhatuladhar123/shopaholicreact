import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserList from "../pages/admin/user/UserList";
import AdminLayout from "../pages/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import UserLayout from "../pages/layouts/UserLayout";
import UserProfile from "../pages/user/UserProfile";
import UserRegister from "../pages/admin/user/UserRegister";

const routerData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", Component: ForgetPassword },
    {
        path: "/admin", element: <AdminLayout />, children: [
            { index: true, Component: AdminDashboard },
            { path: "users", element: <UserList /> },
            {path:"user/UserRegister",element :<UserRegister/>},
        ]
    },
    {
        path: "/user", element: <UserLayout />, children: [
            { index: true, Component: UserDashboard },
            { path: "profile", element: <UserProfile /> },
        ]
    },
    { path: "*", element: <NotFound /> }
])
export default function RouterConfig() {
    return (
        <RouterProvider router={routerData} />
    );
}