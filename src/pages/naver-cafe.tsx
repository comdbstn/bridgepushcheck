import { Hero } from "@/components/sections/naver-cafe/Hero";
import { Products } from "@/components/sections/naver-cafe/Products";
import { Features } from "@/components/sections/naver-cafe/Features";
import { Stats } from "@/components/sections/naver-cafe/Stats";
import { Advantages } from "@/components/sections/naver-cafe/Advantages";
import { Pricing } from "@/components/sections/naver-cafe/Pricing";
import { Industries } from "@/components/sections/naver-cafe/Industries";
import { References } from "@/components/sections/naver-cafe/References";
import { Process } from "@/components/sections/naver-cafe/Process";
import { QA } from "@/components/sections/naver-cafe/QA";
import { Footer } from "@/components/sections/naver-cafe/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { useEffect } from "react";
import Image from "next/image";

const referenceImages = [
    {
        id: 1,
        src: '/images/references/cafe/caferef1.png',
        alt: '네이버 카페 레퍼런스 1'
    },
    {
        id: 2,
        src: '/images/references/cafe/caferef2.png',
        alt: '네이버 카페 레퍼런스 2'
    },
    {
        id: 3,
        src: '/images/references/cafe/caferef3.png',
        alt: '네이버 카페 레퍼런스 3'
    },
    {
        id: 4,
        src: '/images/references/cafe/caferef4.png',
        alt: '네이버 카페 레퍼런스 4'
    }
];

export function NaverCafeServicePage() {
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
            <section className="mt-16">
                <h2 className="text-2xl font-bold mb-8">레퍼런스</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {referenceImages.map((image) => (
                        <div key={image.id} className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
} 