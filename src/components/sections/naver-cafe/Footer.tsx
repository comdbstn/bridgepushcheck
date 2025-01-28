import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <section className="py-20 relative overflow-hidden">
            <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,172,14,0.15),transparent_70%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        지금 바로 시작하세요
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-xl text-gray-400 mb-8"
                    >
                        브릿지마케팅과 함께<br />
                        효과적인 네이버 카페 바이럴 마케팅을 시작하세요
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center py-3 px-8 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            무료 상담하기
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 