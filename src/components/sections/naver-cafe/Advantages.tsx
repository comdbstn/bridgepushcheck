import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Users, LineChart } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "전문 작가진 보유",
        descriptions: [
            "각 카페의 특성을 이해하는 전문 작가진 보유",
            "자연스러운 바이럴 컨텐츠 제작 능력"
        ]
    },
    {
        icon: Users,
        title: "다양한 카페 네트워크",
        descriptions: [
            "맘카페, 뷰티, 지역, 취준생 등 다양한 카페 네트워크 보유",
            "타겟에 맞는 최적의 카페 선정"
        ]
    },
    {
        icon: LineChart,
        title: "데이터 기반 성과 분석",
        descriptions: [
            "실시간 모니터링 및 성과 분석",
            "주간/일간 리포트 제공"
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