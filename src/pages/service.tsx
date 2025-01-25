import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ServicePage() {
    const { scrollYProgress } = useScroll();
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                {/* 히어로 섹션 */}
                <section className="pt-40 pb-20 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Services
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold mb-8 text-white"
                            >
                                마케팅 서비스
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-gray-400 text-lg mb-12"
                            >
                                브릿지마케팅의 다양한 서비스를 만나보세요
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* 서비스 섹션 */}
                <section className="py-24 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4"
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "/logo/everytime.png",
                                    title: "에브리타임",
                                    description: "대학생 타겟 바이럴 마케팅",
                                    features: [
                                        "학교별 맞춤 타겟팅",
                                        "실제 재학생을 통한 자연스러운 마케팅",
                                        "높은 도달률과 참여율",
                                        "대학생 커뮤니티 특화 전략"
                                    ],
                                    price: "월 150만원",
                                    gradient: "from-[#FFD1D1] to-[#FFE5E5]",
                                    link: "/everytime"
                                },
                                {
                                    icon: "/logo/blind.png",
                                    title: "블라인드",
                                    description: "직장인 타겟 바이럴 마케팅",
                                    features: [
                                        "업종별 맞춤 타겟팅",
                                        "자연스러운 바이럴 유도",
                                        "높은 신뢰도와 전문성",
                                        "직장인 커뮤니티 특화 전략"
                                    ],
                                    price: "월 200만원",
                                    gradient: "from-[#E5F7FF] to-[#F5FBFF]",
                                    link: "/blind"
                                },
                                {
                                    icon: "/logo/tiktok.png",
                                    title: "틱톡",
                                    description: "MZ세대 타겟 바이럴 마케팅",
                                    features: [
                                        "트렌디한 숏폼 콘텐츠 제작",
                                        "해시태그 전략 수립",
                                        "인플루언서 협업",
                                        "바이럴 효과 극대화"
                                    ],
                                    price: "월 250만원",
                                    gradient: "from-[#00F2EA] to-[#FF0050]",
                                    link: "/tiktok"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <Link
                                        to={service.link}
                                        className="block relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 transform-gpu hover:-translate-y-1"
                                    >
                                        <div className={`p-8 bg-gradient-to-br ${service.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                            <img
                                                src={service.icon}
                                                alt={service.title}
                                                className="h-12 w-12 object-contain mb-4"
                                            />
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-700">{service.description}</p>
                                        </div>

                                        <div className="p-6">
                                            <ul className="space-y-3 mb-6">
                                                {service.features.map((feature, fIndex) => (
                                                    <motion.li
                                                        key={fIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.6 + fIndex * 0.1 }}
                                                        className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                                                    >
                                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2" />
                                                        <span>{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                            <div className="flex items-center justify-between">
                                                <div className="text-purple-400 font-semibold">
                                                    {service.price}
                                                </div>
                                                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                                    자세히 보기
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA 섹션 */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-transparent blur-3xl"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <div className="max-w-3xl mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                            >
                                지금 바로 시작하세요
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-12"
                            >
                                브릿지마케팅과 함께라면<br className="md:hidden" />
                                당신의 마케팅이 더욱 특별해집니다
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-center"
                            >
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-10 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        상담 시작하기
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 