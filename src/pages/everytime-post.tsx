import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/everytime-post/Hero";
import { Products } from "@/components/sections/everytime-post/Products";
import { Features } from "@/components/sections/everytime-post/Features";
import { Stats } from "@/components/sections/everytime-post/Stats";
import { Advantages } from "@/components/sections/everytime-post/Advantages";
import { Industries } from "@/components/sections/everytime-post/Industries";
import { References } from "@/components/sections/everytime-post/References";
import { Process } from "@/components/sections/everytime-post/Process";
import { Pricing } from "@/components/sections/everytime-post/Pricing";
import { QA } from "@/components/sections/everytime-post/QA";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function EverytimePostPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Products />
            <Features />
            <Stats />
            <Advantages />
            <Industries />
            <References />
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
}
