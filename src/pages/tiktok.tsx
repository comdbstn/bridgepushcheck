import Hero from "@/components/sections/tiktok/Hero";
import { Products } from "@/components/sections/tiktok/Products";
import Features from "@/components/sections/tiktok/Features";
import Stats from "@/components/sections/tiktok/Stats";
import { Advantages } from "@/components/sections/tiktok/Advantages";
import Pricing from "@/components/sections/tiktok/Pricing";
import Industries from "@/components/sections/tiktok/Industries";
import References from "@/components/sections/tiktok/References";
import Process from "@/components/sections/tiktok/Process";
import QA from "@/components/sections/tiktok/QA";
import Footer from "@/components/sections/tiktok/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function TiktokPage() {
    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Products />
            <Features />
            <Stats />
            <Advantages />
            <Pricing />
            <Industries />
            <References />
            <Process />
            <QA />
            <Footer />
        </div>
    );
}
