import { motion } from "framer-motion";

const stats = [
    {
        value: "4,500만",
        label: "월간 활성 사용자",
        description: "네이버 카페의 월간 활성 사용자 수"
    },
    {
        value: "92%",
        label: "높은 신뢰도",
        description: "네이버 카페 사용자들의 정보 신뢰도"
    },
    {
        value: "300%",
        label: "평균 ROI",
        description: "바이럴 마케팅 캠페인의 평균 투자 수익률"
    },
    {
        value: "24시간",
        label: "실시간 모니터링",
        description: "365일 24시간 실시간 모니터링 제공"
    }
];

export function Stats() {
    return (
        <section className="py-20 relative overflow-hidden">
            <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,172,14,0.1),transparent_70%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            네이버 카페 마케팅의 힘
                        </h2>
                        <p className="text-gray-400">
                            국내 최대 커뮤니티 플랫폼에서<br />
                            효과적인 바이럴 마케팅을 진행하세요
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-gray-900/50 rounded-xl p-6 text-center"
                            >
                                <div className="text-3xl font-bold text-green-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-white mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 