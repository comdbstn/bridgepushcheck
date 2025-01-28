import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, Target, TrendingUp, BarChart, Users, Settings, MessageSquare, Star } from "lucide-react";

const processes = [
    {
        icon: Search,
        title: "현황 분석",
        description: "매장의 현재 상태와 경쟁사 분석을 통해 개선점을 파악합니다.",
        details: [
            "키워드 분석 및 경쟁사 벤치마킹",
            "현재 매장 리뷰 및 평점 분석",
            "방문자 데이터 트렌드 분석"
        ]
    },
    {
        icon: Target,
        title: "전략 수립",
        description: "매장의 특성과 목표에 맞는 맞춤형 마케팅 전략을 수립합니다.",
        details: [
            "타겟 고객층 설정",
            "키워드 최적화 전략 수립",
            "콘텐츠 제작 계획 수립"
        ]
    },
    {
        icon: Settings,
        title: "기본 최적화",
        description: "네이버 플레이스 기본 정보를 최적화하여 기반을 다집니다.",
        details: [
            "기본 정보 및 영업시간 최적화",
            "메뉴 및 가격 정보 업데이트",
            "매장 사진 품질 개선"
        ]
    },
    {
        icon: MessageSquare,
        title: "리뷰 관리",
        description: "고객 리뷰를 전략적으로 관리하여 평판을 개선합니다.",
        details: [
            "리뷰 답변 전략 수립",
            "부정적 리뷰 대응 방안",
            "리뷰 작성 유도 전략"
        ]
    },
    {
        icon: TrendingUp,
        title: "노출 최적화",
        description: "네이버 플레이스와 지도 검색에서의 노출도를 높이는 최적화를 진행합니다.",
        details: [
            "키워드 최적화 적용",
            "콘텐츠 품질 개선",
            "검색 노출도 모니터링"
        ]
    },
    {
        icon: Users,
        title: "방문자 유입",
        description: "실제 매장 방문으로 이어지는 전략적 마케팅을 진행합니다.",
        details: [
            "방문 동기 부여 콘텐츠 제작",
            "프로모션 기획 및 실행",
            "방문자 데이터 추적"
        ]
    },
    {
        icon: Star,
        title: "평판 관리",
        description: "지속적인 평판 관리를 통해 매장의 이미지를 개선합니다.",
        details: [
            "긍정적 리뷰 관리",
            "고객 피드백 반영",
            "서비스 품질 모니터링"
        ]
    },
    {
        icon: BarChart,
        title: "성과 분석",
        description: "실시간 순위와 방문자 데이터를 분석하여 전략을 개선합니다.",
        details: [
            "방문자 통계 분석",
            "키워드 순위 추적",
            "ROI 분석 및 보고"
        ]
    },
];

export function Process() {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 font-aggro">진행 과정</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        체계적인 프로세스를 통해 매장의 온라인 존재감을 높이고
                        실제 방문으로 이어지는 효과적인 마케팅을 진행합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {processes.map((process, index) => (
                        <motion.div
                            key={process.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                    <process.icon className="w-6 h-6 text-[#03AC0E]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-tway">{process.title}</h3>
                                <p className="text-gray-600 font-tway mb-4">{process.description}</p>
                                <ul className="space-y-2">
                                    {process.details.map((detail, idx) => (
                                        <li key={idx} className="text-sm text-gray-500 flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
