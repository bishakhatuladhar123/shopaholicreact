import { Outlet } from "react-router";
import Logo from "../../components/logo/Logo";
import { LuUser, LuUserRound } from "react-icons/lu";

import { AdminSideBar } from "../../components/ui/sidebar/AdminSideBar";
export default function AdminLayout() {
    //auth
    const loggedInUser = {
        name: "Bishakha Tuladhar",
        role: "admin"
    }
    return (
        <>
            <section className="w-full !bg-gray-100 h-screen">
                <header className="!bg-white py-2px-5 w-full shadow flex justify-between dark:bg-gray-900">
                    <div className="flex gap-3 items-center">
                        <Logo className="size-10" />
                        <h2 className="text-2xl font-semibold !text-purple-500 text-shadow-lg dark:bg-purple-100">Admin Dashboard</h2>
                    </div>
                    <div className="flex items-center  !text-gray-900 dark:!text-white gap-3">
                        <div className="relative inline-flex">
                            <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded shadow-sm ">
                                <button type="button" className=" flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 transition-colors  focus:relative hover:cursor-pointer">
                                    <LuUser className="size-4" />
                                    <span className="font-semibold">Bishakha Tuladhar</span>
                                </button>

                            </span>

                            <div role="menu" className="hidden absolute inset-end-0 top-12 z-auto w-56 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                                <div>
                                    <p className="block px-3 py-2 text-sm text-gray-500">Generalb</p>

                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Storefront
                                    </a>

                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Warehouse
                                    </a>

                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Stock
                                    </a>
                                </div>

                                <div>
                                    <p className="block px-3 py-2 text-sm text-gray-500">Actions</p>

                                    <button type="button" className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex w-full gap-3">
                  
                 
                    <AdminSideBar loggedInUser={loggedInUser}/>
                    <section className="w-full bg-gray-200 p-3 mt-3 rounded-md">
                        <Outlet />
                    </section>
                </main>
            </section>
        </>
    );
}