import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";

interface ServiceDetail {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    process: {
        title: string;
        description: string;
    }[];
    pricing: {
        title: string;
        price: string;
        features: string[];
    }[];
}

export function NaverPlaceServicePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from || '/';
    const scrollPosition = location.state?.scrollPosition || 0;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        navigate(fromPage, {
            state: { shouldRestore: true, scrollPosition }
        });
    };

    if (isLoading) return <Loading />;

    const serviceDetail: ServiceDetail = {
        title: "네이버 플레이스 상위노출",
        description: "네이버 지도와 검색에서 매장의 노출도를 높여 방문자 수를 증가시키는 서비스입니다.",
        features: [
            "매장 트래픽 증가",
            "상위노출 최적화",
            "실시간 순위 분석"
        ],
        benefits: [
            "방문자 수 증가",
            "매출 향상",
            "브랜드 인지도 상승"
        ],
        process: [
            {
                title: "매장 분석",
                description: "현재 매장의 네이버 플레이스 노출 순위 및 경쟁사 분석"
            },
            {
                title: "전략 수립",
                description: "매장 특성에 맞는 최적의 상위노출 전략 수립"
            },
            {
                title: "트래픽 최적화",
                description: "자연스러운 방문자 유입을 통한 매장 트래픽 증가"
            },
            {
                title: "순위 모니터링",
                description: "실시간 순위 변동 체크 및 데이터 기반 리포트 제공"
            }
        ],
        pricing: [
            {
                title: "Basic",
                price: "50만원",
                features: [
                    "기본 트래픽 최적화",
                    "주 1회 순위 리포트",
                    "기본 키워드 3개"
                ]
            },
            {
                title: "Standard",
                price: "150만원",
                features: [
                    "고급 트래픽 최적화",
                    "실시간 순위 모니터링",
                    "키워드 10개",
                    "경쟁사 분석 리포트"
                ]
            },
            {
                title: "Premium",
                price: "300만원",
                features: [
                    "프리미엄 트래픽 최적화",
                    "실시간 대시보드 제공",
                    "무제한 키워드",
                    "전담 매니저 배정",
                    "맞춤형 전략 수립"
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,172,14,0.15),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <button
                                    onClick={handleGoBack}
                                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-8"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    {fromPage === '/service' ? '서비스 목록으로 돌아가기' : '이전 페이지로 돌아가기'}
                                </button>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="text-4xl font-bold text-white mb-4"
                                >
                                    {serviceDetail.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-xl text-gray-400 mb-8"
                                >
                                    {serviceDetail.description}
                                </motion.p>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                            >
                                {serviceDetail.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="bg-gray-900/50 rounded-xl p-6"
                                    >
                                        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Process */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="mb-16"
                            >
                                <h2 className="text-2xl font-bold text-white mb-8">진행 프로세스</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {serviceDetail.process.map((step, index) => (
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                            className="bg-gray-900/50 rounded-xl p-6"
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Pricing */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-8">서비스 요금</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {serviceDetail.pricing.map((plan, index) => (
                                        <motion.div
                                            key={plan.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                            className="bg-gray-900/50 rounded-xl p-6"
                                        >
                                            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                                            <p className="text-2xl font-bold text-green-400 mb-4">{plan.price}</p>
                                            <ul className="space-y-2">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="text-gray-400 flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 