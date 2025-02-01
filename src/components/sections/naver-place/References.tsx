import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const references = [
    "/images/references/place1.png",
    "/images/references/place2.png",
    "/images/references/place3.png",
    "/images/references/place4.png",
    "/images/references/place5.png",
    "/images/references/place6.png",
    "/images/references/place7.png",
    "/images/references/place8.png",
    "/images/references/place9.png"
];

export function References() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className='py-20 bg-gradient-to-br from-[#E5FFE8] to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    레퍼런스
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    브릿지마케팅의 네이버 플레이스 마케팅 성공 사례를 소개합니다
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {references.map((image, index) => (
                        <motion.div
                            key={image}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group'
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Reference ${index + 1}`}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                <span className='text-white text-lg font-bold'>자세히 보기</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80'
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className='relative max-w-5xl w-full'>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200'
                                >
                                    <X className='w-8 h-8' />
                                </button>
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    src={selectedImage}
                                    alt='Selected reference'
                                    className='w-full h-[80vh] object-contain rounded-lg shadow-2xl'
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
} 