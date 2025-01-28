import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, Target, TrendingUp, BarChart } from "lucide-react";

const processes = [
    {
        icon: Search,
        title: "현황 분석",
        description: "매장의 현재 상태와 경쟁사 분석을 통해 개선점을 파악합니다.",
    },
    {
        icon: Target,
        title: "전략 수립",
        description: "매장의 특성과 목표에 맞는 맞춤형 마케팅 전략을 수립합니다.",
    },
    {
        icon: TrendingUp,
        title: "최적화 진행",
        description: "네이버 플레이스와 지도 검색에서의 노출도를 높이는 최적화를 진행합니다.",
    },
    {
        icon: BarChart,
        title: "성과 분석",
        description: "실시간 순위와 방문자 데이터를 분석하여 전략을 개선합니다.",
    },
];

export function Process() {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 font-aggro">진행 과정</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        체계적인 프로세스를 통해 매장의 온라인 존재감을 높이고
                        실제 방문으로 이어지는 효과적인 마케팅을 진행합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {processes.map((process, index) => (
                        <motion.div
                            key={process.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                    <process.icon className="w-6 h-6 text-[#03AC0E]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-tway">{process.title}</h3>
                                <p className="text-gray-600 font-tway">{process.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 