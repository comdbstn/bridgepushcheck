import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Loading } from "@/components/ui/loading";

interface Project {
    title: string;
    clientName: string;
    description: string;
    workImage: string;
    logo: string;
    details: {
        budget: string;
        period: string;
        kpi: {
            target: string;
            result: string;
        }[];
        consultation: {
            background: string;
            solution: string;
            decision: string;
        };
        workImages: string[];
    };
}

export default function PortfolioPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const projects: Project[] = [
        {
            title: "스타벅스 코리아",
            clientName: "에브리타임",
            description: "대학생 커뮤니티를 활용한 브랜드 인지도 향상 및 신제품 프로모션",
            workImage: "https://picsum.photos/800/600",
            logo: "/logo/everytime.png",
            details: {
                budget: "2,000만원 / 월",
                period: "2023.01 - 2023.06 (6개월)",
                kpi: [
                    {
                        target: "브랜드 언급량",
                        result: "300% 증가"
                    },
                    {
                        target: "이벤트 참여율",
                        result: "목표 대비 180% 달성"
                    }
                ],
                consultation: {
                    background: "MZ세대, 특히 대학생을 타겟으로 한 마케팅 강화 필요",
                    solution: "에브리타임 커뮤니티 특성을 활용한 자연스러운 바이럴 마케팅",
                    decision: "대학생들의 일상적인 대화 속에서 자연스러운 브랜드 노출"
                },
                workImages: [
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600"
                ]
            }
        },
        {
            title: "CU 편의점",
            clientName: "블라인드",
            description: "직장인 커뮤니티를 통한 신제품 출시 및 브랜드 인지도 강화",
            workImage: "https://picsum.photos/800/600",
            logo: "/logo/blind.png",
            details: {
                budget: "2,500만원 / 월",
                period: "2023.03 - 2023.08 (6개월)",
                kpi: [
                    {
                        target: "제품 리뷰 수",
                        result: "250% 증가"
                    },
                    {
                        target: "매출 증가율",
                        result: "전년 대비 45% 상승"
                    }
                ],
                consultation: {
                    background: "직장인 간편식 시장 공략을 위한 타겟 마케팅 필요",
                    solution: "블라인드 커뮤니티의 특성을 활용한 입소문 마케팅",
                    decision: "실제 직장인들의 생생한 후기를 통한 신뢰도 구축"
                },
                workImages: [
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600"
                ]
            }
        },
        {
            title: "틱톡 코리아",
            clientName: "틱톡",
            description: "숏폼 콘텐츠를 활용한 브랜드 인지도 향상 및 유저 확보",
            workImage: "https://picsum.photos/800/600",
            logo: "/logo/tiktok.png",
            details: {
                budget: "3,500만원 / 월",
                period: "2023.05 - 2023.10 (6개월)",
                kpi: [
                    {
                        target: "동영상 조회수",
                        result: "500만 달성"
                    },
                    {
                        target: "앱 설치수",
                        result: "목표 대비 220% 달성"
                    }
                ],
                consultation: {
                    background: "MZ세대 타겟 마케팅 강화 및 플랫폼 인지도 제고 필요",
                    solution: "인플루언서 협업 및 바이럴 영상 제작",
                    decision: "트렌디한 콘텐츠로 자연스러운 플랫폼 홍보"
                },
                workImages: [
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/600"
                ]
            }
        }
    ];

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
                        <motion.div
                            style={{ opacity, scale }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                            >
                                포트폴리오
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-xl text-gray-400"
                            >
                                브릿지마케팅의 성공 사례를 만나보세요
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelectedProject(project)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <img 
                                            src={project.workImage} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-4">
                                                <img 
                                                    src={project.logo} 
                                                    alt={project.clientName}
                                                    className="h-6"
                                                />
                                                <span className="text-purple-400">
                                                    {project.clientName}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* 프로젝트 상세 모달 */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
                    <div className="min-h-screen px-4 py-12">
                        <div className="relative max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative aspect-video">
                                    <img 
                                        src={selectedProject.workImage}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img 
                                            src={selectedProject.logo}
                                            alt={selectedProject.clientName}
                                            className="h-8"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {selectedProject.title}
                                            </h3>
                                            <p className="text-purple-400">
                                                {selectedProject.clientName}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                프로젝트 기간
                                            </h4>
                                            <p className="text-gray-400">
                                                {selectedProject.details.period}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                집행 비용
                                            </h4>
                                            <p className="text-gray-400">
                                                {selectedProject.details.budget}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-white mb-4">
                                            KPI 달성
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedProject.details.kpi.map((item, index) => (
                                                <motion.div
                                                    key={item.target}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="bg-gray-800/50 rounded-lg p-4"
                                                >
                                                    <div className="text-sm text-gray-400 mb-2">
                                                        {item.target}
                                                    </div>
                                                    <div className="text-xl font-bold text-purple-400">
                                                        {item.result}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                진행 배경
                                            </h4>
                                            <p className="text-gray-400">
                                                {selectedProject.details.consultation.background}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                해결 방안
                                            </h4>
                                            <p className="text-gray-400">
                                                {selectedProject.details.consultation.solution}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                실행 결정
                                            </h4>
                                            <p className="text-gray-400">
                                                {selectedProject.details.consultation.decision}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold text-white mb-4">
                                            실제 작업물
                                        </h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            {selectedProject.details.workImages.map((image, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="relative aspect-square rounded-lg overflow-hidden"
                                                >
                                                    <img 
                                                        src={image}
                                                        alt={`Work ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 