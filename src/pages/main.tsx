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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-transparent" />
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_50%)]" />
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-700" />
                    </div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <span className="inline-block px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6">
                                Bridge Marketing
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro">
                                당신의 사업을 성장시킬<br />단 하나의 솔루션
                            </h1>
                            <div className="grid grid-cols-3 gap-8 my-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                                    <div className="text-gray-400">고객사 재구매율</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">34K+</div>
                                    <div className="text-gray-400">누적 작업횟수</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">4.9</div>
                                    <div className="text-gray-400">평균 만족도</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/service"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg hover:from-purple-700 hover:to-indigo-700 transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center group"
                                >
                                    서비스 알아보기
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 border-2 border-purple-600 text-purple-400 rounded-xl font-tway text-lg hover:bg-purple-600/10 transition-all"
                                >
                                    문의하기
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 실적 섹션 */}
                <section className="py-16 bg-black/50 backdrop-blur-sm relative">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="text-5xl font-bold text-purple-400 mb-4">716</div>
                            <div className="text-2xl text-gray-300">업체 총 작업 건수 34,000건</div>
                        </motion.div>
                        
                        {/* 로고 슬라이더 */}
                        <div className="overflow-hidden relative">
                            <motion.div
                                animate={{ x: [0, -2000] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="flex gap-8"
                            >
                                {Array.from({ length: 30 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-32 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center"
                                    >
                                        {/* 로고 이미지 추가 예정 */}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 포인트 섹션 */}
                <section className="py-24 bg-black relative">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">경험과 인사이트의 결과, 성공</h3>
                                <div className="space-y-4 text-gray-400">
                                    <p>브릿지마케팅은 직접 창업을 진행해왔고, 마케팅 업계에서 9년의 경력을 가진 시니어 인재가 직접 담당합니다.</p>
                                    <p>고객사의 입장에서 프로젝트를 바라보고 함께 성장하겠습니다.</p>
                                    <p>간단한 문의만 받아도 모든 인사이트를 얻어가실 수 있습니다.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">데이터와 수치로 정형화된 KPI</h3>
                                <div className="space-y-4 text-gray-400">
                                    <p>BridgeMarketing은 모든 매체의 KPI를 학습하여 고도화된 AI마케터와 함께합니다.</p>
                                    <p>단순히 감과 경험에 의지하지 않습니다.</p>
                                    <p>모든 매체의 특징과 성능 및 전환율을 정확하게 인지하고있습니다.</p>
                                    <p>비용, 매출, 기대수익 및 roas를 정확하게 계상하여 제안드립니다.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">신속한 커뮤니케이션과 리포트</h3>
                                <div className="space-y-4 text-gray-400">
                                    <p>전담 마케터를 배정한 후,<br />전화 및 카카오톡을 통해 실시간 소통을 진행합니다.</p>
                                    <p>또한 구글 스프레드 시트와 엑셀 등을 활용하여<br />일별, 주별, 월별 데이터를 아카이빙하여 고객사에 제공합니다.</p>
                                </div>
                            </motion.div>
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
                                    바이럴 마케팅의 패러다임
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
                                    title: "맞춤형 타겟팅",
                                    description: "각 플랫폼별 특성을 고려한\n최적의 타겟팅 전략",
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
                                    description: "수많은 성공 사례로\n입증된 마케팅 효과",
                                    stats: [
                                        { value: 50, unit: "+", label: "누적 고객사" },
                                        { value: 200, unit: "+", label: "프로젝트 완료" }
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
                <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-white font-display">Our Services</h2>
                            <p className="text-gray-400 text-lg">
                                다양한 플랫폼에서 효과적인 <br className="md:hidden" />
                                바이럴 마케팅을 제공합니다
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Layout className="h-8 w-8" />,
                                    title: "에브리타임",
                                    description: "대학생 타겟 바이럴 마케팅",
                                    features: ["학교별 타겟팅", "실제 재학생 마케팅", "높은 도달률"],
                                    gradient: "from-[#FFD1D1] to-[#FFE5E5]"
                                },
                                {
                                    icon: <Code2 className="h-8 w-8" />,
                                    title: "블라인드",
                                    description: "직장인 타겟 바이럴 마케팅",
                                    features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도"],
                                    gradient: "from-[#E5F7FF] to-[#F5FBFF]"
                                },
                                {
                                    icon: <Smartphone className="h-8 w-8" />,
                                    title: "틱톡",
                                    description: "MZ세대 타겟 바이럴 마케팅",
                                    features: ["MZ세대 타겟팅", "숏폼 콘텐츠", "높은 전환율"],
                                    gradient: "from-[#00F2EA] to-[#FF0050]"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <Link
                                        to={`/${service.title.toLowerCase()}`}
                                        className="block bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                                    >
                                        <div className={`p-8 bg-gradient-to-br ${service.gradient}`}>
                                            <div className="w-12 h-12 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                                <div className="text-gray-900">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                            <p className="text-gray-800">{service.description}</p>
                                        </div>

                                        <div className="p-6">
                                            <ul className="space-y-3">
                                                {service.features.map((feature, fIndex) => (
                                                    <li
                                                        key={fIndex}
                                                        className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                                                    >
                                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <span className="font-medium">자세히 보기</span>
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA 섹션 */}
                <section className="py-32 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-transparent" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-display">
                                Ready to Start?
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                브릿지마케팅과 함께라면<br className="md:hidden" />
                                당신의 마케팅이 더욱 특별해집니다.
                                <br />
                                지금 바로 무료 상담을 받아보세요.
                            </p>
                            <div className="flex justify-center">
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg hover:from-purple-700 hover:to-indigo-700 transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center group"
                                >
                                    상담 시작하기
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
} 