import { motion } from "framer-motion";
import { Search, PenTool, Send, LineChart } from "lucide-react";

const process = [
    {
        icon: Search,
        title: "타겟 분석",
        description: "타겟 고객이 활동하는 네이버 카페 분석 및 선정"
    },
    {
        icon: PenTool,
        title: "컨텐츠 기획",
        description: "카페별 특성에 맞는 자연스러운 바이럴 컨텐츠 기획"
    },
    {
        icon: Send,
        title: "바이럴 실행",
        description: "전문 작가진의 자연스러운 바이럴 마케팅 진행"
    },
    {
        icon: LineChart,
        title: "성과 분석",
        description: "실시간 모니터링 및 데이터 기반 성과 분석 리포트 제공"
    }
];

export function Process() {
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
                            진행 프로세스
                        </h2>
                        <p className="text-gray-400">
                            체계적인 프로세스를 통해<br />
                            효과적인 바이럴 마케팅을 진행합니다
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-gray-900/50 rounded-xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <step.icon className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 