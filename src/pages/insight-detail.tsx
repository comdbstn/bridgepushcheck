import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

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
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    const posts: InsightPost[] = [
        {
            id: "effective-viral-marketing-2024",
            title: "2024 효과적인 바이럴 마케팅 전략: MZ세대 공략법",
            description: "MZ세대의 소비 트렌드와 소통 방식을 분석하여 효과적인 바이럴 마케팅 전략을 제시합니다. 실제 성공 사례와 함께 구체적인 실행 방안을 알아보세요.",
            thumbnail: "https://picsum.photos/800/400",
            category: "바이럴 마케팅",
            date: "2024.01.15",
            readTime: "15분",
            tags: ["MZ세대", "바이럴마케팅", "디지털마케팅", "소셜미디어"],
            content: {
                introduction: "디지털 시대의 소비자들은 전통적인 광고보다 입소문을 통한 정보를 더 신뢰합니다. 특히 MZ세대는 SNS를 통한 정보 공유와 소통에 익숙하며, 이들을 타겟으로 한 마케팅 전략은 기존과는 다른 접근이 필요합니다.",
                sections: [
                    {
                        title: "MZ세대의 특성과 소비 트렌드",
                        content: "MZ세대는 디지털 네이티브 세대로서, 온라인에서의 정보 검색과 공유가 자연스럽습니다. 이들은 브랜드의 진정성과 가치를 중요시하며, 자신의 취향과 라이프스타일을 적극적으로 표현합니다. 소셜미디어를 통한 정보 습득과 공유가 일상화되어 있으며, 트렌드에 민감하고 새로운 경험을 추구하는 특징이 있습니다. 이러한 특성을 이해하고 마케팅 전략에 반영하는 것이 중요합니다."
                    },
                    {
                        title: "효과적인 바이럴 콘텐츠 제작 전략",
                        content: "진정성 있는 스토리텔링과 시각적 요소의 조화가 중요합니다. 사용자 제작 콘텐츠(UGC)를 활용하고, 실시간 트렌드에 반응하는 콘텐츠를 제작하세요. 특히 숏폼 콘텐츠의 경우, 첫 3초 내에 시청자의 관심을 사로잡는 것이 중요합니다. 또한, 해시태그 전략을 통해 콘텐츠의 도달률을 높이고, 인플루언서와의 협업을 통해 신뢰도를 높일 수 있습니다."
                    },
                    {
                        title: "데이터 기반의 성과 측정",
                        content: "바이럴 마케팅의 성과를 정확히 측정하기 위해서는 다양한 지표를 활용해야 합니다. 조회수, 참여율, 공유수 등의 기본적인 지표부터 전환율, ROI 등의 비즈니스 지표까지 종합적으로 분석하여 전략을 지속적으로 개선해 나가야 합니다."
                    }
                ],
                conclusion: "바이럴 마케팅의 성공은 타겟 고객층에 대한 깊은 이해에서 시작됩니다. MZ세대의 특성을 고려한 전략 수립과 실행이 필요하며, 지속적인 데이터 분석과 트렌드 모니터링을 통해 전략을 발전시켜 나가야 합니다."
            }
        },
        {
            id: "social-media-strategy",
            title: "소셜미디어 플랫폼별 최적화된 마케팅 전략",
            description: "각 소셜미디어 플랫폼의 특성을 이해하고, 플랫폼별 최적화된 콘텐츠 전략을 수립하는 방법을 알아봅니다.",
            thumbnail: "https://picsum.photos/800/400",
            category: "소셜미디어",
            date: "2024.01.10",
            readTime: "12분",
            tags: ["인스타그램", "틱톡", "페이스북", "콘텐츠전략"],
            content: {
                introduction: "소셜미디어는 현대 마케팅의 핵심 채널입니다. 각 플랫폼의 특성을 이해하고 그에 맞는 전략을 수립하는 것이 성공적인 마케팅의 열쇠입니다.",
                sections: [
                    {
                        title: "플랫폼별 사용자 특성 분석",
                        content: "각 소셜미디어 플랫폼은 고유한 사용자층과 콘텐츠 소비 패턴을 가지고 있습니다. 인스타그램은 비주얼 중심의 플랫폼으로, 20-30대 여성 사용자가 많으며 라이프스타일과 브랜드 관련 콘텐츠가 인기가 높습니다. 틱톡은 10-20대 사용자가 주를 이루며, 짧고 재미있는 영상 콘텐츠가 핵심입니다. 페이스북은 다양한 연령층이 사용하며, 커뮤니티 기능과 정보 공유가 활발합니다."
                    },
                    {
                        title: "콘텐츠 최적화 전략",
                        content: "이미지 중심의 인스타그램, 숏폼 동영상 중심의 틱톡 등 각 플랫폼에 최적화된 콘텐츠 포맷과 전략이 필요합니다. 인스타그램의 경우 고품질 이미지와 스토리텔링이 중요하며, 틱톡은 트렌디한 음악과 챌린지 형식의 콘텐츠가 효과적입니다. 페이스북에서는 정보성 콘텐츠와 커뮤니티 참여를 유도하는 콘텐츠가 좋은 반응을 얻습니다."
                    },
                    {
                        title: "크로스 플랫폼 전략",
                        content: "각 플랫폼의 특성을 살리면서도 일관된 브랜드 메시지를 전달하는 것이 중요합니다. 플랫폼 간의 시너지를 만들어내고, 통합적인 마케팅 효과를 창출할 수 있는 전략을 수립해야 합니다."
                    }
                ],
                conclusion: "플랫폼의 특성을 이해하고 그에 맞는 전략을 수립하는 것이 소셜미디어 마케팅 성공의 핵심입니다. 각 플랫폼의 장점을 최대한 활용하면서도 일관된 브랜드 아이덴티티를 유지하는 것이 중요합니다."
            }
        }
    ];

    const post = posts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                    />
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                            >
                                <Link
                                    to="/insights"
                                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Insights
                                </Link>
                            </motion.div>
                            <motion.div
                                style={{ opacity, scale }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.span 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                                    >
                                        {post.category}
                                    </motion.span>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {post.date}
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Clock className="w-4 h-4 mr-1" />
                                        {post.readTime}
                                    </motion.div>
                                </div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="text-4xl md:text-5xl font-bold text-white"
                                >
                                    {post.title}
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    className="text-xl text-gray-400"
                                >
                                    {post.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {post.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                            className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-sm flex items-center"
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

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative aspect-[2/1] mb-12 rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
                                    <p className="text-gray-400 mb-12">{post.content.introduction}</p>
                                </motion.div>

                                {post.content.sections.map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="mb-12"
                                    >
                                        <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                                        <p className="text-gray-400">{section.content}</p>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
                                    <p className="text-gray-400">{post.content.conclusion}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 