
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Headers from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import ScrollToTop from "@/components/ui/ScrollToTop";
import LiveChatWidget from "@/components/ui/LiveChatWidget";

export default function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">

      <Headers />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Widgets */}
      <ScrollToTop isChatOpen={isChatOpen} />

      <LiveChatWidget
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />

    </div>
  );
}
