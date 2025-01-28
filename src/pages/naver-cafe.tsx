import { Hero } from "@/components/sections/naver-cafe/Hero";
import { Features } from "@/components/sections/naver-cafe/Features";
import { Stats } from "@/components/sections/naver-cafe/Stats";
import { Process } from "@/components/sections/naver-cafe/Process";
import { Pricing } from "@/components/sections/naver-cafe/Pricing";
import { QA } from "@/components/sections/naver-cafe/QA";
import { Footer } from "@/components/sections/naver-cafe/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { useEffect } from "react";

export function NaverCafeServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-black overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Features />
            <Stats />
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
} 