import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Target, BarChart3, MessageSquare, Search, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "타겟 맞춤형 마케팅",
        description: "맘카페, 지역카페, 취미카페 등 다양한 카페에서 타겟에 맞는 마케팅을 진행합니다."
    },
    {
        icon: Target,
        title: "정확한 타겟팅",
        description: "관심사, 지역, 연령대 등을 고려한 정확한 타겟팅으로 효과적인 마케팅을 실현합니다."
    },
    {
        icon: BarChart3,
        title: "데이터 기반 전략",
        description: "실시간 데이터 분석을 통해 최적의 마케팅 전략을 수립하고 실행합니다."
    },
    {
        icon: MessageSquare,
        title: "자연스러운 바이럴",
        description: "실제 카페 회원들의 자연스러운 후기와 경험담으로 신뢰도 높은 바이럴을 진행합니다."
    },
    {
        icon: Search,
        title: "SEO 최적화",
        description: "네이버 검색 노출을 극대화하는 SEO 최적화 전략을 제공합니다."
    },
    {
        icon: TrendingUp,
        title: "성과 분석",
        description: "상세한 성과 분석 리포트를 제공하여 마케팅 효과를 정확하게 측정합니다."
    }
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-[#FFF5F0]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    네이버 카페 마케팅의 강점
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    대한민국 최대 커뮤니티 네이버 카페에서 
                    <br />
                    효과적인 마케팅을 시작하세요
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className='p-6 bg-white/50 backdrop-blur-sm border-none hover:bg-white/80 transition-colors'>
                                <feature.icon className='w-12 h-12 text-[#FF812D] mb-4' />
                                <h3 className='text-xl font-bold mb-2 font-aggro'>{feature.title}</h3>
                                <p className='text-gray-600 font-tway'>{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
