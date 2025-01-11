import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
    {
        question: "에브리타임 마케팅은 어떤 효과가 있나요?",
        answer: "에브리타임은 대학생들의 실제 경험과 의견이 공유되는 플랫폼으로, 신뢰도 높은 바이럴 마케팅이 가능합니다. 특히 대학생을 타겟으로 하는 서비스나 제품의 경우, 실제 사용자들의 자연스러운 후기와 추천을 통해 효과적인 마케팅이 가능합니다.",
    },
    {
        question: "어떤 업종에 적합한가요?",
        answer: "대학생을 주 고객층으로 하는 모든 서비스에 적합합니다. 특히 교육 서비스, 대외활동, 채용 정보, 이커머스 등에서 좋은 성과를 보이고 있습니다.",
    },
    {
        question: "마케팅 진행 기간은 얼마나 걸리나요?",
        answer: "기본적으로 컨텐츠 기획부터 업로드까지 약 3-5일 정도 소요됩니다. 단, 캠페인의 규모와 복잡도에 따라 기간이 달라질 수 있으며, 긴급한 진행도 가능합니다.",
    },
    {
        question: "비용은 어떻게 되나요?",
        answer: "마케팅 규모와 방식에 따라 비용이 책정됩니다. 기본 패키지는 1만원부터 시작하며, 구체적인 견적은 상담을 통해 확인하실 수 있습니다.",
    },
];

function QAItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className='group'>
            <button
                className='w-full py-6 flex items-start gap-6 text-left hover:bg-gray-50/50 rounded-lg px-4 transition-colors duration-200'
                onClick={onClick}
            >
                <div className='flex-shrink-0'>
                    <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF416C]/10 text-[#FF416C] font-bold'>
                        Q
                    </span>
                </div>
                <div className='flex-grow'>
                    <span className='text-lg font-medium block mb-2 font-tway'>{question}</span>
                    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
                        <div className='flex gap-6 mt-4'>
                            <div className='flex-shrink-0'>
                                <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold'>
                                    A
                                </span>
                            </div>
                            <p className='text-gray-600 font-tway'>{answer}</p>
                        </div>
                    </div>
                </div>
                <div className='flex-shrink-0 pt-1'>
                    <div
                        className={cn(
                            "w-6 h-6 relative transition-transform duration-300",
                            isOpen ? "transform rotate-180" : ""
                        )}
                    >
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-0.5 h-6 bg-[#FF416C] rounded-full transition-transform duration-300' />
                            <div
                                className={cn(
                                    "absolute w-6 h-0.5 bg-[#FF416C] rounded-full transition-transform duration-300",
                                    isOpen ? "transform rotate-90" : ""
                                )}
                            />
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 font-aggro'
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-center mb-12 font-tway'
                    >
                        에브리타임 마케팅에 대해 궁금하신 점을 확인하세요
                    </motion.p>

                    <div className='divide-y divide-gray-100'>
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <QAItem
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='mt-12 text-center'
                    >
                        <a
                            href='http://pf.kakao.com/_CYGdn/chat'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:from-[#FF4B2B] hover:to-[#FF416C] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                        >
                            <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
