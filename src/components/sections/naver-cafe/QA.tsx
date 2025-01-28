import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "어떤 네이버 카페에서 바이럴 마케팅이 가능한가요?",
        answer: "맘카페, 뷰티 카페, 지역 카페, 취업 카페 등 다양한 네이버 카페에서 바이럴 마케팅이 가능합니다. 고객의 타겟층과 제품/서비스 특성에 맞는 최적의 카페를 선정하여 진행합니다."
    },
    {
        question: "바이럴 마케팅의 효과는 어떻게 측정되나요?",
        answer: "조회수, 댓글 수, 공감 수 등의 기본적인 지표부터 클릭률, 전환율 등 세부적인 성과 지표까지 실시간으로 모니터링하고 분석합니다. 주간/일간 리포트를 통해 상세한 성과 분석 결과를 제공합니다."
    },
    {
        question: "컨텐츠는 어떻게 제작되나요?",
        answer: "전문 작가진이 각 카페의 특성과 규칙을 고려하여 자연스러운 바이럴 컨텐츠를 제작합니다. 광고성 컨텐츠가 아닌, 실제 사용자의 리뷰처럼 자연스러운 형태로 제작됩니다."
    },
    {
        question: "최소 계약 기간이 있나요?",
        answer: "최소 계약 기간은 1개월입니다. 단, 더 효과적인 바이럴 마케팅을 위해 3개월 이상의 장기 계약을 추천드립니다. 장기 계약 시 할인 혜택이 제공됩니다."
    },
    {
        question: "실시간 모니터링은 어떻게 이루어지나요?",
        answer: "24시간 전담 모니터링 팀이 컨텐츠의 반응과 효과를 실시간으로 체크합니다. 필요한 경우 즉각적인 대응과 전략 수정이 가능합니다."
    }
];

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                            자주 묻는 질문
                        </h2>
                        <p className="text-gray-400">
                            네이버 카페 바이럴 마케팅에 대한<br />
                            자주 묻는 질문들을 모았습니다
                        </p>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-gray-900/50 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-semibold text-white">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-green-500" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-400">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 