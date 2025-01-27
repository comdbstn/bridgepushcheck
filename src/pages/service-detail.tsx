import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function ServiceDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from || '/';
    const scrollPosition = location.state?.scrollPosition || 0;

    const handleGoBack = () => {
        navigate(fromPage, {
            state: { shouldRestore: true, scrollPosition }
        });
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <button
                                    onClick={handleGoBack}
                                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    {fromPage === '/services' ? '서비스 목록으로 돌아가기' : '이전 페이지로 돌아가기'}
                                </button>
                            </motion.div>
                            {/* ... 나머지 컴포넌트 내용 ... */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 