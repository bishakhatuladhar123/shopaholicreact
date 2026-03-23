
import Logo from "../logo/Logo";
export default function LeftSidePanel() {
    return (
        <div className="w-1/3 bg-purple-300 rounded-md p-10 items-center justify-center flex flex-col gap-5 text-white">
           <Logo/>
            <h1 className="text-6xl font-semibold text-red-500">Login Page</h1>
            <p className="text-center p-5">
                Your shop’s best ally.
            </p>
        </div>
    );
}