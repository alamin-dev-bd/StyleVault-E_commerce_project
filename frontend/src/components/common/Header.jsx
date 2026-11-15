import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <nav>
            <Topbar />
            <Navbar />
            <SearchBar />
        </nav>
    );
}