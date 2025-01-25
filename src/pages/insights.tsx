import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";

interface Post {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
}

export default function InsightsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const posts: Post[] = [
        {
            id: "1",
            title: "대학생 마케팅의 새로운 패러다임",
            description: "에브리타임을 활용한 효과적인 대학생 타겟 마케팅 전략과 성공 사례를 소개합니다.",
            thumbnail: "https://picsum.photos/800/600",
            category: "마케팅 전략",
            date: "2024.01.15",
            readTime: "5분",
            tags: ["대학생 마케팅", "에브리타임", "바이럴"]
        },
        {
            id: "2",
            title: "직장인 커뮤니티 마케팅 가이드",
            description: "블라인드를 통한 B2B 마케팅 전략과 브랜드 신뢰도 구축 방안을 알아봅니다.",
            thumbnail: "https://picsum.photos/800/600",
            category: "마케팅 가이드",
            date: "2024.01.10",
            readTime: "7분",
            tags: ["B2B 마케팅", "블라인드", "브랜드 신뢰도"]
        },
        {
            id: "3",
            title: "MZ세대 공략을 위한 숏폼 전략",
            description: "틱톡을 활용한 효과적인 MZ세대 타겟팅과 바이럴 마케팅 전략을 소개합니다.",
            thumbnail: "https://picsum.photos/800/600",
            category: "콘텐츠 제작",
            date: "2024.01.05",
            readTime: "6분",
            tags: ["MZ세대", "틱톡", "숏폼"]
        },
        {
            id: "4",
            title: "데이터 기반 마케팅의 중요성",
            description: "실제 데이터를 활용한 마케팅 전략 수립과 성과 측정 방법을 알아봅니다.",
            thumbnail: "https://picsum.photos/800/600",
            category: "데이터 분석",
            date: "2024.01.01",
            readTime: "8분",
            tags: ["데이터 분석", "성과 측정", "마케팅 전략"]
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                인사이트
                            </h1>
                            <p className="text-xl text-gray-400">
                                브릿지마케팅의 마케팅 인사이트를 만나보세요
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-colors"
                                >
                                    <Link to={`/insights/${post.id}`} className="block p-6">
                                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                            <img 
                                                src={post.thumbnail} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm border border-purple-500/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{post.readTime} 읽기</span>
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 line-clamp-2">
                                                {post.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {post.tags.map(tag => (
                                                    <span 
                                                        key={tag}
                                                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 text-sm group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors"
                                                    >
                                                        <Tag className="w-3 h-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                마케팅 인사이트를 구독하세요
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                브릿지마케팅의 최신 마케팅 인사이트를 이메일로 받아보세요
                            </p>
                            <form className="flex gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="이메일 주소를 입력하세요"
                                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    구독하기
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 