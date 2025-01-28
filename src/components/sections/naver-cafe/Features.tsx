import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
    {
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400",
        title: "커뮤니티 영향력",
        description: "국내 최대 커뮤니티 플랫폼에서 브랜드의 영향력을 확대",
    },
    {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        title: "맞춤형 타겟팅",
        description: "관심사, 지역, 연령대별 정교한 타겟팅으로 효율적인 마케팅 진행",
    },
    {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
        title: "자연스러운 바이럴",
        description: "실제 사용자들의 자발적인 참여로 신뢰도 높은 바이럴 효과 창출",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        title: "데이터 분석",
        description: "실시간 반응과 참여도 분석으로 마케팅 전략 최적화",
    },
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-green-50'>
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
                    국내 최대 커뮤니티 플랫폼에서 시작하는 새로운 마케팅
                    <br />
                    자연스러운 바이럴 효과로 브랜드의 가치를 높이세요
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='h-full mx-4 sm:mx-0'
                        >
                            <Card className='h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group'>
                                <div className='relative h-48 flex-shrink-0'>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>
                                <div className='p-6 flex flex-col flex-grow'>
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-tway'>{feature.title}</h3>
                                    <p className='text-gray-600 font-tway'>{feature.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
