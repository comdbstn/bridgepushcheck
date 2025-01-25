import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";

export function ServicePage() {
    const services = [
        {
            title: "에브리타임",
            description: "대학생 타겟 바이럴 마케팅",
            details: "학교별 평균 DAU 3000명, 학교별 홍보게시판과 자유게시판에서 자연스러운 바이럴 마케팅을 진행합니다.",
            image: "/logo/everytime.png",
            link: "/everytime",
            price: "30",
            gradient: "from-[#FFD1D1] to-[#FFE5E5]",
            features: ["학교별 타겟팅", "실제 재학생 마케팅", "높은 도달률"]
        },
        {
            title: "블라인드",
            description: "직장인 타겟 바이럴 마케팅",
            details: "직장인들의 일상적인 대화 속에 자연스럽게 녹아드는 마케팅으로 높은 신뢰도를 확보합니다.",
            image: "/logo/blind.png",
            link: "/blind",
            price: "50",
            gradient: "from-[#E5F7FF] to-[#F5FBFF]",
            features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도"]
        },
        {
            title: "틱톡",
            description: "MZ세대 타겟 바이럴 마케팅",
            details: "MZ세대를 사로잡는 숏폼 콘텐츠로 자연스러운 바이럴 마케팅을 통해 높은 전환율을 달성합니다.",
            image: "/logo/tiktok.png",
            link: "/tiktok",
            price: "40",
            gradient: "from-[#00F2EA] to-[#FF0050]",
            features: ["MZ세대 타겟팅", "숏폼 콘텐츠", "높은 전환율"]
        }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full bg-white pt-16">
                <div className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-4 font-aggro">브릿지마케팅 서비스</h1>
                        <p className="text-gray-600 text-lg font-tway">
                            다양한 플랫폼에서 효과적인 바이럴 마케팅을 제공합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Link
                                    to={service.link}
                                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                                >
                                    <div className={`p-8 bg-gradient-to-br ${service.gradient}`}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-16 mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold mb-2 font-tway">{service.title}</h2>
                                        <p className="text-gray-600 mb-4 font-tway">{service.description}</p>
                                        <p className="text-sm text-gray-500 mb-6 font-tway">{service.details}</p>
                                        
                                        <div className="space-y-4 mb-6">
                                            {service.features.map((feature) => (
                                                <div key={feature} className="flex items-center text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                                    <span className="text-sm font-tway">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="font-tway">
                                                <span className="text-gray-500">최소 </span>
                                                <span className="text-2xl font-bold text-blue-600">{service.price}만원</span>
                                                <span className="text-gray-500"> ~</span>
                                            </div>
                                            <div className="flex items-center text-blue-600 group">
                                                <span className="font-tway mr-2">자세히 보기</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
} 