import { LuUser, LuUserRound } from "react-icons/lu";
import Logo from "../../components/logo/Logo";

export default function AdminDashboard() {
    return (
        <>
            <section className="flex w-full gap-10">

                <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full">
                    <div className="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>

                        <span className="text-xs font-medium"> 67.81% </span>
                    </div>

                    <div>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> Profit </strong>

                        <p>
                            <span className="text-2xl font-medium text-gray-900 dark:text-white"> $404.32 </span>

                            <span className="text-xs text-gray-500 dark:text-gray-400"> from $240.94 </span>
                        </p>
                    </div>
                </article>

                <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full">
                    <div className="inline-flex gap-2 self-end rounded-sm bg-red-100 p-1 text-red-600 dark:bg-red-700 dark:text-red-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                        </svg>

                        <span className="text-xs font-medium"> 67.81% </span>
                    </div>

                    <div>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> Profit </strong>

                        <p>
                            <span className="text-2xl font-medium text-gray-900 dark:text-white"> $240.94 </span>

                            <span className="text-xs text-gray-500 dark:text-gray-400"> from $404.32 </span>
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
}