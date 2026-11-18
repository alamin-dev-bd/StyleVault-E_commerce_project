import Navbar from "@/components/layout/Header/Navbar";
import Topbar from "@/components/layout/Header/Topbar";
import SearchBar from "@/components/layout/Header/SearchBar";

export default function Header() {
    return (
        <nav>
            <Topbar />
            <Navbar />
            <SearchBar />
        </nav>
    );
}