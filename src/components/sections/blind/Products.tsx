import { motion } from "framer-motion";

export function Products() {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-4 font-aggro"
                >
                    블라인드 바이럴 마케팅
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-center mb-16 max-w-2xl mx-auto px-4 font-tway"
                >
                    가장 큰 직장인 커뮤니티 "블라인드"에 게시글, 댓글로 바이럴마케팅을 진행합니다.
                </motion.p>
            </div>
        </section>
    );
} 