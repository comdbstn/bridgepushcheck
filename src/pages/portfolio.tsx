import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

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

    const projects: Project[] = [
        {
            title: "에브리타임",
            clientName: "스타벅스 코리아",
            description: "프리미엄 커피 브랜드로, 최고 품질의 아라비카 원두로 만든 음료와 다양한 푸드를 제공하며, 편안한 카페 문화를 선도하는 기업",
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
                        result: "45% 상승",
                        achievement: "목표 대비 130% 달성"
                    },
                    {
                        target: "방문자 수",
                        result: "일 평균 3,000명",
                        achievement: "목표 대비 150% 달성"
                    },
                    {
                        target: "구매 전환율",
                        result: "8.5%",
                        achievement: "목표 대비 120% 달성"
                    }
                ],
                consultation: {
                    background: "대학생을 타겟으로 한 신규 메뉴 출시에 따른 브랜드 인지도 향상 필요",
                    solution: "에브리타임 커뮤니티를 활용한 자연스러운 바이럴 마케팅 제안",
                    decision: "대학생들의 주요 커뮤니티인 에브리타임을 통해 타겟층과 직접 소통하는 전략 채택"
                },
                workImages: [
                    "https://picsum.photos/800/600?random=4",
                    "https://picsum.photos/800/600?random=5",
                    "https://picsum.photos/800/600?random=6"
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
                                고객사 포트폴리오
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
                                    key={project.clientName}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-all duration-500">
                                        {/* 작업 이미지 */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={project.workImage}
                                                alt={project.clientName}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                        </div>

                                        {/* 콘텐츠 */}
                                        <div className="p-6">
                                            {/* 플랫폼 아이콘 */}
                                            <div className="flex gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm p-1.5 group-hover:bg-white/20 transition-colors">
                                                    <img
                                                        src={project.platform.icon}
                                                        alt={project.platform.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>

                                            {/* 상품명 */}
                                            <div className="text-sm text-purple-400 mb-2">
                                                {project.title}
                                            </div>

                                            {/* 업체명 & 소개 */}
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {project.clientName}
                                            </h3>
                                            <p className="text-gray-400 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* 자세히 보기 버튼 */}
                                            <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <span className="font-medium">자세히 보기</span>
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* 프로젝트 상세 모달 수정 */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 닫기 버튼 */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* 메인 이미지 */}
                            <div className="relative aspect-video">
                                <img
                                    src={selectedProject.workImage}
                                    alt={selectedProject.clientName}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 콘텐츠 */}
                            <div className="p-8">
                                {/* 헤더 정보 */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm p-2">
                                        <img
                                            src={selectedProject.platform.icon}
                                            alt={selectedProject.platform.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-purple-400 mb-1">
                                            {selectedProject.title}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {selectedProject.clientName}
                                        </h3>
                                    </div>
                                </div>

                                {/* 프로젝트 개요 */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                        <div className="text-sm text-purple-400 mb-1">집행 비용</div>
                                        <div className="text-white">{selectedProject.details.budget}</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                        <div className="text-sm text-purple-400 mb-1">진행 기간</div>
                                        <div className="text-white">{selectedProject.details.period}</div>
                                    </div>
                                </div>

                                {/* KPI 달성 현황 */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4">KPI 달성 현황</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {selectedProject.details.kpi.map((item, index) => (
                                            <div
                                                key={index}
                                                className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                                            >
                                                <div className="text-sm text-purple-400 mb-1">{item.target}</div>
                                                <div className="text-2xl font-bold text-white mb-2">{item.result}</div>
                                                <div className="text-sm text-green-400">{item.achievement}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 상담 내용 */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4">프로젝트 진행 과정</h4>
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="text-purple-400 mb-2">Background</h5>
                                            <p className="text-gray-400">{selectedProject.details.consultation.background}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-purple-400 mb-2">Solution</h5>
                                            <p className="text-gray-400">{selectedProject.details.consultation.solution}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-purple-400 mb-2">Decision</h5>
                                            <p className="text-gray-400">{selectedProject.details.consultation.decision}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 작업 이미지 갤러리 */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">작업 결과물</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {selectedProject.details.workImages.map((image, index) => (
                                            <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`작업 이미지 ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
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