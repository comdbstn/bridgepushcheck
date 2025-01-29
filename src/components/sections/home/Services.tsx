import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        title: "에브리타임",
        features: [
            "실제 재학생 타겟팅",
            "높은 도달률",
            "학교별 타겟팅",
            "국비지원, 병원, 서비스"
        ],
        image: "/logo/everytime.png",
        link: "/everytime"
    },
    {
        title: "블라인드",
        features: [
            "직장인 타겟팅",
            "높은 결제율",
            "자연스러운 바이럴",
            "금융, 채용, 서비스"
        ],
        image: "/logo/blind.png",
        link: "/blind"
    },
    {
        title: "틱톡",
        features: [
            "MZ 타겟팅",
            "높은 전환율",
            "숏폼 컨텐츠",
            "뷰티, 성형, 화장품"
        ],
        image: "/logo/tiktok.png",
        link: "/tiktok"
    }
];

export function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        맞춤형 마케팅 서비스
                    </h2>
                    <p className="text-lg text-gray-600">
                        각 플랫폼의 특성을 고려한 최적의 마케팅 솔루션을 제공합니다
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Link 
                            key={index}
                            to={service.link}
                            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                        >
                            <div className="flex items-center justify-center mb-8">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="h-12 w-auto"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                                {service.title}
                            </h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, featureIndex) => (
                                    <li 
                                        key={featureIndex}
                                        className="flex items-center text-gray-600"
                                    >
                                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex items-center justify-center text-purple-600 group-hover:text-purple-700 transition-colors">
                                자세히 보기
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 