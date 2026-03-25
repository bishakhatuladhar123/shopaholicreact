import NotFoundImage from "../../assets/images/NotFoundImage.jpg"
import { H1 } from "../../components/ui/typography/PageTitle";
export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-5">
                <img
                    src={NotFoundImage}
                    alt="404 Not Found"
                    // Changed size-50 to w-48 h-48 (standard Tailwind)
                    className="rounded-full w-48 h-48 object-cover mb-6 shadow-lg"
                />
                <H1 >Page Not Found</H1>
                <p className="text-gray-500 mt-2 text-center">
                    The page you are looking for doesn't exist in the Shopaholic.
                </p>
            </div>
        </>
    );
}