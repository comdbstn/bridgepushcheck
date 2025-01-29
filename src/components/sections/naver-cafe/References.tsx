import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const referenceImages = [
    {
        id: 1,
        src: '/images/references/cafe/caferef1.png',
        alt: '네이버 카페 레퍼런스 1'
    },
    {
        id: 2,
        src: '/images/references/cafe/caferef2.png',
        alt: '네이버 카페 레퍼런스 2'
    },
    {
        id: 3,
        src: '/images/references/cafe/caferef3.png',
        alt: '네이버 카페 레퍼런스 3'
    },
    {
        id: 4,
        src: '/images/references/cafe/caferef4.png',
        alt: '네이버 카페 레퍼런스 4'
    }
];

export function References() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">브릿지마케팅의 네이버 카페 레퍼런스</h2>
                        <p className="text-lg text-gray-600">
                            실제 진행했던 프로젝트들을 확인해보세요<br />
                            다양한 산업군에서의 성공 사례를 보유하고 있습니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {referenceImages.map((image) => (
                            <div 
                                key={image.id} 
                                className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
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
        </>
    );
} 
