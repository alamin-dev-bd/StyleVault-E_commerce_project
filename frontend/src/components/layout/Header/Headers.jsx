import Navbar from "@/components/layout/Header/Navbar";
import Topbar from "@/components/layout/Header/Topbar";
import SearchBar from "@/components/layout/Header/SearchBar";
import Category from "./Category";

export default function Header() {
    return (
        <>
            <nav
                data-theme="dark"
                className="sticky top-0 z-50 w-full shadow-md border-b border-black/10 bg-(--primaryp)"
            >
                <Topbar />
                <Navbar />
                <SearchBar />

            </nav>
            <Category />

        </>
    );
}