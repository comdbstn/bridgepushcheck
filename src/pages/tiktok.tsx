import Hero from "@/components/sections/tiktok/Hero";
import Features from "@/components/sections/tiktok/Features";
import Industries from "@/components/sections/tiktok/Industries";
import Stats from "@/components/sections/tiktok/Stats";
import Process from "@/components/sections/tiktok/Process";
import Pricing from "@/components/sections/tiktok/Pricing";
import References from "@/components/sections/tiktok/References";
import QA from "@/components/sections/tiktok/QA";
import Footer from "@/components/sections/tiktok/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function TikTokPage() {
    return (
        <div className='min-h-screen w-full bg-white overflow-hidden'>
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Features />
            <Industries />
            <Stats />
            <Process />
            <Pricing />
            <References />
            <QA />
            <Footer />
        </div>
    );
}
