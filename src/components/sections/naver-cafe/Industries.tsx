import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const industries = [
    {
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        title: "맘카페",
        description: "육아, 교육, 생활 정보를 공유하는 엄마들을 위한 마케팅",
    },
    {
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
        title: "뷰티/패션",
        description: "화장품, 패션, 미용 관련 제품 및 서비스",
    },
    {
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400",
        title: "지역 카페",
        description: "지역 기반 매장 및 서비스 홍보",
    },
    {
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
        title: "취준생/직장인",
        description: "취업, 이직, 자기계발 관련 서비스",
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
                    추천 카페
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    각 카페의 특성과 회원들의 성향을 고려한 맞춤형 마케팅으로
                    <br />
                    효과적인 바이럴 마케팅을 진행합니다.
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