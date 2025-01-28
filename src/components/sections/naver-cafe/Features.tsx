import { motion } from "framer-motion";
import { Users, Target, LineChart } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "타겟 카페 분석",
        description: "고객의 타겟층이 활동하는 네이버 카페를 분석하고 최적의 마케팅 전략을 수립합니다."
    },
    {
        icon: Users,
        title: "자연스러운 바이럴",
        description: "전문 작가진이 각 카페의 특성에 맞는 자연스러운 바이럴 컨텐츠를 제작합니다."
    },
    {
        icon: LineChart,
        title: "실시간 모니터링",
        description: "실시간 반응과 효과를 모니터링하고 데이터 기반의 성과 분석 리포트를 제공합니다."
    }
];

export function Features() {
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
                            주요 기능
                        </h2>
                        <p className="text-gray-400">
                            브릿지마케팅의 네이버 카페 바이럴 마케팅 서비스는<br />
                            다음과 같은 핵심 기능을 제공합니다
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-gray-900/50 rounded-xl p-6"
                            >
                                <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 