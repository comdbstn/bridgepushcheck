import { Hero } from "@/components/sections/blind/Hero";
import { Products } from "@/components/sections/blind/Products";
import { Features } from "@/components/sections/blind/Features";
import { Stats } from "@/components/sections/blind/Stats";
import { Pricing } from "@/components/sections/blind/Pricing";
import { Industries } from "@/components/sections/blind/Industries";
import { References } from "@/components/sections/blind/References";
import { Process } from "@/components/sections/blind/Process";
import { QA } from "@/components/sections/blind/QA";
import { Footer } from "@/components/sections/blind/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function BlindPage() {
  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      <BackButton />
      <KakaoChatButton />
      <Hero />
      <Products />
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