import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const industries = [
    {
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400",
        title: "식당/카페",
        description: "맛집, 카페 등 외식업체의 방문자 수 증가",
    },
    {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400",
        title: "병원/의원",
        description: "의료기관의 신규 환자 유치 및 인지도 상승",
    },
    {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
        title: "학원/교육",
        description: "교육기관의 수강생 모집 및 브랜드 인지도 향상",
    },
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400",
        title: "뷰티/미용",
        description: "미용실, 네일샵 등 뷰티 업체의 고객 유치",
    },
];

export function Industries() {
    return (
        <section className='py-20 bg-gradient-to-br from-green-50 to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    추천 업종
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    네이버 지도와 검색에서 높은 노출이 필요한 업종들을 위해
                    <br />
                    맞춤형 상위노출 전략을 제공합니다.
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='h-full'
                        >
                            <Card className='h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300'>
                                <div className='relative h-48 flex-shrink-0'>
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>
                                <div className='p-6 flex flex-col flex-grow'>
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-tway'>{industry.title}</h3>
                                    <p className='text-gray-600 font-tway'>{industry.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 