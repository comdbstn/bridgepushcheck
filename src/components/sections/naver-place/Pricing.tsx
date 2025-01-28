import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "베이직",
        price: "99,000원",
        period: "월",
        description: "소규모 매장을 위한 기본 플랜",
        features: [
            "기본 키워드 10개 최적화",
            "월간 리뷰 관리 20건",
            "기본 이미지 최적화",
            "주간 리포트 제공",
        ],
    },
    {
        name: "스탠다드",
        price: "199,000원",
        period: "월",
        description: "중규모 매장을 위한 표준 플랜",
        features: [
            "핵심 키워드 20개 최적화",
            "월간 리뷰 관리 50건",
            "프리미엄 이미지 최적화",
            "주간 리포트 제공",
            "경쟁사 분석 리포트",
        ],
        isPopular: true,
    },
    {
        name: "프리미엄",
        price: "299,000원",
        period: "월",
        description: "대규모 매장을 위한 프리미엄 플랜",
        features: [
            "프리미엄 키워드 30개 최적화",
            "무제한 리뷰 관리",
            "프리미엄 이미지/영상 최적화",
            "실시간 리포트 제공",
            "맞춤형 마케팅 전략 수립",
            "전담 매니저 배정",
        ],
    },
];

export function Pricing() {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 font-aggro">가격 정책</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        매장의 규모와 필요에 맞는 최적의 플랜을 선택하세요.
                        <br />
                        모든 플랜은 부가세 별도이며, 3개월 이상 계약 시 할인이 적용됩니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className={`p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 ${plan.isPopular ? 'border-2 border-[#03AC0E] relative' : ''}`}>
                                {plan.isPopular && (
                                    <div className="absolute top-0 right-0 bg-[#03AC0E] text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg font-tway">
                                        인기
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2 font-tway">{plan.name}</h3>
                                    <p className="text-gray-600 mb-4 font-tway">{plan.description}</p>
                                    <div className="flex items-end gap-2 mb-4">
                                        <span className="text-4xl font-bold text-[#03AC0E]">{plan.price}</span>
                                        <span className="text-gray-600 mb-1">/ {plan.period}</span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 font-tway">
                                                <Check className="w-5 h-5 text-[#03AC0E] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className={`mt-8 w-full py-3 rounded-lg font-bold transition-colors duration-300 font-tway
                                    ${plan.isPopular 
                                        ? 'bg-[#03AC0E] text-white hover:bg-[#029D0D]' 
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                                    시작하기
                                </button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 