import Navbar from "@/components/layout/Header/Navbar";
import Topbar from "@/components/layout/Header/Topbar";
import CategoryNav from "./CategoryNav";

export default function Header() {
    return (
        <>
            <header
                data-theme="dark"
                className="sticky top-0 z-50 w-full shadow-md border-b border-black/10 bg-(--primaryp)"
            >
                <Topbar />
                <Navbar />

            </header>
            <CategoryNav />

        </>
    );
}