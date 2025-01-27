import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";

interface Section {
    title: string;
    content: string;
}

interface InsightPost {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
    content: {
        introduction: string;
        sections: Section[];
        conclusion: string;
    };
}

export function InsightDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const posts: InsightPost[] = [
        {
            id: "1",
            title: "마케팅의 새로운 패러다임",
            description: "디지털 시대의 새로운 마케팅 트렌드와 전략",
            thumbnail: "/images/insights/1.jpg",
            category: "마케팅 트렌드",
            date: "2024.03.15",
            readTime: "5분",
            tags: ["디지털 마케팅", "트렌드", "전략"],
            content: {
                introduction: "디지털 시대의 마케팅은 끊임없이 진화하고 있습니다...",
                sections: [
                    {
                        title: "디지털 마케팅의 변화",
                        content: "최근 몇 년간 디지털 마케팅 환경은 급격히 변화했습니다..."
                    }
                ],
                conclusion: "앞으로의 마케팅은 더욱 개인화되고 데이터 중심적일 것입니다..."
            }
        }
    ];

    const currentPost = posts.find(post => post.id === id);
    const recentPosts = posts.filter(post => post.id !== id).slice(0, 3);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const handleGoBack = () => {
        navigate('/insights');
    };

    if (!currentPost) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        포스트를 찾을 수 없습니다
                    </h1>
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        인사이트 목록으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
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
                                className="space-y-4 md:space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="flex flex-wrap items-center gap-3 md:gap-4"
                                >
                                    <motion.span 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm border border-purple-500/20"
                                    >
                                        {currentPost.category}
                                    </motion.span>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {currentPost.date}
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Clock className="w-4 h-4 mr-1" />
                                        {currentPost.readTime} 읽기
                                    </motion.div>
                                </motion.div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                                >
                                    {currentPost.title}
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className="text-lg md:text-xl text-gray-400"
                                >
                                    {currentPost.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {currentPost.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                            className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm flex items-center hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                                        >
                                            <Tag className="w-3 h-3 mr-1" />
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/3] md:aspect-[21/9] mb-12 md:mb-16 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={currentPost.thumbnail}
                                    alt={currentPost.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12 md:mb-16"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Introduction</h2>
                                    <p className="text-gray-400 mb-12 md:mb-16 whitespace-pre-line leading-relaxed text-base md:text-lg">{currentPost.content.introduction}</p>
                                </motion.div>

                                {currentPost.content.sections.map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="mb-12 md:mb-16"
                                    >
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">{section.title}</h2>
                                        <p className="text-gray-400 whitespace-pre-line leading-relaxed text-base md:text-lg">{section.content}</p>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12 md:mb-16"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Conclusion</h2>
                                    <p className="text-gray-400 whitespace-pre-line leading-relaxed text-base md:text-lg">{currentPost.content.conclusion}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 최근 게시글 섹션 */}
                <section className="pb-20 md:pb-32 border-t border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 md:mt-20 mb-8 md:mb-12">최근 게시글</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                {recentPosts.map(post => (
                                    <Link 
                                        key={post.id} 
                                        to={`/insights/${post.id}`}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}
                                        className="group block bg-gray-900/50 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-gray-800/50 transition-colors"
                                    >
                                        <div className="relative aspect-[16/9] rounded-md md:rounded-lg overflow-hidden mb-3 md:mb-4">
                                            <img 
                                                src={post.thumbnail} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-2 md:top-3 left-2 md:left-3">
                                                <span className="px-2 md:px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-xs md:text-sm border border-purple-500/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2 md:mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-400 line-clamp-2 mb-3 md:mb-4">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 