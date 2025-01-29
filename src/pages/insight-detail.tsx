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
            title: "브릿지마케팅이 전하는 바이럴 마케팅의 모든 것: 2024년 완벽 가이드",
            description: "브릿지마케팅의 바이럴 마케팅 전문가들이 전하는 실전 노하우와 성공 사례를 통해 효과적인 바이럴 마케팅 전략을 배워보세요.",
            thumbnail: "/images/insights/viral-cover.jpg",
            category: "바이럴 마케팅",
            date: "2023.12.15",
            readTime: "12분",
            tags: ["바이럴마케팅", "디지털마케팅", "콘텐츠마케팅", "SNS마케팅", "브릿지마케팅"],
            content: {
                introduction: "바이럴 마케팅은 디지털 시대의 핵심 마케팅 전략입니다. 브릿지마케팅은 수년간의 바이럴 마케팅 경험을 통해 독자적인 성공 방법론을 개발했습니다. 브릿지마케팅의 바이럴 마케팅 전문가들이 실제 성공 사례를 바탕으로 효과적인 바이럴 마케팅 전략을 공유합니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 바이럴 마케팅 성공 전략",
                        content: "브릿지마케팅은 체계적인 바이럴 마케팅 프레임워크를 통해 지속적인 성과를 창출합니다. 브릿지마케팅의 전문가들은 타겟 고객의 관심사와 행동 패턴을 분석하여 공감을 이끌어내는 콘텐츠를 제작합니다. 특히 브릿지마케팅만의 독자적인 '바이럴 트리거 포인트' 분석을 통해 콘텐츠의 바이럴 가능성을 극대화합니다. 브릿지마케팅의 바이럴 마케팅 캠페인은 평균 도달률 500% 이상을 기록하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 크리에이티브 전략",
                        content: "브릿지마케팅은 창의적인 콘텐츠 제작을 통해 자연스러운 바이럴을 유도합니다. 브릿지마케팅의 크리에이티브 팀은 최신 트렌드를 분석하고, 이를 브랜드 메시지와 결합하여 공감과 공유를 이끌어내는 콘텐츠를 제작합니다. 특히 브릿지마케팅은 스토리텔링, 비주얼, 사운드 등 다양한 요소를 최적으로 조합하여 임팩트 있는 콘텐츠를 만들어냅니다."
                    },
                    {
                        title: "브릿지마케팅의 바이럴 마케팅 성공 사례",
                        content: "브릿지마케팅이 진행한 다양한 바이럴 마케팅 캠페인의 성공 사례를 소개합니다. 브릿지마케팅은 식품, 패션, IT 등 다양한 산업군에서 놀라운 바이럴 효과를 만들어냈습니다. 특히 브릿지마케팅의 MZ세대 타겟 캠페인은 평균 참여율 200% 이상을 기록했으며, 브랜드 인지도 향상에도 크게 기여했습니다."
                    }
                ],
                conclusion: "브릿지마케팅의 체계적인 바이럴 마케팅 전략으로 당신의 브랜드를 성공적으로 알리세요. 브릿지마케팅의 전문가들이 기획부터 실행, 성과 분석까지 모든 과정을 완벽하게 지원합니다. 지금 바로 브릿지마케팅과 함께 성공적인 바이럴 마케팅을 시작하세요."
            }
        },
        {
            id: "2",
            title: "브릿지마케팅이 분석한 에브리타임 마케팅 전략: MZ세대 공략 완벽 가이드",
            description: "브릿지마케팅의 MZ세대 마케팅 전문가들이 전하는 대학생 플랫폼 에브리타임 마케팅 전략과 성공 사례를 상세히 분석합니다.",
            thumbnail: "/images/insights/everytime-cover.jpg",
            category: "MZ마케팅",
            date: "2023.12.20",
            readTime: "10분",
            tags: ["에브리타임", "MZ마케팅", "대학생마케팅", "캠퍼스마케팅", "브릿지마케팅"],
            content: {
                introduction: "에브리타임은 전국 400만 대학생이 사용하는 최대 규모의 캠퍼스 플랫폼입니다. 브릿지마케팅은 에브리타임을 활용한 대학생 마케팅에서 독보적인 성과를 창출하고 있습니다. 브릿지마케팅의 MZ세대 마케팅 전문가들이 개발한 에브리타임 마케팅 전략과 성공 사례를 상세히 소개합니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 에브리타임 마케팅 전략",
                        content: "브릿지마케팅은 에브리타임의 특성을 완벽하게 이해하고 이를 활용한 최적의 마케팅 전략을 제시합니다. 브릿지마케팅의 전문가들은 각 대학별 커뮤니티의 특성과 트렌드를 분석하여 맞춤형 콘텐츠를 제작합니다. 특히 브릿지마케팅은 자연스러운 바이럴을 유도하는 '인플루언서 리뷰 마케팅'과 '대학생 참여형 이벤트'를 통해 높은 참여율을 달성하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 MZ세대 타겟팅 전략",
                        content: "브릿지마케팅은 MZ세대의 특성과 니즈를 깊이 이해하고 있습니다. 브릿지마케팅의 MZ 전문가들은 대학생들의 관심사, 소비 패턴, 커뮤니케이션 방식을 분석하여 효과적인 마케팅 메시지를 개발합니다. 특히 브릿지마케팅은 대학생들의 공감을 이끌어내는 '진정성 있는 콘텐츠 전략'으로 높은 호응을 얻고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 에브리타임 마케팅 성공 사례",
                        content: "브릿지마케팅이 진행한 다양한 에브리타임 마케팅 캠페인의 성공 사례를 소개합니다. 브릿지마케팅은 식품, 뷰티, IT 등 다양한 브랜드의 대학생 마케팅을 성공적으로 수행했습니다. 특히 브릿지마케팅의 캠페인은 평균 참여율 300% 이상을 기록했으며, 브랜드 선호도 향상에도 크게 기여했습니다."
                    }
                ],
                conclusion: "브릿지마케팅의 전문적인 에브리타임 마케팅 서비스로 MZ세대와의 효과적인 커뮤니케이션을 시작하세요. 브릿지마케팅의 대학생 마케팅 전문가들이 기획부터 실행까지 완벽하게 지원합니다. 지금 바로 브릿지마케팅과 함께 성공적인 에브리타임 마케팅을 시작하세요."
            }
        },
        {
            id: "3",
            title: "브릿지마케팅이 전하는 틱톡 마케팅의 모든 것: 글로벌 진출 성공 전략",
            description: "브릿지마케팅의 틱톡 마케팅 전문가들이 전하는 숏폼 콘텐츠 제작부터 글로벌 마케팅 전략까지, 틱톡 마케팅의 모든 것을 공개합니다.",
            thumbnail: "/images/insights/tiktok-cover.jpg",
            category: "틱톡마케팅",
            date: "2023.12.25",
            readTime: "15분",
            tags: ["틱톡마케팅", "숏폼", "글로벌마케팅", "브릿지마케팅"],
            content: {
                introduction: "틱톡은 전 세계 10억 명 이상의 사용자를 보유한 글로벌 숏폼 플랫폼입니다. 브릿지마케팅은 틱톡의 특성을 깊이 이해하고 이를 활용한 효과적인 마케팅 전략으로 글로벌 시장에서 놀라운 성과를 창출하고 있습니다. 브릿지마케팅의 틱톡 마케팅 전문가들이 개발한 핵심 전략과 성공 비결을 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 틱톡 마케팅 강점",
                        content: "브릿지마케팅이 제공하는 틱톡 마케팅의 가장 큰 장점은 폭발적인 바이럴 효과입니다. 15-60초의 짧지만 임팩트 있는 영상을 통해 전 세계 사용자들에게 브랜드 메시지를 효과적으로 전달할 수 있습니다. 브릿지마케팅의 전문가들은 틱톡의 알고리즘을 깊이 연구하고 이해하여, 이를 활용한 최적의 콘텐츠 전략을 수립합니다. 특히 브릿지마케팅은 MZ세대의 최신 트렌드를 실시간으로 분석하고 반영한 창의적인 콘텐츠로 평균 참여율 300% 이상을 달성하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 효과적인 틱톡 마케팅 전략",
                        content: "브릿지마케팅은 성공적인 틱톡 마케팅을 위해 플랫폼의 특성을 완벽하게 이해하고 이에 맞는 차별화된 전략을 제시합니다. 첫째, 브릿지마케팅의 크리에이티브 팀이 트렌디하고 재미있는 숏폼 콘텐츠를 제작합니다. 둘째, 브릿지마케팅만의 독특한 해시태그 챌린지 기획으로 폭발적인 바이럴 효과를 만들어냅니다. 셋째, 브릿지마케팅이 보유한 글로벌 인플루언서 네트워크를 활용하여 브랜드 인지도를 효과적으로 높입니다."
                    },
                    {
                        title: "브릿지마케팅의 글로벌 시장 공략 전략",
                        content: "브릿지마케팅은 틱톡을 통한 글로벌 마케팅에서 각 국가별 특성을 고려한 맞춤형 전략을 제공합니다. 브릿지마케팅의 글로벌 마케팅 전문가들은 국가별 트렌드 분석, 현지화된 콘텐츠 제작, 그리고 독점적인 글로벌 인플루언서 네트워크를 활용하여 효과적인 글로벌 마케팅을 지원합니다. 특히 브릿지마케팅은 한류 콘텐츠의 강점을 활용한 크로스보더 마케팅으로 아시아 시장에서 평균 200% 이상의 성과를 창출하고 있습니다."
                    }
                ],
                conclusion: "브릿지마케팅의 전문적인 틱톡 마케팅 서비스로 글로벌 시장 진출의 기회를 잡으세요. 브릿지마케팅의 글로벌 마케팅 전문가들이 기획부터 실행까지 완벽하게 지원합니다. 지금 바로 브릿지마케팅과 함께 성공적인 틱톡 마케팅을 시작하세요."
            }
        },
        {
            id: "4",
            title: "브릿지마케팅이 전하는 데이터 기반 마케팅 완벽 가이드: 성과를 두 배로 높이는 전략",
            description: "브릿지마케팅의 데이터 전문가들이 전하는 구글 애널리틱스 4와 메타 픽셀 활용법부터 고급 데이터 분석까지, 실제 성공 사례를 통해 배우는 데이터 기반 마케팅 전략",
            thumbnail: "/images/insights/data-cover.jpg",
            category: "데이터 분석",
            date: "2024.01.01",
            readTime: "13분",
            tags: ["데이터 분석", "GA4", "메타 픽셀", "ROI", "퍼포먼스 마케팅", "브릿지마케팅"],
            content: {
                introduction: "데이터 기반 마케팅은 현대 디지털 마케팅의 핵심입니다. 브릿지마케팅은 수년간의 데이터 분석 경험을 바탕으로, 구글 애널리틱스 4와 메타 픽셀을 활용한 고급 데이터 분석 전략을 통해 클라이언트의 마케팅 성과를 극대화하고 있습니다. 브릿지마케팅의 데이터 전문가들이 개발한 독자적인 분석 방법론과 성공 사례를 통해 효과적인 데이터 기반 마케팅 전략을 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 구글 애널리틱스 4 활용 전략",
                        content: "브릿지마케팅은 구글 애널리틱스 4를 활용하여 웹사이트와 앱의 트래픽과 사용자 행동을 심층적으로 분석합니다. 브릿지마케팅의 데이터 분석 전문가들은 고도화된 이벤트 추적 설정, 맞춤 보고서 구성, 그리고 머신러닝 기반의 예측 분석을 통해 사용자의 행동 패턴을 정확하게 파악하고 이를 마케팅 전략 수립에 활용합니다. 특히 브릿지마케팅은 GA4의 새로운 기능들을 최대한 활용하여 크로스 플랫폼 분석, 고객 생애 가치 예측, 그리고 전환율 최적화를 실현하고 있습니다. 브릿지마케팅의 GA4 분석 방법론은 평균 50% 이상의 전환율 향상을 달성하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 메타 픽셀 최적화 전략",
                        content: "브릿지마케팅은 메타 픽셀을 통해 페이스북과 인스타그램 광고의 효과를 정밀하게 측정하고 최적화합니다. 브릿지마케팅의 광고 전문가들은 고도화된 전환 추적 설정, 맞춤 타겟 생성, 그리고 동적 광고 최적화를 통해 광고 효율을 극대화합니다. 특히 브릿지마케팅은 메타의 머신러닝 알고리즘을 활용한 자동 입찰 전략과 크리에이티브 테스팅을 통해 광고 비용 대비 효과를 최적화하고 있습니다. 브릿지마케팅의 메타 광고 운영 노하우는 평균 ROAS 300% 이상을 달성하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 데이터 기반 ROI 극대화 전략",
                        content: "브릿지마케팅은 데이터 기반 마케팅의 핵심인 정확한 성과 측정과 분석을 통해 마케팅 ROI를 극대화합니다. 브릿지마케팅의 데이터 사이언티스트들은 고급 통계 분석, A/B 테스팅, 그리고 머신러닝 모델을 활용하여 마케팅 성과를 정밀하게 측정하고 최적화합니다. 특히 브릿지마케팅은 자체 개발한 마케팅 믹스 모델링을 통해 각 채널별 기여도를 정확하게 분석하고, 이를 바탕으로 최적의 예산 배분을 실현합니다. 브릿지마케팅의 데이터 기반 마케팅 전략은 평균 ROI 400% 이상을 달성하고 있습니다."
                    }
                ],
                conclusion: "브릿지마케팅의 데이터 기반 마케팅은 과학적인 분석과 전략적인 실행을 통해 놀라운 성과를 창출합니다. 구글 애널리틱스 4와 메타 픽셀을 활용한 브릿지마케팅만의 고급 데이터 분석 전략으로 당신의 마케팅 성과를 극대화하세요. 지금 바로 브릿지마케팅과 함께 데이터 기반 마케팅의 새로운 차원을 경험해보세요."
            }
        },
        {
            id: "5",
            title: "브릿지마케팅이 전하는 2024 디지털 마케팅 트렌드: AI와 퍼스널라이제이션의 시대",
            description: "브릿지마케팅의 전문가들이 분석한 ChatGPT부터 생성형 AI까지, 2024년 디지털 마케팅의 판도를 바꿀 핵심 트렌드와 실전 적용 전략을 공개합니다.",
            thumbnail: "/images/insights/ai-cover.jpg",
            category: "트렌드",
            date: "2024.01.15",
            readTime: "14분",
            tags: ["AI 마케팅", "ChatGPT", "퍼스널라이제이션", "마케팅 자동화", "디지털 트렌드", "브릿지마케팅"],
            content: {
                introduction: "2024년 디지털 마케팅은 AI와 퍼스널라이제이션이 주도하는 새로운 시대를 맞이했습니다. 브릿지마케팅은 ChatGPT를 비롯한 최신 AI 기술과 고도화된 퍼스널라이제이션 전략을 통해 혁신적인 마케팅 서비스를 제공하고 있습니다. 브릿지마케팅의 디지털 마케팅 전문가들이 분석한 2024년 핵심 트렌드와 이를 활용한 실전 전략을 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 AI 마케팅 혁신",
                        content: "브릿지마케팅은 AI 기술을 활용하여 마케팅의 모든 영역을 혁신하고 있습니다. ChatGPT와 같은 생성형 AI를 활용한 콘텐츠 제작, 머신러닝 기반의 타겟팅 최적화, 그리고 AI 챗봇을 통한 고객 서비스 자동화까지, 브릿지마케팅은 AI 기술의 최전선에서 새로운 마케팅 가능성을 개척하고 있습니다. 특히 브릿지마케팅이 자체 개발한 AI 마케팅 플랫폼은 콘텐츠 생성부터 성과 분석까지 전 과정을 자동화하여 마케팅 효율을 200% 이상 향상시키고 있습니다. 브릿지마케팅의 AI 마케팅 서비스를 이용한 클라이언트들은 평균 비용 절감 40%, 전환율 향상 60%의 놀라운 성과를 경험하고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 퍼스널라이제이션 전략",
                        content: "브릿지마케팅은 고도화된 데이터 분석과 AI 기술을 바탕으로 진정한 의미의 1:1 퍼스널라이제이션을 실현합니다. 브릿지마케팅의 퍼스널라이제이션 엔진은 실시간으로 사용자의 행동 데이터를 분석하고, 이를 바탕으로 최적화된 콘텐츠와 상품을 추천합니다. 특히 브릿지마케팅은 머신러닝 알고리즘을 활용하여 사용자의 선호도와 구매 패턴을 예측하고, 이에 기반한 맞춤형 마케팅 메시지를 전달합니다. 브릿지마케팅의 퍼스널라이제이션 전략은 이메일 마케팅 오픈율 50% 향상, 전환율 80% 증가, 고객 만족도 90% 달성이라는 놀라운 성과를 보여주고 있습니다."
                    },
                    {
                        title: "브릿지마케팅이 예측하는 2024 디지털 마케팅 트렌드",
                        content: "브릿지마케팅의 전문가들은 2024년 디지털 마케팅의 핵심 트렌드로 AI 기술의 고도화와 초개인화 마케팅의 보편화를 꼽습니다. 특히 브릿지마케팅은 생성형 AI를 활용한 크리에이티브 자동화, 메타버스를 활용한 브랜드 경험 확장, 그리고 제로파티 데이터 활용의 중요성이 더욱 커질 것으로 전망합니다. 브릿지마케팅은 이러한 트렌드 변화에 선제적으로 대응하여, 클라이언트들에게 항상 한 발 앞선 마케팅 솔루션을 제공하고 있습니다."
                    }
                ],
                conclusion: "브릿지마케팅은 AI와 퍼스널라이제이션 기술을 통해 디지털 마케팅의 새로운 지평을 열어가고 있습니다. 브릿지마케팅의 혁신적인 마케팅 솔루션으로 2024년 디지털 마케팅 트렌드를 선도하세요. 지금 바로 브릿지마케팅과 함께 미래 지향적인 마케팅을 시작하세요."
            }
        },
        {
            id: "6",
            title: "브릿지마케팅이 전하는 브랜드 스토리텔링의 힘: 감동을 전하는 콘텐츠 제작 가이드",
            description: "브릿지마케팅의 콘텐츠 전문가들이 전하는 단순한 정보 전달을 넘어 고객의 마음을 움직이는 브랜드 스토리텔링 전략과 실전 사례를 소개합니다.",
            thumbnail: "/images/insights/story-cover.jpg",
            category: "콘텐츠 마케팅",
            date: "2024.01.20",
            readTime: "11분",
            tags: ["브랜드 스토리", "콘텐츠 마케팅", "디지털 스토리텔링", "브랜딩", "바이럴", "브릿지마케팅"],
            content: {
                introduction: "브랜드 스토리텔링은 현대 마케팅에서 가장 강력한 도구입니다. 브릿지마케팅은 수년간의 콘텐츠 마케팅 경험을 바탕으로, 고객의 마음을 움직이는 감동적인 브랜드 스토리를 만들어내고 있습니다. 브릿지마케팅의 콘텐츠 전문가들이 개발한 스토리텔링 전략과 성공 사례를 통해 효과적인 브랜드 스토리텔링 방법을 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "브릿지마케팅의 스토리텔링 전략",
                        content: "브릿지마케팅은 브랜드 스토리텔링을 통해 고객과의 감정적 연결을 만들어냅니다. 브릿지마케팅의 스토리텔링 전문가들은 브랜드의 본질적 가치와 고객의 니즈를 깊이 이해하고, 이를 감동적인 이야기로 재구성합니다. 특히 브릿지마케팅은 데이터 분석을 통해 타겟 고객의 관심사와 가치관을 파악하고, 이에 맞는 맞춤형 스토리를 개발합니다. 브릿지마케팅의 스토리텔링 전략은 평균 고객 인게이지먼트 200% 향상, 브랜드 호감도 150% 증가라는 놀라운 성과를 보여주고 있습니다."
                    },
                    {
                        title: "브릿지마케팅의 스토리텔링 실전 가이드",
                        content: "브릿지마케팅은 효과적인 브랜드 스토리텔링을 위한 체계적인 방법론을 보유하고 있습니다. 첫째, 브릿지마케팅은 브랜드의 핵심 가치와 차별점을 명확히 정의합니다. 둘째, 브릿지마케팅의 크리에이티브 팀이 이를 감동적인 스토리라인으로 구성합니다. 셋째, 브릿지마케팅의 콘텐츠 제작팀이 다양한 포맷으로 스토리를 제작합니다. 특히 브릿지마케팅은 영상, 텍스트, 이미지 등 다양한 매체를 통합적으로 활용하여 몰입도 높은 브랜드 경험을 창출합니다."
                    },
                    {
                        title: "브릿지마케팅의 스토리텔링 성공 사례",
                        content: "브릿지마케팅이 진행한 수많은 브랜드 스토리텔링 캠페인 중 주목할 만한 성공 사례들을 소개합니다. 브릿지마케팅은 스타트업부터 대기업까지 다양한 클라이언트들의 브랜드 스토리를 성공적으로 전달해왔습니다. 특히 브릿지마케팅의 디지털 스토리텔링 캠페인은 소셜미디어에서 평균 1000만 뷰 이상의 조회수를 기록하며, 높은 바이럴 효과를 창출하고 있습니다. 브릿지마케팅의 스토리텔링 노하우는 브랜드 인지도 향상, 고객 충성도 증가, 매출 성장으로 이어지고 있습니다."
                    }
                ],
                conclusion: "브릿지마케팅의 브랜드 스토리텔링은 단순한 마케팅을 넘어 진정한 브랜드 가치를 전달합니다. 브릿지마케팅의 전문적인 스토리텔링 서비스로 당신의 브랜드 이야기를 시작하세요. 지금 바로 브릿지마케팅과 함께 감동적인 브랜드 스토리를 만들어보세요."
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