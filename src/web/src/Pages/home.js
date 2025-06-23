import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/home/sidebar";

export default function Home() {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col justify-center p-4 sm:ml-64 ">
                <Outlet />
            </div>
        </>
    );
}

