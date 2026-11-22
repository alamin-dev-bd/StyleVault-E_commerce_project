
import { Outlet } from "react-router-dom";

import Headers from "@/components/layout/Header/Header";


import Footer from "@/components/layout/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
      <Headers />



      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
