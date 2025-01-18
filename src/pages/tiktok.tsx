import React from "react";
import Hero from "../components/sections/tiktok/Hero";
import Features from "../components/sections/tiktok/Features";
import Industries from "../components/sections/tiktok/Industries";
import Stats from "../components/sections/tiktok/Stats";
import Process from "../components/sections/tiktok/Process";
import Pricing from "../components/sections/tiktok/Pricing";
import References from "../components/sections/tiktok/References";
import QA from "../components/sections/tiktok/QA";
import Footer from "../components/sections/tiktok/Footer";

export const TikTokPage: React.FC = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
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
};
