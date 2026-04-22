import { Link, NavLink } from "react-router";

export const AdminSideBar = ({ loggedInUser }) => {
    return (
        <aside className="w-64">
            <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
                <div className="p-4 ">
                    <ul className=" space-y-1">
                        {loggedInUser && loggedInUser.role === "admin" ? (
                            <li>
                                <NavLink to="/admin" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" end>
                                    Dashboard
                                </NavLink>
                            </li>
                        ) : (
                            <></>
                        )}
                        <li>
                            <NavLink to="/admin/food-items" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" end >
                                Food Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to ="/admin/Users" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" end>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/admin/Orders" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" end>Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/admin/Inventory" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" end>Inventory</NavLink>
                        </li>
                       
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" className="size-10 rounded-full object-cover" />

                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">Eric Frusciante</strong>

                                <span> eric@frusciante.com </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </aside>
    );
}