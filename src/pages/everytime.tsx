import { Hero } from "@/components/sections/everytime/Hero";
import { Features } from "@/components/sections/everytime/Features";
import { Stats } from "@/components/sections/everytime/Stats";
import { Pricing } from "@/components/sections/everytime/Pricing";
import { Industries } from "@/components/sections/everytime/Industries";
import { References } from "@/components/sections/everytime/References";
import { Process } from "@/components/sections/everytime/Process";
import { QA } from "@/components/sections/everytime/QA";
import { Footer } from "@/components/sections/everytime/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function EverytimePage() {
    return (
        <div className='min-h-screen w-full bg-white overflow-hidden'>
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Features />
            <Stats />
            <Pricing />
            <Industries />
            <References />
            <Process />
            <QA />
            <Footer />
        </div>
    );
}
