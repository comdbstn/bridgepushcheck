import { Card } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileSearch, Upload, BarChart } from "lucide-react";

const steps = [
    {
        number: 1,
        icon: MessageSquare,
        title: "상담 및 견적 확인",
        description:
            "홍보가 필요한 매장 정보, 타겟 지역 등 구매자 측이 희망하는 요소를 파악하고 그에 맞는 마케팅 방법을 제시합니다.",
        color: "from-[#03AC0E] to-[#02891B]",
    },
    {
        number: 2,
        icon: FileSearch,
        title: "초안 검토 및 수정",
        description:
            "구매자 측에서 준비한 매장 정보를 바탕으로 네이버 플레이스의 분위기와 감성에 맞게 수정하는 절차를 거칩니다. 구매자 측의 확인이 완료되면 최종 컨텐츠가 확정됩니다.",
        color: "from-[#02891B] to-[#03AC0E]",
    },
    {
        number: 3,
        icon: Upload,
        title: "업로드 진행",
        description:
            "업로드에 필요한 기한은 리뷰 수에 따라 달라지지만, 통상 영업일 기준 약 3일 정도 소요됩니다.",
        color: "from-[#03AC0E] to-[#02891B]",
    },
    {
        number: 4,
        icon: BarChart,
        title: "보고 및 피드백",
        description: "업로드가 완료되면 캡쳐 및 스크린샷으로 리뷰 업로드 여부 확인 등을 종합하여 보고드립니다.",
        color: "from-[#02891B] to-[#E5FFE8]",
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section className='py-20 bg-white overflow-hidden' ref={containerRef}>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    광고 진행 과정
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-16 max-w-2xl mx-auto font-tway'
                >
                    체계적인 프로세스로 효과적인 마케팅을 진행합니다
                </motion.p>

                <div className='max-w-5xl mx-auto'>
                    <div className='relative'>
                        {/* Progress Line */}
                        <div className='absolute left-[45px] top-0 bottom-0 w-1 bg-gray-100 sm:left-1/2 sm:-ml-[2px]' />
                        <motion.div
                            className='absolute left-[45px] top-0 w-1 bg-gradient-to-b from-[#03AC0E] to-[#E5FFE8] origin-top sm:left-1/2 sm:-ml-[2px]'
                            style={{
                                scaleY: scrollYProgress,
                                height: "100%",
                            }}
                        />

                        {/* Steps */}
                        <div className='space-y-12 relative'>
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`flex items-center ${
                                        index % 2 === 0 ? "flex-row sm:flex-row-reverse" : ""
                                    }`}
                                >
                                    <div className='flex-1'>
                                        <Card className={`p-6 mx-12 sm:mx-16 bg-gradient-to-br ${step.color} text-white`}>
                                            <step.icon className='w-8 h-8 mb-4' />
                                            <h3 className='text-xl font-bold mb-2 font-aggro'>{step.title}</h3>
                                            <p className='font-tway'>{step.description}</p>
                                        </Card>
                                    </div>

                                    <div
                                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl font-bold text-white border-4 border-white absolute ${
                                            index % 2 === 0
                                                ? "left-0 sm:left-1/2 sm:-translate-x-1/2"
                                                : "left-0 sm:left-1/2 sm:-translate-x-1/2"
                                        }`}
                                    >
                                        {step.number}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 