import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic",
        price: "₩30,000",
        description: "게시물 또는 댓글 바이럴 1건",
        features: ["1개 게시물 1회 업로드", "또는 1개 댓글 업로드", "24시간 이내 업로드", "기본 리포트 제공"],
        highlighted: false,
        ctaText: "시작하기",
    },
    {
        name: "Standard",
        price: "₩50,000",
        description: "게시물 + 댓글 바이럴 1건",
        features: [
            "1개 게시물 업로드",
            "최대 10개 댓글/대댓글",
            "자연스러운 질문/답변 구성",
            "신뢰도 높은 바이럴 구성",
            "프리미엄 리포트 제공",
        ],
        highlighted: true,
        ctaText: "시작하기",
        badge: "BEST CHOICE",
    },
    {
        name: "Premium",
        price: "₩70,000",
        description: "특정 회사 지정 게시물 + 댓글 바이럴",
        features: [
            "1개 게시물 업로드",
            "최대 10개 댓글/대댓글",
            "특정 회사 계정으로 업로드",
            "인증된 계정으로 신뢰도 상승",
            "VIP 고객 지원",
        ],
        highlighted: false,
        ctaText: "시작하기",
    },
];

export function Pricing() {
    return (
        <section className='py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 font-aggro'
                    >
                        합리적인 가격으로 시작하세요
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-600'
                    >
                        프로젝트 규모와 목표에 맞는 최적의 플랜을 선택하세요
                    </motion.p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='relative'
                        >
                            {plan.badge && (
                                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    <span className='bg-gradient-to-r from-[#00A9FF] to-[#0077FF] text-white text-sm font-bold px-4 py-1 rounded-full'>
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <Card
                                className={`h-full ${
                                    plan.highlighted
                                        ? "border-2 border-[#00A9FF] shadow-lg scale-105 relative z-10"
                                        : "border border-gray-200"
                                } hover:shadow-xl transition-all duration-300`}
                            >
                                <div className='p-8'>
                                    <h3 className='text-2xl font-bold mb-2 font-tway'>{plan.name}</h3>
                                    <div className='mb-4'>
                                        <span className='text-4xl font-bold'>{plan.price}</span>
                                        <span className='text-gray-600'>/회</span>
                                    </div>
                                    <p className='text-gray-600 mb-6 font-tway'>{plan.description}</p>

                                    <Button
                                        className={`w-full mb-8 ${
                                            plan.highlighted
                                                ? "bg-gradient-to-r from-[#00A9FF] to-[#0077FF] hover:from-[#0077FF] hover:to-[#00A9FF]"
                                                : ""
                                        }`}
                                    >
                                        {plan.ctaText}
                                    </Button>

                                    <div className='space-y-4'>
                                        {plan.features.map((feature) => (
                                            <div key={feature} className='flex items-center gap-3'>
                                                <div
                                                    className={`rounded-full p-1 ${
                                                        plan.highlighted
                                                            ? "bg-[#00A9FF]/10 text-[#00A9FF]"
                                                            : "bg-gray-100 text-gray-600"
                                                    }`}
                                                >
                                                    <Check className='w-4 h-4' />
                                                </div>
                                                <span className='text-gray-600'>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
