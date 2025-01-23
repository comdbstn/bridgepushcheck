import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="text-blue-600 font-semibold text-lg font-tway mb-4 block">
                            BLIND VIRAL MARKETING
                        </span>
                        <h2 className="text-5xl font-bold mb-6 font-aggro bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            블라인드 바이럴 마케팅
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <p className="text-xl text-gray-700 font-tway leading-relaxed mb-6">
                            가장 큰 직장인 커뮤니티 "블라인드"에서
                            <br />
                            <span className="text-blue-600 font-semibold">게시글과 댓글을 통한 자연스러운 바이럴마케팅</span>을 진행합니다.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="font-tway">직장인들의 일상적인 대화 속에 자연스럽게 녹아드는 마케팅</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="font-tway">실제 직장인들의 경험담으로 신뢰도 높은 컨텐츠 제작</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="font-tway">타겟층에 직접 도달하는 효과적인 마케팅 전략</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 