import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Sparkles, Code2, Layout, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export function MainPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white">
                {/* 히어로 섹션 */}
                <section className="relative min-h-screen flex items-center pt-20">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }} 
                            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Bridge Marketing
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro leading-tight"
                            >
                                당신의 사업을 성장시킬<br />단 하나의 솔루션
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="grid grid-cols-3 gap-8 my-16"
                            >
                                {[
                                    { value: "92%", label: "고객사 재구매율" },
                                    { value: "34K+", label: "누적 작업횟수" },
                                    { value: "4.9", label: "평균 만족도" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 + index * 0.2 }}
                                            className="text-3xl font-bold text-purple-400 mb-2"
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.2 + index * 0.2 }}
                                            className="text-gray-400"
                                        >
                                            {stat.label}
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
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
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        서비스 알아보기
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 border-2 border-purple-600/50 text-purple-400 rounded-xl font-tway text-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative">문의하기</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 실적 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
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
                                <motion.div
                                    className="text-xl text-purple-400 mb-2"
                                >
                                    누적 고객사
                                </motion.div>
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
                                        {/* 로고 이미지 추가 예정 */}
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
                                        "브릿지마케팅은 직접 창업을 진행해왔고, 마케팅 업계에서 9년의 경력을 가진 시니어 인재가 직접 담당합니다.",
                                        "고객사의 입장에서 프로젝트를 바라보고 함께 성장하겠습니다.",
                                        "간단한 문의만 받아도 모든 인사이트를 얻어가실 수 있습니다."
                                    ]
                                },
                                {
                                    title: "데이터와 수치로 정형화된 KPI",
                                    icon: <Bot className="h-8 w-8" />,
                                    description: [
                                        "BridgeMarketing은 모든 매체의 KPI를 학습하여 고도화된 AI마케터와 함께합니다.",
                                        "단순히 감과 경험에 의지하지 않습니다.",
                                        "모든 매체의 특징과 성능 및 전환율을 정확하게 인지하고있습니다.",
                                        "비용, 매출, 기대수익 및 roas를 정확하게 계상하여 제안드립니다."
                                    ]
                                },
                                {
                                    title: "신속한 커뮤니케이션과 리포트",
                                    icon: <Zap className="h-8 w-8" />,
                                    description: [
                                        "전담 마케터를 배정한 후,\n전화 및 카카오톡을 통해 실시간 소통을 진행합니다.",
                                        "또한 구글 스프레드 시트와 엑셀 등을 활용하여\n일별, 주별, 월별 데이터를 아카이빙하여 고객사에 제공합니다."
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

                {/* 특징 섹션 */}
                <section className="py-24 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-transparent" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <motion.div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="font-display">
                                <span className="block text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                                    마케팅의 패러다임
                                </span>
                                <span className="block text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                                    이제는 달라져야 합니다
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Bot className="h-8 w-8" />,
                                    title: "맞춤형 컨설팅",
                                    description: "각 업체의 특성을 정확히 이해 후\n수치를 기반으로 제안",
                                    stat: { value: 300, unit: "%", label: "마케팅 효율 증가" }
                                },
                                {
                                    icon: <Zap className="h-8 w-8" />,
                                    title: "자연스러운 바이럴",
                                    description: "실제 유저들의 자연스러운\n입소문 마케팅",
                                    stats: [
                                        { value: 98, unit: "%", label: "고객 만족도" },
                                        { value: 85, unit: "%", label: "재계약률" }
                                    ]
                                },
                                {
                                    icon: <Sparkles className="h-8 w-8" />,
                                    title: "검증된 성과",
                                    description: "누적 고객사 716+\n총 작업건수 34,000건",
                                    stats: [
                                        { value: 50, unit: "+", label: "월 평균 프로젝트" },
                                        { value: 200, unit: "+", label: "월 평균 작업량" }
                                    ]
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative group perspective"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />

                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 h-full transform-gpu group-hover:translate-y-[-0.5rem] group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="relative rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4 w-fit group-hover:scale-110 transition-transform duration-500">
                                                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                                {item.description}
                                            </p>

                                            {"stat" in item && item.stat ? (
                                                <div className="bg-purple-500/10 rounded-xl p-4 text-center mt-4">
                                                    <div className="text-3xl font-bold text-purple-400">
                                                        {item.stat.value}{item.stat.unit}
                                                    </div>
                                                    <div className="text-sm text-gray-400 mt-1">{item.stat.label}</div>
                                                </div>
                                            ) : "stats" in item ? (
                                                <div className="grid grid-cols-2 gap-4 mt-4">
                                                    {item.stats.map((stat, index) => (
                                                        <div key={index} className="bg-purple-500/10 rounded-xl p-4 text-center">
                                                            <div className="text-2xl font-bold text-purple-400">
                                                                {stat.value}{stat.unit}
                                                            </div>
                                                            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* 서비스 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />
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
                            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
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
                                className="text-4xl font-bold mb-4 text-white font-display"
                            >
                                다양한 플랫폼에서 효과적인<br className="md:hidden" />
                                바이럴 마케팅을 제공합니다
                            </motion.h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "/logo/everytime-logo.png",
                                    title: "에브리타임",
                                    description: "대학생 타겟 바이럴 마케팅",
                                    features: ["학교별 타겟팅", "실제 재학생 마케팅", "높은 도달률"],
                                    gradient: "from-[#FFD1D1] to-[#FFE5E5]",
                                    link: "https://everytime.kr"
                                },
                                {
                                    icon: "/logo/blind-logo.png",
                                    title: "블라인드",
                                    description: "직장인 타겟 바이럴 마케팅",
                                    features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도"],
                                    gradient: "from-[#E5F7FF] to-[#F5FBFF]",
                                    link: "https://www.teamblind.com/kr/"
                                },
                                {
                                    icon: "/logo/tiktok-logo.png",
                                    title: "틱톡",
                                    description: "MZ세대 타겟 바이럴 마케팅",
                                    features: ["MZ세대 타겟팅", "숏폼 콘텐츠", "높은 전환율"],
                                    gradient: "from-[#00F2EA] to-[#FF0050]",
                                    link: "https://www.tiktok.com"
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
                                    <a
                                        href={service.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 transform-gpu hover:-translate-y-1"
                                    >
                                        <div className={`p-8 bg-gradient-to-br ${service.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
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
                                                className="absolute inset-0 bg-white/20 blur-3xl rounded-full"
                                            />
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                                <p className="text-gray-800">{service.description}</p>
                                            </div>
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
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.8 }}
                                                className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors"
                                            >
                                                <span className="font-medium">자세히 보기</span>
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                        />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center mt-12"
                        >
                            <Link
                                to="/service"
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center">
                                    서비스 전체보기
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

                {/* 추가 섹션: 프로세스 */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Process
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl font-bold mb-4 text-white font-display"
                            >
                                체계적인 프로세스로<br className="md:hidden" />
                                최상의 결과를 만듭니다
                            </motion.h2>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "무료 상담",
                                    description: "프로젝트의 목표와 요구사항을 파악하고 최적의 전략을 제안합니다."
                                },
                                {
                                    step: "02",
                                    title: "맞춤 전략 수립",
                                    description: "데이터 분석을 통해 타겟 고객과 플랫폼별 최적화된 전략을 수립합니다."
                                },
                                {
                                    step: "03",
                                    title: "실행 및 모니터링",
                                    description: "전문 마케터가 전략을 실행하고 실시간으로 성과를 모니터링합니다."
                                },
                                {
                                    step: "04",
                                    title: "성과 분석 및 개선",
                                    description: "데이터 기반으로 성과를 분석하고 지속적인 개선점을 도출합니다."
                                }
                            ].map((process, index) => (
                                <motion.div
                                    key={process.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500">
                                        <div className="text-4xl font-bold text-purple-400 mb-4">{process.step}</div>
                                        <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                                        <p className="text-gray-400">{process.description}</p>
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
            </main>
            <Footer />
        </>
    );
} 