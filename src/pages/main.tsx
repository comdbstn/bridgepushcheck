import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Bot, Zap, Sparkles, Code2 } from "lucide-react";
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
                                                    className="text-3xl font-bold text-purple-400 mb-2"
                                            initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                            transition={{ delay: 1 + index * 0.2 }}
                                        >
                                                    {count}{stat.suffix}
                                        </motion.div>
                                        <motion.div
                                                    className="text-gray-400"
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
                    
                    {/* ... 나머지 섹션들의 코드도 비슷한 방식으로 애니메이션 개선 ... */}
                </section>
                
                {/* ... 기존 섹션들 계속 ... */}
            </main>
            <Footer />
        </>
    );
} 