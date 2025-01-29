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

export function NaverCafeServicePage() {
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
        title: "네이버 카페 바이럴 마케팅",
        description: "맘카페, 뷰티, 지역, 취준생 등 다양한 네이버 카페에서 진행되는 바이럴 마케팅 서비스입니다.",
        features: [
            "타겟 카페 분석",
            "자연스러운 바이럴",
            "실시간 모니터링"
        ],
        benefits: [
            "정확한 타겟 도달",
            "높은 신뢰도",
            "브랜드 인지도 상승"
        ],
        process: [
    {
                title: "타겟 분석",
                description: "타겟 고객이 활동하는 네이버 카페 분석 및 선정"
    },
    {
                title: "컨텐츠 기획",
                description: "카페별 특성에 맞는 자연스러운 바이럴 컨텐츠 기획"
    },
    {
                title: "바이럴 실행",
                description: "전문 작가진의 자연스러운 바이럴 마케팅 진행"
    },
    {
                title: "성과 분석",
                description: "실시간 모니터링 및 데이터 기반 성과 분석 리포트 제공"
    }
        ],
        pricing: [
            {
                title: "Basic",
                price: "30만원",
                features: [
                    "3개 카페 바이럴",
                    "기본 컨텐츠 제작",
                    "주간 리포트 제공"
                ]
            },
            {
                title: "Standard",
                price: "100만원",
                features: [
                    "10개 카페 바이럴",
                    "맞춤형 컨텐츠 제작",
                    "실시간 모니터링",
                    "일일 리포트 제공"
                ]
            },
            {
                title: "Premium",
                price: "300만원",
                features: [
                    "무제한 카페 바이럴",
                    "프리미엄 컨텐츠 제작",
                    "실시간 대시보드 제공",
                    "전담 매니저 배정",
                    "성과 분석 컨설팅"
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