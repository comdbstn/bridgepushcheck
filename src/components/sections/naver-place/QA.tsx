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
    {
        question: "실시간 모니터링은 어떻게 진행되나요?",
        answer: "전담 매니저가 매일 매장의 리뷰, 평점, 검색 순위 등을 모니터링하며, 이상 징후 발견 시 즉각적인 대응 방안을 제시합니다. 주간/월간 리포트를 통해 상세한 분석 결과를 제공해 드립니다.",
    },
    {
        question: "서비스 비용은 어떻게 되나요?",
        answer: "기본 플랜은 월 39만원부터 시작하며, 매장의 규모와 필요한 서비스 범위에 따라 맞춤형 플랜을 제공해 드립니다. 자세한 견적은 무료 상담을 통해 안내해 드립니다.",
    },
    {
        question: "경쟁사 분석도 포함되나요?",
        answer: "네, 주변 경쟁 업체의 네이버 플레이스 활동을 정기적으로 분석하여 벤치마킹 포인트를 도출하고, 이를 바탕으로 차별화 전략을 수립해 드립니다.",
    },
    {
        question: "방문자 데이터는 어떤 것들을 확인할 수 있나요?",
        answer: "검색 유입 키워드, 방문자 수, 조회수, 클릭률, 예약/전화 전환율 등 다양한 데이터를 실시간으로 확인하실 수 있습니다. 이를 통해 마케팅 효과를 정확하게 측정할 수 있습니다.",
    },
    {
        question: "긴급 상황 발생 시 어떻게 대응하나요?",
        answer: "24시간 긴급 대응 체계를 운영하고 있어, 부정적 리뷰나 잘못된 정보 게시 등 긴급 상황 발생 시 신속하게 대응해 드립니다. 카카오톡 채널을 통해 즉시 연락 가능합니다.",
    },
    {
        question: "서비스 시작 전 무료 상담이 가능한가요?",
        answer: "네, 전문 컨설턴트가 매장의 현재 상태를 무료로 분석하고, 예상되는 마케팅 효과와 맞춤형 전략을 상세히 설명해 드립니다. 부담 없이 문의해 주세요.",
    }
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
                            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
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
                                    <p className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
