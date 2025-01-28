import { motion } from "framer-motion";
import { TrendingUp, Target, LineChart } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "매장 트래픽 증가",
        description: "자연스러운 방문자 유입을 통해 매장의 트래픽을 증가시킵니다."
    },
    {
        icon: Target,
        title: "상위노출 최적화",
        description: "네이버 지도와 검색에서 매장이 상위에 노출되도록 최적화합니다."
    },
    {
        icon: LineChart,
        title: "실시간 순위 분석",
        description: "매장의 노출 순위와 경쟁사 분석을 실시간으로 제공합니다."
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
                            브릿지마케팅의 네이버 플레이스 상위노출 서비스는<br />
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