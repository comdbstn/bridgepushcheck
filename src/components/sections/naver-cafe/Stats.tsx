import { motion } from "framer-motion";
import { ChartBar, Users, Clock, TrendingUp, Target, Star, MessageCircle, Share } from "lucide-react";

const stats = [
    {
        value: "4,500만",
        label: "월간 활성 사용자",
        description: "네이버 카페의 월간 활성 사용자 수",
        icon: Users
    },
    {
        value: "92%",
        label: "높은 신뢰도",
        description: "네이버 카페 사용자들의 정보 신뢰도",
        icon: Star
    },
    {
        value: "300%",
        label: "평균 ROI",
        description: "바이럴 마케팅 캠페인의 평균 투자 수익률",
        icon: TrendingUp
    },
    {
        value: "24시간",
        label: "실시간 모니터링",
        description: "365일 24시간 실시간 모니터링 제공",
        icon: Clock
    },
    {
        value: "85%",
        label: "타겟 도달률",
        description: "정확한 타겟 고객층 도달 비율",
        icon: Target
    },
    {
        value: "150만",
        label: "일 평균 게시글",
        description: "네이버 카페 일일 평균 게시글 수",
        icon: MessageCircle
    },
    {
        value: "3.5배",
        label: "바이럴 효과",
        description: "일반 광고 대비 바이럴 마케팅 효과",
        icon: Share
    },
    {
        value: "78%",
        label: "재구매율",
        description: "기존 고객의 서비스 재구매율",
        icon: ChartBar
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
                <div className="max-w-6xl mx-auto">
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
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-gray-900/60 transition-colors duration-300"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                                    </div>
                                    <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg font-semibold text-white mb-2">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        {stat.description}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
} 
