import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Bot, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useRef, useState } from "react";

export function MainPage() {
    const { scrollYProgress } = useScroll();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    // 배경 그라데이션 애니메이션
    const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
    const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(147,51,234,0.15), transparent 70%)`;

    // 스크롤 기반 애니메이션
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // 숫자 카운팅 애니메이션을 위한 커스텀 훅
    const useCountAnimation = (end: number, duration: number = 2) => {
        const [count, setCount] = useState(0);
        const nodeRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const node = nodeRef.current;
            if (!node) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            let startTime: number;
                            const animate = (currentTime: number) => {
                                if (!startTime) startTime = currentTime;
                                const progress = (currentTime - startTime) / (duration * 1000);
                                
                                if (progress < 1) {
                                    setCount(Math.floor(end * progress));
                                    requestAnimationFrame(animate);
                                } else {
                                    setCount(end);
                                }
                            };
                            requestAnimationFrame(animate);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(node);
            return () => observer.disconnect();
        }, [end, duration]);

        return { count, ref: nodeRef };
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white" onMouseMove={handleMouseMove}>
                {/* 히어로 섹션 */}
                <section className="relative min-h-screen flex items-center pt-20">
                        <motion.div 
                        className="absolute inset-0" 
                        style={{ background }}
                    />
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            style={{
                                scale: scaleProgress,
                                opacity: opacityProgress
                            }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100 
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Bridge Marketing
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro leading-tight"
                            >
                                당신의 사업을 성장시킬<br />단 하나의 솔루션
                            </motion.h1>

                            {/* 통계 섹션 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="grid grid-cols-3 gap-8 my-16"
                            >
                                {[
                                    { value: 92, suffix: "%", label: "고객사 재구매율" },
                                    { value: 34000, suffix: "+", label: "누적 작업횟수" },
                                    { value: 4.9, suffix: "", label: "평균 만족도" }
                                ].map((stat, index) => {
                                    const { count, ref } = useCountAnimation(
                                        typeof stat.value === 'number' ? stat.value : 0
                                    );
                                    
                                    return (
                                    <motion.div
                                        key={stat.label}
                                            ref={ref}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                delay: 0.8 + index * 0.2,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            whileHover={{ 
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="relative group"
                                    >
                                        <motion.div
                                                className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                initial={false}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            <div className="relative p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
                                                <motion.div
                                                    className="text-4xl md:text-5xl font-bold text-purple-400 mb-2"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 1 + index * 0.2 }}
                                                >
                                                    {count}{stat.suffix}
                                                </motion.div>
                                                <motion.div
                                                    className="text-lg text-gray-400"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 1.2 + index * 0.2 }}
                                                >
                                                    {stat.label}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* CTA 버튼 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <Link
                                    to="/service"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                                        initial={false}
                                        whileHover={{
                                            opacity: [0, 1],
                                            transition: { duration: 0.3 }
                                        }}
                                    />
                                    <motion.div
                                        className="relative flex items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        서비스 알아보기
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </motion.div>
                                </Link>
                                <motion.a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 border-2 border-purple-600/50 text-purple-400 rounded-xl font-tway text-lg overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-purple-600/10"
                                        initial={false}
                                        whileHover={{
                                            opacity: [0, 1],
                                            transition: { duration: 0.3 }
                                        }}
                                    />
                                    <span className="relative">문의하기</span>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 실적 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
                        <motion.div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="inline-block relative"
                            >
                                <div className="text-xl text-purple-400 mb-2">
                                    누적 고객사
                                </div>
                                <div className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 relative z-10">716</div>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        repeatType: "reverse"
                                    }}
                                    className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-2xl text-gray-300"
                            >
                                업체 총 작업 건수 34,000건
                            </motion.div>
                        </motion.div>

                        {/* 로고 슬라이더 */}
                        <div className="overflow-hidden relative py-10">
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                            <motion.div
                                animate={{ x: [0, -2000] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "loop"
                                }}
                                className="flex gap-12"
                            >
                                {Array.from({ length: 30 }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-32 h-16 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-lg flex items-center justify-center border border-purple-500/10 backdrop-blur-sm"
                                    >
                                        <div className="w-20 h-8 bg-purple-500/10 rounded" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 포인트 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
                    <div className="container mx-auto px-4 relative">
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "경험과 인사이트의 결과, 성공",
                                    icon: <Sparkles className="h-8 w-8" />,
                                    description: [
                                        "9년 경력의 시니어 마케터가 직접 담당",
                                        "고객사 맞춤형 프로젝트 진행",
                                        "무료 상담을 통한 인사이트 제공"
                                    ]
                                },
                                {
                                    title: "데이터와 수치로 정형화된 KPI",
                                    icon: <Bot className="h-8 w-8" />,
                                    description: [
                                        "AI 기반 매체별 KPI 분석",
                                        "정확한 성과 측정 및 분석",
                                        "ROAS 기반 마케팅 전략 수립"
                                    ]
                                },
                                {
                                    title: "신속한 커뮤니케이션과 리포트",
                                    icon: <Zap className="h-8 w-8" />,
                                    description: [
                                        "전담 마케터 1:1 배정",
                                        "실시간 카카오톡 소통",
                                        "주간/월간 데이터 리포트 제공"
                                    ]
                                }
                            ].map((point, index) => (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 h-full">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="relative">
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 0.8, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"
                                                />
                                                <div className="relative rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4">
                                                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                                                        {point.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {point.description.map((text, i) => (
                                                <motion.p
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + i * 0.1 }}
                                                    className="text-gray-400 leading-relaxed whitespace-pre-line"
                                                >
                                                    {text}
                                                </motion.p>
                                            ))}
                                        </div>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 서비스 섹션 */}
                <section className="py-32 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4"
                    >
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Services
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold mb-6"
                            >
                                다양한 플랫폼에서 효과적인<br />바이럴 마케팅을 제공합니다
                            </motion.h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "/logo/everytime.png",
                                    title: "에브리타임",
                                    description: "대학생 타겟 바이럴 마케팅",
                                    features: ["학교별 타겟팅", "실제 재학생 마케팅", "높은 도달률"],
                                    gradient: "from-[#FFD1D1] to-[#FFE5E5]",
                                    link: "/everytime"
                                },
                                {
                                    icon: "/logo/blind.png",
                                    title: "블라인드",
                                    description: "직장인 타겟 바이럴 마케팅",
                                    features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도"],
                                    gradient: "from-[#E5F7FF] to-[#F5FBFF]",
                                    link: "/blind"
                                },
                                {
                                    icon: "/logo/tiktok.png",
                                    title: "틱톡",
                                    description: "MZ세대 타겟 바이럴 마케팅",
                                    features: ["MZ세대 타겟팅", "숏폼 콘텐츠", "높은 전환율"],
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
                                            <ul className="space-y-3">
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
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center mt-12"
                        >
                            <Link
                                to="/service"
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center">
                                    서비스 전체보기
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
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
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Ready to Start?
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-display"
                            >
                                지금 시작하세요
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-12 leading-relaxed"
                            >
                                브릿지마케팅과 함께라면<br className="md:hidden" />
                                당신의 마케팅이 더욱 특별해집니다.
                                <br />
                                지금 바로 무료 상담을 받아보세요.
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
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
} 