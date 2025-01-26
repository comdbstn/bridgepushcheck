import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";

export default function ServicePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const services = [
        {
            title: "에브리타임",
            description: "대학생 커뮤니티 1위 에브리타임에서 진행되는 마케팅 서비스입니다.",
            features: ["대학생 타겟 마케팅", "실시간 반응 분석", "맞춤형 컨텐츠 제작"],
            minPrice: "1만원",
            image: "/logo/everytime.png",
            link: "/everytime"
        },
        {
            title: "블라인드",
            description: "직장인들의 솔직한 이야기가 있는 블라인드에서 진행되는 마케팅 서비스입니다.",
            features: ["직장인 타겟 마케팅", "실시간 모니터링", "전문가 컨설팅"],
            minPrice: "5만원",
            image: "/logo/blind.png",
            link: "/blind"
        },
        {
            title: "틱톡",
            description: "글로벌 숏폼 플랫폼 틱톡에서 진행되는 마케팅 서비스입니다.",
            features: ["MZ세대 타겟 마케팅", "트렌드 분석", "바이럴 영상 제작"],
            minPrice: "25만원",
            image: "/logo/tiktok.png",
            link: "/tiktok"
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                마케팅 서비스
                            </h1>
                            <p className="text-xl text-gray-400">
                                브릿지마케팅의 다양한 서비스를 만나보세요
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors"
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="h-12"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-center">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                                                className="flex items-center text-gray-400"
                                            >
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="text-center mb-6">
                                        <span className="text-purple-400 font-semibold">
                                            최소 {service.minPrice}
                                        </span>
                                    </div>
                                    <Link
                                        to={service.link}
                                        className="block w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center transition-colors"
                                    >
                                        자세히 보기
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                지금 바로 시작하세요
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                브릿지마케팅과 함께 효과적인 마케팅을 시작해보세요
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                            >
                                상담 시작하기
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 