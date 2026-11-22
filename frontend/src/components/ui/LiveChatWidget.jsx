
import { useState } from "react";
import {
    X,
    Send,
    Sparkles,
    Minus,
} from "lucide-react";
import { BsChatTextFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { logo } from "@/assets/Images/image";

export default function LiveChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        // Chat functionality will be connected later.
        console.log("Message:", message);

        // Keep the input ready for future functionality.
        setMessage("");
    };

    return (
        <>
            {/* =====================================
                CHAT WINDOW
            ====================================== */}

            <div
                aria-hidden={!isOpen}
                className={`
                    fixed bottom-24 right-5 z-100
                    flex w-[min(380px,calc(100vw-2.5rem))]
                    h-[min(560px,calc(100dvh-8rem))]
                    flex-col overflow-hidden
                    rounded-3xl
                    border border-(--border)
                    bg-(--surface)
                    shadow-2xl shadow-black/20
                    origin-bottom-right
                    transition-all duration-300 ease-out
                    ${
                        isOpen
                            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                            : "pointer-events-none translate-y-5 scale-90 opacity-0"
                    }
                `}
            >
                {/* CHAT HEADER */}

                <div
                    className="
                        relative overflow-hidden
                        bg-(--primary)
                        px-5 py-5
                        text-(--text-white)
                    "
                >
                    {/* Decorative Background */}

                    <div
                        className="
                            pointer-events-none absolute
                            -right-12 -top-16
                            h-40 w-40 rounded-full
                            border border-(--accent)/20
                        "
                    />

                    <div className="relative flex items-start justify-between">

                        {/* BRAND */}

                        <div className="flex items-center gap-3">

                            <img
                                src={logo.logoSvg}
                                alt="StyleVault"
                                className="h-12 w-auto object-contain sm:h-16"
                            />

                            <div>
                                <h2 className="text-lg font-bold">
                                    StyleVault Support
                                </h2>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-(--accent)" />

                                    <span className="text-xs text-white/75">
                                        Here to help you
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* HEADER CONTROLS */}

                        <div className="flex items-center gap-1">

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Minimize chat"
                                className="
                                    cursor-pointer rounded-full p-2
                                    text-(--text-white)/70
                                    transition-colors
                                    hover:bg-white/10 hover:text-(--accent)
                                "
                            >
                                <Minus size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                                className="
                                    cursor-pointer rounded-full p-2
                                    text-(--text-white)/70
                                    transition-colors
                                    hover:bg-white/10 hover:text-(--accent)
                                "
                            >
                                <X size={18} />
                            </button>

                        </div>
                    </div>

                    {/* HEADER DESCRIPTION */}

                    <p className="relative mt-4 text-xs leading-5 text-(--text-white)/70">
                        Have a question about an order or product? We'd love to help.
                    </p>
                </div>

                {/* =====================================
                    CHAT BODY
                ====================================== */}

                <div
                    className="
                        flex flex-1 flex-col overflow-y-auto
                        bg-(--bg) p-5
                    "
                >
                    {/* WELCOME LABEL */}

                    <div className="mb-6 flex justify-center">
                        <span
                            className="
                                rounded-full
                                border border-(--border)
                                bg-(--surface)
                                px-3 py-1
                                text-[10px] font-medium
                                text-(--muted)
                            "
                        >
                            Welcome to StyleVault
                        </span>
                    </div>

                    {/* WELCOME MESSAGE */}

                    <div className="flex items-start gap-2.5">

                        <div
                            className="
                                flex h-8 w-8 shrink-0
                                items-center justify-center
                                rounded-full
                                bg-(--accent)/15
                                text-(--accent-h)
                            "
                        >
                            <Sparkles size={15} />
                        </div>

                        <div
                            className="
                                max-w-[85%]
                                rounded-2xl rounded-tl-sm
                                border border-(--border)
                                bg-(--surface)
                                px-4 py-3
                                shadow-sm
                            "
                        >
                            <p className="text-sm font-semibold text-(--text)">
                                Hello! Welcome to StyleVault.
                            </p>

                            <p className="mt-2 text-sm leading-6 text-(--text-2)">
                                We're here to make your shopping experience easier.
                                How can we help you today?
                            </p>

                            <span className="mt-3 block text-[10px] text-(--muted)">
                                StyleVault Support
                            </span>
                        </div>

                    </div>

                    {/* FUTURE CHAT MESSAGES GO HERE */}

                    <div className="mt-auto pt-8 text-center">
                        <p className="text-[10px] text-(--muted)">
                            We look forward to helping you.
                        </p>
                    </div>
                </div>

                {/* =====================================
                    MESSAGE INPUT AREA
                ====================================== */}

                <div
                    className="
                        border-t border-(--border)
                        bg-(--surface)
                        p-4
                    "
                >
                    <form
                        onSubmit={handleSubmit}
                        className="
                            flex items-center gap-2
                            rounded-2xl
                            border border-(--border)
                            bg-(--bg)
                            p-2
                        "
                    >
                        {/* MESSAGE INPUT */}

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="
                                min-w-0 flex-1
                                bg-transparent
                                px-2 py-2
                                text-xs text-(--text)
                                outline-none
                                placeholder:text-(--muted)
                            "
                        />

                        {/* SEND BUTTON */}

                        <button
                            type="submit"
                            disabled={!message.trim()}
                            aria-label="Send message"
                            className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-(--accent)
                                text-(--primary)
                                transition-all duration-200
                                hover:bg-(--accent-h)
                                cursor-pointer
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <Send size={16} />
                        </button>
                    </form>

                    <p className="mt-3 text-center text-[10px] text-(--muted)">
                        Powered by StyleVault
                    </p>
                </div>
            </div>

            {/* =====================================
                FLOATING CHAT BUTTON
            ====================================== */}

            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close live chat" : "Open live chat"}
                aria-expanded={isOpen}
                className="
                    group fixed bottom-6 right-6 z-110
                    flex h-12 w-12
                    items-center justify-center
                    rounded-[21px_21px_5px_21px]
                    bg-(--chat)
                    text-(--primary)
                    shadow-lg shadow-black/15
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-xl
                    cursor-pointer
                "
            >
                <span
                    className="
                        relative
                        transition-transform duration-300
                        text-(--text-white)
                    "
                >
                    {isOpen ? (
                        <FaChevronDown size={25} />
                    ) : (
                        <BsChatTextFill size={25} />
                    )}
                </span>
            </button>
        </>
    );
}
