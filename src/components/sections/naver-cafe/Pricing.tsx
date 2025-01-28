import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Basic",
        price: "30만원",
        description: "소규모 바이럴 마케팅을 위한 기본 플랜",
        features: [
            "3개 카페 바이럴",
            "기본 컨텐츠 제작",
            "주간 리포트 제공",
            "기본 키워드 분석",
            "이메일 지원"
        ]
    },
    {
        title: "Standard",
        price: "100만원",
        description: "효과적인 바이럴 마케팅을 위한 표준 플랜",
        features: [
            "10개 카페 바이럴",
            "맞춤형 컨텐츠 제작",
            "실시간 모니터링",
            "일일 리포트 제공",
            "키워드 분석 리포트",
            "카카오톡 채널 지원"
        ]
    },
    {
        title: "Premium",
        price: "300만원",
        description: "대규모 바이럴 마케팅을 위한 프리미엄 플랜",
        features: [
            "무제한 카페 바이럴",
            "프리미엄 컨텐츠 제작",
            "실시간 대시보드 제공",
            "전담 매니저 배정",
            "성과 분석 컨설팅",
            "24/7 긴급 지원",
            "맞춤형 전략 수립"
        ]
    }
];

export function Pricing() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            서비스 요금
                        </h2>
                        <p className="text-gray-400">
                            규모와 목적에 맞는 최적의 플랜을 선택하세요<br />
                            모든 플랜은 언제든지 변경이 가능합니다
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-gray-900/50 rounded-xl p-6"
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {plan.title}
                                    </h3>
                                    <div className="text-3xl font-bold text-green-400 mb-2">
                                        {plan.price}
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        {plan.description}
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            <span className="text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                                    시작하기
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 