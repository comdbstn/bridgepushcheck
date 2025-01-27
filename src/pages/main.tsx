import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight, Bot, Zap, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useRef, useState, useMemo } from "react";
import { Loading } from "@/components/ui/loading";

// 로고 배열 생성
const clientLogos = [
    "/logo/0.png", "/logo/1.jpg", "/logo/2.png", "/logo/3.png", 
    "/logo/4.jpg", "/logo/5.png", "/logo/6.png", "/logo/7.svg", 
    "/logo/8.jpg", "/logo/9.png", "/logo/10.png", "/logo/12.png", 
    "/logo/13.png", "/logo/14.png", "/logo/15.png", "/logo/16.png", 
    "/logo/17.png", "/logo/18.png", "/logo/19.jpg", "/logo/20.png",
    "/logo/21.png", "/logo/22.png", "/logo/23.png", "/logo/24.png", 
    "/logo/25.jpg", "/logo/26.png", "/logo/27.png", "/logo/28.jpg", 
    "/logo/29.png", "/logo/30.png", "/logo/31.png", "/logo/32.png",
    "/logo/33.webp", "/logo/34.png", "/logo/35.png", "/logo/36.png",
    "/logo/37.webp", "/logo/38.png", "/logo/39.jpg"
];

export function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const shouldRestore = location.state?.shouldRestore;
    const savedScrollPosition = location.state?.scrollPosition;

    useEffect(() => {
        if (shouldRestore && savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
        }
    }, [shouldRestore, savedScrollPosition]);

    // 브라우저 뒤로가기 처리
    useEffect(() => {
        const handlePopState = () => {
            const currentScroll = window.scrollY;
            navigate('/', {
                state: { shouldRestore: true, scrollPosition: currentScroll }
            });
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [navigate]);

    const handleServiceClick = (serviceId: string) => {
        const currentScroll = window.scrollY;
        return {
            state: {
                from: '/',
                scrollPosition: currentScroll
            }
        };
    };

    // 1. State Hooks
    const [isLoading, setIsLoading] = useState(true);
    const [statsCounts, setStatsCounts] = useState([0, 0, 0]);

    // 2. Motion Hooks
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
    const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(147,51,234,0.15), transparent 70%)`;

    // 3. Ref Hooks
    const statsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    // 4. Constants
    const statsData = useMemo(() => [
        { value: 92, suffix: "%", label: "고객사 재구매율" },
        { value: 34000, suffix: "+", label: "누적 작업횟수" },
        { value: 4.9, suffix: "", label: "평균 만족도" }
    ], []);

    // 5. Effect Hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // 로딩이 끝나면 바로 통계 카운트 시작
            statsData.forEach((stat, index) => {
                let startTime: number;
                const endValue = stat.value;
                const duration = 1.5;

                const animate = (currentTime: number) => {
                    if (!startTime) startTime = currentTime;
                    const progress = (currentTime - startTime) / (duration * 1000);

                    if (progress < 1) {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = Math.floor(endValue * progress);
                            return newCounts;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = endValue;
                            return newCounts;
                        });
                    }
                };
                requestAnimationFrame(animate);
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [statsData]);

    // 6. Event Handlers
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    if (isLoading) return <Loading />;

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
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 150 
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
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 150
                                }}
                                className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro leading-tight"
                            >
                                당신의 사업을 성장시킬<br />단 하나의 솔루션
                            </motion.h1>

                            {/* 통계 섹션 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="grid grid-cols-3 gap-8 my-16"
                            >
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        ref={statsRefs[index]}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: 0.3 + index * 0.1,
                                            type: "spring",
                                            stiffness: 150
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
                                                {statsCounts[index]}{stat.suffix}
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
                                ))}
                            </motion.div>

                            {/* CTA 버튼 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
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
                        </div>
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

                        {/* 누적 고객사 로고 그리드 */}
                        <div className="relative w-full overflow-hidden">
                            {[0, 1, 2].map((row) => (
                                <motion.div
                                    key={row}
                                    className="flex gap-8 py-4"
                                    initial={{ x: row % 2 === 0 ? "0%" : "-100%" }}
                                    animate={{ x: row % 2 === 0 ? "-100%" : "0%" }}
                                    transition={{
                                        duration: 50,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {[...clientLogos, ...clientLogos].slice(row * 13, (row + 1) * 13).map((logo, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                        >
                                            <img
                                                src={logo}
                                                alt={`Client ${index + 1}`}
                                                className="h-[60px] w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
                        </div>
                    </div>
                </section>

                {/* 마케팅 패러다임 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
                    </motion.div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                마케팅의 패러다임
                            </h2>
                            <p className="text-xl text-gray-400">이제는 달라져야 합니다</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    title: "맞춤형 타겟팅",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    value: "300%",
                                    description: "마케팅 효율 증가",
                                    subtext: "각 플랫폼별 특성을 고려한\n최적의 타겟팅 전략"
                                },
                                {
                                    title: "자연스러운 바이럴",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 11.5C21.0034 13.8199 19.9932 16.0358 18.1173 17.6987C16.2414 19.3617 13.6526 20.3146 11 20.3146C9.6555 20.3146 8.3458 20.0253 7.1654 19.4746L3 21L4.5254 16.8346C3.97474 15.6542 3.6854 14.3445 3.6854 13C3.6854 10.3474 4.63825 7.7586 6.30124 5.88276C7.96423 4.00693 10.1801 2.9966 12.5 3H13C16.0782 3.11499 19.0067 4.39533 21.1612 6.54976C23.3158 8.7042 24.5962 11.6327 24.7112 14.7109V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    value: "98%",
                                    description: "고객 만족도",
                                    subtext: "실제 유저들의 자연스러운\n입소문 마케팅"
                                },
                                {
                                    title: "검증된 성과",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    stats: [
                                        { value: "716", label: "누적 고객사" },
                                        { value: "34,000", label: "총 작업 건수" },
                                        { value: "85%", label: "재계약률" }
                                    ],
                                    subtext: "수많은 성공 사례로\n입증된 마케팅 효과"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            {item.icon}
                                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                        </div>
                                        {item.stats ? (
                                            <div className="space-y-4 mb-6">
                                                {item.stats.map((stat, i) => (
                                                    <motion.div
                                                        key={stat.label}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.4 + i * 0.1 }}
                                                        className="flex items-center justify-between"
                                                    >
                                                        <span className="text-gray-400">{stat.label}</span>
                                                        <span className="text-2xl font-bold text-purple-400">{stat.value}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                                                    {item.value}
                                                </div>
                                                <div className="text-xl text-gray-300 mb-6">{item.description}</div>
                                            </>
                                        )}
                                        <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                                            {item.subtext}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
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
                        animate={{ opacity: 1 }}
                        className="container mx-auto px-4"
                    >
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Services
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                                        state={handleServiceClick(service.title)}
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