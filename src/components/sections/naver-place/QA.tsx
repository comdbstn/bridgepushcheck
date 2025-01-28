import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "서비스 시작 후 얼마나 걸려야 효과가 나타나나요?",
        answer: "일반적으로 2-4주 내에 검색 노출 개선 효과가 나타나기 시작하며, 2-3개월 정도면 눈에 띄는 방문자 수 증가를 경험하실 수 있습니다. 단, 업종과 경쟁 상황에 따라 차이가 있을 수 있습니다.",
    },
    {
        question: "계약 기간은 얼마인가요?",
        answer: "최소 계약 기간은 3개월이며, 3개월 이상 계약 시 할인 혜택을 제공해 드립니다. 장기 계약의 경우 더 큰 할인 혜택이 적용됩니다.",
    },
    {
        question: "리뷰 관리는 어떤 방식으로 진행되나요?",
        answer: "전문 리뷰 관리팀이 매일 새로운 리뷰를 모니터링하고, 부정적인 리뷰에 대해서는 즉각적인 대응 전략을 제시해 드립니다. 또한 긍정적인 리뷰 활성화를 위한 다양한 전략도 함께 제공됩니다.",
    },
    {
        question: "이미지 최적화는 어떤 내용을 포함하나요?",
        answer: "매장의 주요 상품, 인테리어, 분위기 등을 전문 감각으로 촬영하고 편집하여 네이버 플레이스에 최적화된 형태로 업로드해 드립니다. 프리미엄 플랜의 경우 전문 영상 촬영도 포함됩니다.",
    },
    {
        question: "키워드 최적화는 어떤 방식으로 진행되나요?",
        answer: "매장 주변 지역과 업종에 맞는 주요 검색어를 분석하고, 이를 기반으로 매장 정보와 콘텐츠를 최적화합니다. 주기적인 키워드 트렌드 분석을 통해 최적의 노출 효과를 유지합니다.",
    },
    {
        question: "중도 해지가 가능한가요?",
        answer: "최소 계약 기간 이후에는 언제든지 해지가 가능합니다. 다만, 효과적인 마케팅을 위해서는 지속적인 관리가 중요하므로, 충분한 상담을 통해 결정하시는 것을 추천드립니다.",
    },
];

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 font-aggro">자주 묻는 질문</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        네이버 플레이스 마케팅 서비스에 대해 자주 묻는 질문들을 모았습니다.
                        <br />
                        더 자세한 문의사항은 카카오톡 채널을 통해 문의해 주세요.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <Card className="overflow-hidden">
                                <button
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="font-bold text-lg font-tway">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                            openIndex === index ? "transform rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 font-tway ${
                                        openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                                >
                                    <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 