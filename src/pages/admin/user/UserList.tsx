import { NavLink, Outlet } from "react-router";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";

export default function UserList() {
    return (
        <section className="bg-white w-full p-5">
            <div className="flex w-full justify-between items-center border-b border-b-purle-800/10 pb-5">
                <H2>User List</H2>
                <div className="w-1/3 flex gap-3">
                    <input type="search" className="w-full border border-gray-100 p-2 rounded shadow-lg bg-gray-50" placeholder="Enter your search keyword.." />
                    <NavLink to="/admin/user/create" className={` w-50 bg-purple-900 p-2 text-white text-center rounded-md transition duration-500 hover:scale-103 flex items-center justify-center gap-2`}>
                        <LuPlus className="size-5" />
                        Add Users
                    </NavLink>
                </div>
            </div>
            <div className="w-full mt-5">
                <table className="w-full">
                    <thead className=" bg-gray-900">
                        <tr>
                            <th className="p-2 text-white border-r border-gray-100">Full Name</th>
                            <th className="p-2 text-white border-r border-gray-100">Email</th>
                            <th className="p-2 text-white border-r border-gray-100">Role</th>
                            <th className="p-2 text-white border-r border-gray-100">Status</th>
                            <th className="p-2 text-white border-r border-gray-100">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border-r border-gray-500 border-b">Bishakha Tuladhar</td>
                            <td className="p-2 border-r border-gray-500 border-b">aa@gmail.com</td>
                            <td className="p-2 border-r border-gray-500 border-b">Admin</td>
                            <td className="p-2 border-r border-gray-500 border-b">Active</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                Edit / Delete
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 border-r border-gray-500 border-b">Anish Tuladhar</td>
                            <td className="p-2 border-r border-gray-500 border-b">bb@gmail.com</td>
                            <td className="p-2 border-r border-gray-500 border-b">User</td>
                            <td className="p-2 border-r border-gray-500 border-b">Active</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                Edit / Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex w-full mt-5 justify-end">
                <ul className="flex gap-2 ">
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600   bg-gray-100 items-center justify-center  flex rounded-full shadow  "><LuChevronLeft /></li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600  bg-gray-100 items-center justify-center  flex rounded-full shadow bg-teal-100">
                        <span>1</span>
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600  bg-gray-100 items-center justify-center  flex rounded-full shadow">
                        <span>2</span>
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600  bg-gray-100 items-center justify-center  flex rounded-full shadow">
                        <span>3</span>
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600  bg-gray-100 items-center justify-center  flex rounded-full shadow">
                        <LuChevronRight/>
                    </li>
                </ul>
            </div>
        </section>
    );
}