import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
    title: string;
    clientName: string;
    description: string;
    workImage: string;
    platform: {
        name: string;
        icon: string;
    };
    details: {
        budget: string;
        period: string;
        kpi: {
            target: string;
            result: string;
            achievement: string;
        }[];
        consultation: {
            background: string;
            solution: string;
            decision: string;
        };
        workImages: string[];
    };
}

export function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const projects: Project[] = [
        {
            title: "에브리타임",
            clientName: "스타벅스 코리아",
            description: "대학생 타겟 바이럴 마케팅을 통한 브랜드 인지도 향상 및 매출 증대",
            workImage: "https://picsum.photos/800/600?random=1",
            platform: {
                name: "에브리타임",
                icon: "/logo/everytime.png"
            },
            details: {
                budget: "3,000만원 / 월",
                period: "2023.01 - 2023.06 (6개월)",
                kpi: [
                    {
                        target: "브랜드 인지도",
                        result: "300% 상승",
                        achievement: "목표 대비 150% 달성"
                    },
                    {
                        target: "매장 방문율",
                        result: "250% 상승",
                        achievement: "목표 대비 125% 달성"
                    },
                    {
                        target: "앱 다운로드",
                        result: "180% 상승",
                        achievement: "목표 대비 120% 달성"
                    }
                ],
                consultation: {
                    background: "대학생들의 카페 선호도 1위 브랜드임에도 불구하고, 실제 방문 및 구매로 이어지는 전환율이 낮았습니다.",
                    solution: "에브리타임을 통해 대학생들이 자주 방문하는 시간대의 프로모션과 신메뉴 정보를 자연스럽게 노출하는 전략을 제안했습니다.",
                    decision: "각 대학별 인기 게시판을 통한 자연스러운 바이럴 마케팅으로, 실제 방문을 유도하는 캠페인을 진행했습니다."
                },
                workImages: [
                    "https://picsum.photos/800/600",
                    "https://picsum.photos/800/601",
                    "https://picsum.photos/800/602"
                ]
            }
        },
        {
            title: "블라인드",
            clientName: "CU 편의점",
            description: "대한민국 대표 편의점 브랜드로, 신선한 식품과 다양한 생활용품을 24시간 편리하게 제공하는 리테일 기업",
            workImage: "https://picsum.photos/800/600?random=2",
            platform: {
                name: "블라인드",
                icon: "/logo/blind.png"
            },
            details: {
                budget: "2,500만원 / 월",
                period: "2023.03 - 2023.08 (6개월)",
                kpi: [
                    {
                        target: "신규 상품 매출",
                        result: "75% 상승",
                        achievement: "목표 대비 125% 달성"
                    },
                    {
                        target: "앱 다운로드",
                        result: "일 평균 5,000건",
                        achievement: "목표 대비 140% 달성"
                    },
                    {
                        target: "멤버십 가입률",
                        result: "32% 증가",
                        achievement: "목표 대비 110% 달성"
                    }
                ],
                consultation: {
                    background: "직장인 타겟의 신규 PB상품 출시와 멤버십 서비스 강화에 따른 마케팅 필요",
                    solution: "블라인드 커뮤니티를 활용한 직장인 타겟 입소문 마케팅과 리뷰 프로모션 제안",
                    decision: "직장인들의 솔직한 리뷰를 통한 신뢰도 구축 및 구매 전환율 향상 전략 채택"
                },
                workImages: [
                    "https://picsum.photos/800/600?random=7",
                    "https://picsum.photos/800/600?random=8",
                    "https://picsum.photos/800/600?random=9"
                ]
            }
        },
        {
            title: "틱톡",
            clientName: "틱톡 코리아",
            description: "전 세계 10억명 이상의 사용자가 이용하는 숏폼 동영상 플랫폼으로, MZ세대를 중심으로 강력한 영향력을 가진 소셜 미디어",
            workImage: "https://picsum.photos/800/600?random=3",
            platform: {
                name: "틱톡",
                icon: "/logo/tiktok.png"
            },
            details: {
                budget: "3,500만원 / 월",
                period: "2023.05 - 2023.10 (6개월)",
                kpi: [
                    {
                        target: "동영상 조회수",
                        result: "100만 뷰 달성",
                        achievement: "목표 대비 135% 달성"
                    },
                    {
                        target: "팔로워 수",
                        result: "25만명 달성",
                        achievement: "목표 대비 145% 달성"
                    },
                    {
                        target: "해시태그 참여",
                        result: "12만건 달성",
                        achievement: "목표 대비 160% 달성"
                    }
                ],
                consultation: {
                    background: "MZ세대를 타겟으로 한 브랜드 인지도 향상 및 참여형 마케팅 필요",
                    solution: "틱톡의 특성을 활용한 바이럴 챌린지 및 인플루언서 마케팅 제안",
                    decision: "트렌디한 숏폼 콘텐츠와 해시태그 챌린지를 통한 브랜드 인게이지먼트 강화"
                },
                workImages: [
                    "https://picsum.photos/800/600?random=10",
                    "https://picsum.photos/800/600?random=11",
                    "https://picsum.photos/800/600?random=12"
                ]
            }
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white pt-20">
                {/* 히어로 섹션 */}
                <section className="relative py-24">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
                        <motion.div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            className="max-w-4xl mx-auto text-center"
                            style={{ opacity }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Portfolio
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl md:text-6xl font-bold mb-8"
                            >
                                성공적인 프로젝트로<br />입증된 실력
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl text-gray-400"
                            >
                                브릿지마케팅과 함께한 클라이언트들의<br />성공 스토리를 확인하세요
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* 프로젝트 그리드 */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 cursor-pointer transform-gpu group-hover:-translate-y-1">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.img
                                                src={project.platform.icon}
                                                alt={project.platform.name}
                                                className="w-12 h-12 object-contain"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                                <p className="text-gray-400">{project.clientName}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mb-6">{project.description}</p>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="flex items-center text-purple-400 group"
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.button>
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

                {/* 프로젝트 상세 모달 */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl p-8"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex items-center gap-4 mb-8">
                                <motion.img
                                    src={selectedProject.platform.icon}
                                    alt={selectedProject.platform.name}
                                    className="w-16 h-16 object-contain"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h2>
                                    <p className="text-gray-400">{selectedProject.clientName}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">프로젝트 개요</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-gray-400 mb-2">예산</p>
                                            <p className="text-white">{selectedProject.details.budget}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-2">기간</p>
                                            <p className="text-white">{selectedProject.details.period}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">KPI 달성</h3>
                                    <div className="space-y-4">
                                        {selectedProject.details.kpi.map((item, index) => (
                                            <motion.div
                                                key={item.target}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="bg-purple-500/10 rounded-lg p-4"
                                            >
                                                <p className="text-gray-400 mb-2">{item.target}</p>
                                                <p className="text-2xl font-bold text-purple-400">{item.result}</p>
                                                <p className="text-sm text-gray-400">{item.achievement}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">컨설팅 내용</h3>
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h4 className="text-purple-400 mb-2">Background</h4>
                                        <p className="text-gray-400">{selectedProject.details.consultation.background}</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h4 className="text-purple-400 mb-2">Solution</h4>
                                        <p className="text-gray-400">{selectedProject.details.consultation.solution}</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-purple-400 mb-2">Decision</h4>
                                        <p className="text-gray-400">{selectedProject.details.consultation.decision}</p>
                                    </motion.div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">실제 작업물</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {selectedProject.details.workImages.map((image, index) => (
                                        <motion.div
                                            key={image}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative aspect-video rounded-lg overflow-hidden group"
                                        >
                                            <motion.img
                                                src={image}
                                                alt={`Work sample ${index + 1}`}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </main>
            <Footer />
        </>
    );
} 