import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Target, LineChart } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "최적화 전문가",
        descriptions: [
            "네이버 플레이스 최적화 전문가 보유",
            "매장별 맞춤 전략 수립"
        ]
    },
    {
        icon: Target,
        title: "자연스러운 트래픽",
        descriptions: [
            "자연스러운 방문자 유입 유도",
            "지속 가능한 상위노출 전략"
        ]
    },
    {
        icon: LineChart,
        title: "실시간 순위 분석",
        descriptions: [
            "24시간 실시간 순위 모니터링",
            "경쟁사 분석 및 전략 수정"
        ]
    }
];

export function Advantages() {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-green-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 font-aggro"
                >
                    브릿지마케팅만의 장점
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <advantage.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 font-tway">{advantage.title}</h3>
                                    <ul className="space-y-3 text-gray-600 font-tway">
                                        {advantage.descriptions.map((desc, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 