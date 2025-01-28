import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,172,14,0.15),transparent_70%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        네이버 플레이스 상위노출
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-xl text-gray-400 mb-8"
                    >
                        네이버 지도와 검색에서 매장의 노출도를 높여<br />
                        방문자 수를 증가시키는 서비스입니다
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center py-3 px-8 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors w-full sm:w-auto"
                        >
                            무료 상담하기
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center py-3 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors w-full sm:w-auto"
                        >
                            포트폴리오 보기
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 