import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-green-600 font-semibold text-lg font-tway mb-6 block">
                        NAVER PLACE EXPOSURE
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                        네이버 플레이스 상위노출
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <p className="text-2xl text-gray-700 font-tway leading-relaxed mb-10">
                        네이버 지도와 검색에서
                        <br />
                        <span className="text-green-600 font-semibold">매장의 노출도를 높여 방문자 수를 증가</span>시킵니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">자연스러운 방문자 유입을 통한 매장 트래픽 증가</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">네이버 지도와 검색에서 상위 노출 최적화</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">실시간 순위 모니터링과 경쟁사 분석</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 