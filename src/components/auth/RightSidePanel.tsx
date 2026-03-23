export default function RightSidePanel()
{
    return(
        <div className="w-2/3 gap-10 flex flex-col bg-gray-100 p-10 rounded-md">
        <div className="flex border-b border-b-green-900/30 pb-5">
            <h1 className="text-6xl font-semibold  text-green-900">Login Form</h1>
        </div>
        <form action="" className="flex flex-col gap-5">
            <div className="flex w-full items-center">
                <label htmlFor="username" className="w-2/3 font-semibold " >User Name:{""}</label>
                <div className="w-2/3 flex flex-col">
                    <input type="email" className="border border-gray-300 w-full  p-2  rounded-md shadow bg-white" />
                    <span className="text-red-800 tex-sm italic"></span>
                </div>
            </div>
            <div className="flex w-full items-center">
                <label htmlFor="password" className="w-2/3 font-semibold " >Password:</label>
                <div className="w-2/3 flex flex-col">
                    <input type="password" className="border border-gray-300 w-full  p-2  rounded-md shadow bg-white" />
                    <span className="text-red-800 tex-sm italic"></span>
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
                <a href="/forget-password" className="text-teal-500 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96">Forget Password?</a>
            </div>
            <div className="flext w-full items-center gap-3">
                <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button>
                <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button>

            </div>
        </form>
    </div>
    );
}