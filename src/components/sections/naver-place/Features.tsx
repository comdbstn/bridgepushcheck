import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
    {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        title: "검색 최적화",
        description: "네이버 지도와 검색에서 매장의 노출 순위를 높이는 최적화 전략",
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
        title: "리뷰 관리",
        description: "전문적인 리뷰 관리로 매장의 평판을 개선하고 신규 고객 유치",
    },
    {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
        title: "콘텐츠 제작",
        description: "매장의 특성을 살린 고퀄리티 사진과 영상 콘텐츠 제작",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        title: "경쟁력 분석",
        description: "주변 경쟁 업체 분석으로 차별화된 마케팅 전략 수립",
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
                    네이버 플레이스 마케팅의 강점
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    매장의 온라인 존재감을 높이는 최적의 마케팅 솔루션
                    <br />
                    검색 최적화와 리뷰 관리로 방문자 수를 늘리세요
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
