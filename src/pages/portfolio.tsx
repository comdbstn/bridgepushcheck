import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface Project {
    title: string;
    description: string;
    image: string;
    detailImages: string[];
    platforms: {
        name: string;
        icon: string;
    }[];
    category: string;
    details: {
        client: string;
        period: string;
        goals: string[];
        results: string[];
    };
}

export function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "에브리타임 대학생 마케팅",
            description: "대학생 타겟 맞춤형 바이럴 마케팅",
            image: "https://picsum.photos/800/600?random=1",
            detailImages: [
                "https://picsum.photos/800/600?random=2",
                "https://picsum.photos/800/600?random=3",
                "https://picsum.photos/800/600?random=4"
            ],
            platforms: [
                { name: "에브리타임", icon: "/logo/everytime-logo.png" }
            ],
            category: "바이럴 마케팅",
            details: {
                client: "에브리타임",
                period: "2023.01 - 2023.06",
                goals: [
                    "대학생 타겟 인지도 향상",
                    "앱 다운로드 수 증가",
                    "실사용자 확보"
                ],
                results: [
                    "월간 활성 사용자 30% 증가",
                    "앱 다운로드 50% 상승",
                    "커뮤니티 참여도 2배 증가"
                ]
            }
        },
        {
            title: "블라인드 직장인 마케팅",
            description: "직장인 타겟 맞춤형 바이럴 마케팅",
            image: "https://picsum.photos/800/600?random=5",
            detailImages: [
                "https://picsum.photos/800/600?random=6",
                "https://picsum.photos/800/600?random=7",
                "https://picsum.photos/800/600?random=8"
            ],
            platforms: [
                { name: "블라인드", icon: "/logo/blind-logo.png" }
            ],
            category: "바이럴 마케팅",
            details: {
                client: "블라인드",
                period: "2023.03 - 2023.08",
                goals: [
                    "직장인 커뮤니티 내 브랜드 인지도 향상",
                    "자연스러운 입소문 마케팅",
                    "충성 사용자 확보"
                ],
                results: [
                    "브랜드 언급량 200% 증가",
                    "자발적 리뷰 작성 3배 증가",
                    "앱 설치 전환율 45% 향상"
                ]
            }
        },
        {
            title: "틱톡 MZ세대 마케팅",
            description: "MZ세대 타겟 맞춤형 바이럴 마케팅",
            image: "https://picsum.photos/800/600?random=9",
            detailImages: [
                "https://picsum.photos/800/600?random=10",
                "https://picsum.photos/800/600?random=11",
                "https://picsum.photos/800/600?random=12"
            ],
            platforms: [
                { name: "틱톡", icon: "/logo/tiktok-logo.png" }
            ],
            category: "바이럴 마케팅",
            details: {
                client: "틱톡",
                period: "2023.05 - 2023.10",
                goals: [
                    "MZ세대 타겟 인플루언서 마케팅",
                    "바이럴 콘텐츠 제작",
                    "브랜드 인지도 향상"
                ],
                results: [
                    "콘텐츠 조회수 100만 달성",
                    "해시태그 챌린지 참여자 5만명 돌파",
                    "브랜드 팔로워 300% 증가"
                ]
            }
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white">
                {/* 히어로 섹션 */}
                <section className="relative pt-32 pb-16">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />
                    </div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Portfolio
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                            >
                                성공적인 프로젝트<br />
                                포트폴리오
                            </motion.h1>
                        </motion.div>
                    </div>
                </section>

                {/* 포트폴리오 그리드 */}
                <section className="py-16 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-all duration-500">
                                        {/* 이미지 */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                        </div>

                                        {/* 콘텐츠 */}
                                        <div className="p-6">
                                            {/* 플랫폼 아이콘 */}
                                            <div className="flex gap-3 mb-4">
                                                {project.platforms.map((platform) => (
                                                    <div
                                                        key={platform.name}
                                                        className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm p-1.5 group-hover:bg-white/20 transition-colors"
                                                    >
                                                        <img
                                                            src={platform.icon}
                                                            alt={platform.name}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* 카테고리 */}
                                            <div className="text-sm text-purple-400 mb-2">
                                                {project.category}
                                            </div>

                                            {/* 제목 & 설명 */}
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 mb-4">
                                                {project.description}
                                            </p>

                                            {/* 자세히 보기 버튼 */}
                                            <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <span className="font-medium">자세히 보기</span>
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* 하단 그라데이션 라인 */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* 프로젝트 상세 모달 */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 닫기 버튼 */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* 이미지 슬라이더 */}
                            <div className="relative aspect-video">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 콘텐츠 */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    {selectedProject.platforms.map((platform) => (
                                        <div
                                            key={platform.name}
                                            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm p-2"
                                        >
                                            <img
                                                src={platform.icon}
                                                alt={platform.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <div className="text-sm text-purple-400 mb-1">
                                            {selectedProject.category}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {selectedProject.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">프로젝트 개요</h4>
                                        <div className="space-y-2 text-gray-400">
                                            <p><span className="text-purple-400">클라이언트:</span> {selectedProject.details.client}</p>
                                            <p><span className="text-purple-400">진행 기간:</span> {selectedProject.details.period}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">프로젝트 목표</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.details.goals.map((goal, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-400">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2" />
                                                    <span>{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold text-white mb-4">프로젝트 결과</h4>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {selectedProject.details.results.map((result, index) => (
                                            <div
                                                key={index}
                                                className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                                            >
                                                <p className="text-gray-300">{result}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
} 