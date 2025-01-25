import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export function MainPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* 히어로 섹션 */}
                <section className="relative h-screen flex items-center bg-gradient-to-br from-purple-50 to-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-aggro bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                바이럴 마케팅의 새로운 기준
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-tway">
                                에브리타임, 블라인드, 틱톡까지<br />
                                효과적인 바이럴 마케팅 솔루션을 제공합니다
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/service"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-tway text-lg hover:from-purple-700 hover:to-indigo-700 transition-all hover:shadow-lg flex items-center group"
                                >
                                    서비스 알아보기
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-tway text-lg hover:bg-purple-50 transition-all"
                                >
                                    문의하기
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 서비스 소개 섹션 */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold mb-12 text-center font-aggro">
                                브릿지마케팅만의 특별한 서비스
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFD1D1] to-[#FFE5E5]">
                                    <h3 className="text-xl font-bold mb-4 font-tway">에브리타임</h3>
                                    <p className="text-gray-700 mb-4 font-tway">학교별 맞춤형 바이럴 마케팅으로 대학생 타겟층에 효과적으로 도달합니다.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E5F7FF] to-[#F5FBFF]">
                                    <h3 className="text-xl font-bold mb-4 font-tway">블라인드</h3>
                                    <p className="text-gray-700 mb-4 font-tway">직장인들의 일상적인 대화 속에서 자연스러운 바이럴 마케팅을 진행합니다.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00F2EA] to-[#FF0050]">
                                    <h3 className="text-xl font-bold mb-4 font-tway text-white">틱톡</h3>
                                    <p className="text-white mb-4 font-tway">MZ세대를 사로잡는 숏폼 콘텐츠로 높은 전환율을 달성합니다.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 