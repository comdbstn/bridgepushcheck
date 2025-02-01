import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/everytime-comment/Hero";
import { Products } from "@/components/sections/everytime-comment/Products";
import { Features } from "@/components/sections/everytime-comment/Features";
import { Stats } from "@/components/sections/everytime-comment/Stats";
import { Advantages } from "@/components/sections/everytime-comment/Advantages";
import { Industries } from "@/components/sections/everytime-comment/Industries";
import { References } from "@/components/sections/everytime-comment/References";
import { Process } from "@/components/sections/everytime-comment/Process";
import { Pricing } from "@/components/sections/everytime-comment/Pricing";
import { QA } from "@/components/sections/everytime-comment/QA";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function EverytimeCommentPage() {
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
