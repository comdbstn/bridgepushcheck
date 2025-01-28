import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Store, Coffee, Hospital, Scissors, GraduationCap, Building, Users } from "lucide-react";

type ServiceId = "blind" | "everytime" | "naver-cafe" | "naver-place";

interface Category {
    id: string;
    name: string;
    icon: any;
    description: string;
    services: ServiceId[];
    features?: string[];
}

const categories: Category[] = [
    {
        id: "all",
        name: "전체보기",
        icon: Users,
        description: "브릿지마케팅의 모든 서비스를 확인해보세요.",
        services: ["blind", "everytime", "naver-cafe", "naver-place"],
    },
    {
        id: "restaurant",
        name: "음식점/카페",
        icon: Coffee,
        description: "맛집 마케팅의 새로운 기준",
        services: ["naver-place", "naver-cafe"],
        features: [
            "네이버 지도 상위노출",
            "맛집 리뷰 관리",
            "맛집 카페 바이럴",
            "전문 사진 촬영",
        ],
    },
    {
        id: "hospital",
        name: "병원/의원",
        icon: Hospital,
        description: "의료 마케팅의 새로운 기준",
        services: ["naver-place", "naver-cafe"],
        features: [
            "네이버 지도 상위노출",
            "병원 리뷰 관리",
            "의료 카페 바이럴",
            "전문 사진 촬영",
        ],
    },
    {
        id: "beauty",
        name: "뷰티/미용",
        icon: Scissors,
        description: "뷰티 마케팅의 새로운 기준",
        services: ["naver-place", "naver-cafe"],
        features: [
            "네이버 지도 상위노출",
            "미용실 리뷰 관리",
            "뷰티 카페 바이럴",
            "전문 사진 촬영",
        ],
    },
    {
        id: "education",
        name: "학원/교육",
        icon: GraduationCap,
        description: "교육 마케팅의 새로운 기준",
        services: ["everytime", "naver-cafe", "naver-place"],
        features: [
            "에브리타임 광고",
            "학원 리뷰 관리",
            "교육 카페 바이럴",
            "전문 사진 촬영",
        ],
    },
    {
        id: "company",
        name: "기업/채용",
        icon: Building,
        description: "기업 마케팅의 새로운 기준",
        services: ["blind", "everytime"],
        features: [
            "블라인드 광고",
            "에브리타임 채용",
            "채용 정보 관리",
            "기업 이미지 관리",
        ],
    },
    {
        id: "retail",
        name: "소매/유통",
        icon: Store,
        description: "소매 마케팅의 새로운 기준",
        services: ["naver-place", "naver-cafe"],
        features: [
            "네이버 지도 상위노출",
            "매장 리뷰 관리",
            "상품 카페 바이럴",
            "전문 사진 촬영",
        ],
    },
];

const serviceNames: Record<ServiceId, string> = {
    "blind": "블라인드",
    "everytime": "에브리타임",
    "naver-cafe": "네이버 카페",
    "naver-place": "네이버 플레이스",
};

export function ServicesPage() {
    return (
        <div className="min-h-screen w-full bg-white">
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold mb-4 font-aggro">서비스 카테고리</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                            업종별 맞춤 마케팅 서비스를 제공합니다.
                            <br />
                            귀사의 업종에 맞는 최적의 마케팅 솔루션을 확인해보세요.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                            <category.icon className="w-6 h-6 text-[#03AC0E]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-tway">{category.name}</h3>
                                            <p className="text-gray-600 text-sm font-tway">{category.description}</p>
                                        </div>
                                    </div>

                                    {category.id !== "all" && (
                                        <div className="mb-6">
                                            <h4 className="text-sm font-bold text-gray-500 mb-2 font-tway">주요 기능</h4>
                                            <ul className="space-y-2">
                                                {category.features?.map((feature) => (
                                                    <li key={feature} className="text-gray-600 text-sm font-tway">
                                                        • {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 mb-2 font-tway">추천 서비스</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.services.map((service) => (
                                                <Link
                                                    key={service}
                                                    to={`/${service}`}
                                                    className="px-3 py-1 bg-green-50 text-[#03AC0E] rounded-full text-sm hover:bg-green-100 transition-colors duration-300 font-tway"
                                                >
                                                    {serviceNames[service]}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 
