import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    const posts: InsightPost[] = [
        {
            id: "1",
            title: "에브리타임 마케팅 완벽 가이드: 대학생 마케팅의 새로운 지평",
            description: "대학생 마케팅의 핵심 채널로 자리잡은 에브리타임, 월간 활성 사용자 450만 명을 보유한 이 플랫폼의 마케팅 전략을 상세히 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
            category: "마케팅 가이드",
            date: "2024.01.15",
            readTime: "10분",
            tags: ["대학생 마케팅", "에브리타임", "커뮤니티 마케팅"],
            content: {
                introduction: `대학생 마케팅의 핵심 채널로 자리잡은 에브리타임. 

월간 활성 사용자 450만 명, 전국 400개 대학교의 재학생 중 85%가 사용하는 이 플랫폼은 대학생 타겟 마케팅의 새로운 기준이 되었습니다.

본 글에서는 에브리타임의 특성을 깊이 이해하고, 효과적인 마케팅 전략을 수립하는 방법을 상세히 알아보겠습니다.`,
                sections: [
                    {
                        title: "에브리타임, 왜 주목해야 하는가?",
                        content: `📱 에브리타임 플랫폼 현황

• 월간 활성 사용자(MAU): 450만 명
• 대학생 사용 비율: 85%
• 일 평균 접속 시간: 37분
• 게시글 작성 수: 일 평균 32만 건

🎯 마케팅 채널로서의 강점

1. 정확한 대학생 타겟팅
   - 대학교 인증 시스템
   - 학교/학과별 세분화 가능
   - 지역 기반 타겟팅

2. 높은 사용자 충성도
   - 일 평균 접속 13회
   - 학사 정보 의존도 높음
   - 강력한 커뮤니티 문화

3. 다양한 마케팅 기회
   - 자유게시판 활용
   - 홍보게시판 운영
   - 교내 대외활동 모집`
                    },
                    {
                        title: "효과적인 에브리타임 마케팅 전략",
                        content: `1. 컨텐츠 전략 수립

📝 게시글 작성 가이드
• 학교별 특성 반영
• 밀도 있는 정보 제공
• 공감대 형성 중심

🎨 크리에이티브 제작 팁
• 모바일 최적화 이미지
• 직관적인 메시지
• 학교별 맞춤 디자인

2. 운영 전략

💫 게시판별 차별화
• 자유게시판: 자연스러운 정보 공유
• 홍보게시판: 명확한 혜택 제시
• 대외활동: 상세 정보 제공

🤝 커뮤니티 관리
• 신속한 댓글 대응
• 부정적 의견 관리
• 학생 서포터즈 운영

3. 성과 측정

📊 주요 지표 관리
• 조회수 및 참여율
• 댓글 및 공감 수
• 링크 클릭률
• 전환율 추적`
                    },
                    {
                        title: "성공적인 에브리타임 마케팅 사례",
                        content: `💼 A 교육 서비스 기업 사례

캠페인 개요
• 기간: 2023년 2학기
• 대상: 전국 상위 20개 대학
• 목표: 무료 체험판 회원가입

주요 전략
• 학교별 맞춤 콘텐츠 제작
• 재학생 서포터즈 운영
• 시험 기간 집중 마케팅

성과
• 회원가입 전환율 37% 달성
• 브랜드 검색량 225% 증가
• 앱 설치 12,000건 달성

🎓 B 취업 플랫폼 사례

캠페인 개요
• 기간: 2023년 하반기
• 대상: 수도권 주요 15개 대학
• 목표: 서비스 인지도 제고

주요 전략
• 학과별 맞춤 채용 정보 제공
• 취업 후기 시리즈 연재
• 대학별 오프라인 연계 이벤트

성과
• 서비스 가입자 8,500명 확보
• 이벤트 참여 3,200명 달성
• 교내 인지도 89% 달성`
                    }
                ],
                conclusion: `에브리타임은 단순한 홍보 채널을 넘어, 대학생들과 진정성 있는 소통을 할 수 있는 강력한 마케팅 플랫폼입니다.

플랫폼의 특성을 이해하고 학교/학과별 특성에 맞는 차별화된 전략을 수립한다면, 효과적인 대학생 마케팅 성과를 달성할 수 있습니다.

다음 글에서는 에브리타임 광고 상품별 성과 분석과 실전 운영 노하우를 다루도록 하겠습니다.`
            }
        },
        {
            id: "2",
            title: "블라인드로 시작하는 B2B 마케팅: 직장인 커뮤니티 공략 가이드",
            description: "500만 직장인이 선택한 블라인드, B2B 마케팅의 새로운 기회를 제시합니다. 블라인드를 통한 브랜드 신뢰도 구축과 리드 확보 전략을 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
            category: "B2B 마케팅",
            date: "2024.01.10",
            readTime: "12분",
            tags: ["B2B 마케팅", "블라인드", "브랜드 신뢰도", "리드 제너레이션"],
            content: {
                introduction: `B2B 마케팅에서 가장 어려운 것 중 하나는 실제 의사결정자들에게 도달하는 것입니다. 

특히 기업 구매자들은 전통적인 광고보다 동료들의 추천과 실제 사용 경험을 더 신뢰합니다. 

이러한 맥락에서 500만 직장인들의 솔직한 이야기가 공유되는 블라인드는 B2B 마케팅의 새로운 기회를 제시합니다. 

본 글에서는 블라인드를 활용한 효과적인 B2B 마케팅 전략과 브랜드 신뢰도 구축 방안을 상세히 살펴보겠습니다.`,
                sections: [
                    {
                        title: "블라인드, B2B 마케팅의 새로운 기회",
                        content: `📊 블라인드 플랫폼 현황

• 월간 활성 사용자(MAU): 500만 명
• 가입 기업 수: 45,000개
• IT 직군 사용자 비중: 38%
• 평균 체류 시간: 22분

🎯 B2B 마케팅 채널로서의 장점

1. 의사결정자 타겟팅
   - 실제 의사결정자/영향자 접근
   - 업종/직무 기반 타겟 설정
   - 기업 규모별 세분화

2. 신뢰도 높은 플랫폼
   - 기업 인증 시스템
   - 실명 리뷰 시스템
   - 전문가 커뮤니티

3. 상세 피드백 수집
   - 제품/서비스 평가
   - 경쟁사 분석
   - 시장 트렌드 파악`
                    },
                    {
                        title: "효과적인 블라인드 마케팅 전략",
                        content: `1. 콘텐츠 전략 수립

📝 콘텐츠 제작 원칙
• 문제 해결 중심의 정보
• 실제 사용자 경험 공유
• 전문성 있는 인사이트

🎨 콘텐츠 포맷
• 기술 블로그 연계
• 사례 연구 시리즈
• 전문가 칼럼

2. 커뮤니티 참여 전략

💬 토픽별 접근법
• 기술 토론: 전문성 어필
• 업계 동향: 인사이트 공유
• 솔루션 추천: 간접 홍보

🤝 관계 구축
• 질문 답변 참여
• 피드백 적극 수용
• 전문가 네트워크 형성

3. 리드 발굴 전략

📈 단계별 접근
• 인지도 구축
• 관심 유도
• 전환 촉진

🎁 리드 매그닛
• 화이트페이퍼
• 웨비나
• 무료 컨설팅`
                    },
                    {
                        title: "성공적인 블라인드 마케팅 사례",
                        content: `💼 A 협업툴 기업의 사례

캠페인 개요
• 기간: 2023년 3분기
• 대상: IT/스타트업 직군
• 목표: 기업 고객 확보

주요 전략
• 재택근무 관련 토픽 참여
• 실제 사용자 후기 공유
• 무료 체험 프로모션

성과
• 브랜드 언급량 312% 증가
• 무료 체험 신청 89% 증가
• 리드 전환율 23% 달성

💻 B 클라우드 서비스의 사례

캠페인 개요
• 기간: 2023년 4분기
• 대상: 개발자/엔지니어
• 목표: 기술 검증 기회 확보

주요 전략
• 기술 블로그 연계 콘텐츠
• 개발자 커뮤니티 참여
• POC 프로그램 운영

성과
• 기술 담당자 리드 1,200건
• POC 요청 32건 달성
• 최종 계약 12건 성사`
                    }
                ],
                conclusion: `블라인드는 B2B 마케팅에 있어 단순한 홍보 채널을 넘어 잠재 고객과의 신뢰 관계를 구축할 수 있는 전략적 플랫폼입니다.

직장인들의 특성을 이해하고 가치 있는 정보를 제공하며, 진정성 있는 소통을 통해 브랜드 신뢰도를 구축한다면, 효과적인 B2B 마케팅 성과를 달성할 수 있습니다.

다음 글에서는 블라인드 마케팅의 실전 전략과 리드 전환을 위한 구체적인 방법론을 다루도록 하겠습니다.`
            }
        },
        {
            id: "3",
            title: "틱톡 마케팅의 모든 것: MZ세대 공략을 위한 숏폼 콘텐츠 전략",
            description: "월간 활성 사용자 10억 명을 보유한 틱톡, Z세대의 80%가 사용하는 이 플랫폼에서 성공적인 마케팅 전략을 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1000",
            category: "소셜 마케팅",
            date: "2024.01.05",
            readTime: "15분",
            tags: ["틱톡", "숏폼", "MZ세대", "바이럴 마케팅", "소셜미디어"],
            content: {
                introduction: `틱톡은 더 이상 단순한 엔터테인먼트 플랫폼이 아닙니다. 

월간 활성 사용자 10억 명, 특히 Z세대의 80%가 사용하는 핵심 마케팅 채널로 자리잡았습니다. 

브랜드들은 이 플랫폼에서 새로운 기회를 발견하고 있으며, 성공적인 캠페인을 통해 놀라운 성과를 거두고 있습니다. 

본 글에서는 틱톡 마케팅의 핵심 전략과 성공 사례를 상세히 살펴보겠습니다.`,
                sections: [
                    {
                        title: "틱톡, 새로운 마케팅의 블루오션",
                        content: `📱 틱톡 플랫폼 현황

• 글로벌 MAU: 10억 명 이상
• 국내 MAU: 500만 명
• Z세대 사용률: 80%
• 평균 체류시간: 52분/일

🎯 마케팅 채널로서의 강점

1. 강력한 바이럴 효과
   - 알고리즘 기반 추천
   - 높은 공유 가능성
   - 빠른 트렌드 확산

2. 높은 사용자 참여도
   - 챌린지 참여 문화
   - 댓글과 듀엣 기능
   - 실시간 라이브 방송

3. 정교한 타겟팅
   - 관심사 기반 노출
   - 지역별 타겟팅
   - 맞춤형 광고 포맷`
                    },
                    {
                        title: "성공적인 틱톡 콘텐츠 제작 전략",
                        content: `1. 콘텐츠 기획 원칙

📝 핵심 요소
• 첫 3초 내 시선 사로잡기
• 트렌드 활용 (음악, 챌린지)
• 세로형 영상 최적화
• 자막 필수 활용

2. 효과적인 포맷

🎬 콘텐츠 유형
• How-to 영상
  - 짧고 명확한 설명
  - 단계별 진행
  - 실용적인 정보

• 제품 리뷰/언박싱
  - 솔직한 반응
  - 핵심 기능 하이라이트
  - 실사용 장면

• 비하인드 스토리
  - 제작 과정 공개
  - 팀원 일상 공유
  - 브랜드 문화 소개

3. 크리에이티브 팁

🎨 제작 가이드
• 밝고 선명한 영상
• 빠른 컷 전환
• 트렌디한 BGM
• 인터랙티브 요소`
                    },
                    {
                        title: "틱톡 마케팅 성공 사례",
                        content: `🎵 A 화장품 브랜드 캠페인

캠페인 개요
• 유형: 챌린지 캠페인
• 기간: 2023년 4분기
• 목표: 브랜드 인지도 제고

주요 전략
• 인플루언서 10명 협업
• 챌린지 해시태그 개발
• 참여 리워드 제공

성과
• 참여자 수 150만 명
• 조회수 2억 뷰
• 브랜드 검색량 450% 증가

🎮 B 게임 출시 캠페인

캠페인 개요
• 유형: 브랜디드 이펙트
• 기간: 2023년 3분기
• 목표: 사전예약 확보

주요 전략
• 게임 캐릭터 필터 제작
• 인게임 댄스 챌린지
• 경품 이벤트 연계

성과
• 필터 사용 300만 건
• 사전예약 100만 달성
• 출시 일주일 매출 50억`
                    }
                ],
                conclusion: `틱톡은 MZ세대와의 소통을 위한 필수 플랫폼으로 자리잡았습니다. 

플랫폼의 특성을 이해하고 트렌드에 맞는 콘텐츠를 제작하며, 사용자들의 자발적인 참여를 유도한다면, 놀라운 마케팅 성과를 달성할 수 있습니다.

다음 글에서는 틱톡 광고 집행을 위한 실전 가이드와 예산 최적화 전략을 다루도록 하겠습니다.`
            }
        },
        {
            id: "4",
            title: "데이터 기반 마케팅의 완벽 가이드: 성과를 두 배로 높이는 전략",
            description: "구글 애널리틱스 4와 메타 픽셀부터 고급 데이터 분석까지, 실제 사례를 통해 배우는 데이터 기반 마케팅 성공 전략",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
            category: "데이터 분석",
            date: "2024.01.01",
            readTime: "13분",
            tags: ["데이터 분석", "GA4", "메타 픽셀", "ROI", "퍼포먼스 마케팅"],
            content: {
                introduction: `현대 마케팅에서 데이터는 선택이 아닌 필수입니다. 

하지만 많은 기업들이 데이터를 제대로 활용하지 못하고 있습니다. 실제로 수집된 데이터의 73%가 활용되지 않고 있으며, 이는 큰 기회 손실로 이어집니다. 

본 글에서는 실제 성공 사례를 바탕으로 데이터 기반 마케팅의 구체적인 실행 방법과 성과 측정 전략을 상세히 알아보겠습니다.`,
                sections: [
                    {
                        title: "데이터 수집과 분석을 위한 필수 도구",
                        content: `🔧 필수 분석 도구

• 구글 애널리틱스 4 (GA4)
  - 이벤트 기반 측정
  - 크로스 플랫폼 추적
  - AI 기반 인사이트

• 메타 픽셀
  - 전환 추적
  - 맞춤 타겟팅
  - 리마케팅 활용

• 핫자 히트맵
  - 사용자 행동 분석
  - 클릭 패턴 파악
  - UX 최적화

• 태그매니저
  - 코드 통합 관리
  - 이벤트 추적 설정
  - A/B 테스트 구현

📊 주요 수집 데이터

1. 사용자 행동 데이터
   - 페이지 체류시간
   - 스크롤 깊이
   - 클릭 이벤트

2. 전환 데이터
   - 구매 완료율
   - 장바구니 추가
   - 회원가입 전환

3. 트래픽 소스
   - 유입 경로 분석
   - 채널별 성과
   - 캠페인 효과

4. 고객 세그먼트
   - 인구통계학적 정보
   - 관심사 카테고리
   - 구매 패턴`
                    },
                    {
                        title: "데이터 기반 의사결정 프로세스",
                        content: `1. 데이터 수집 및 통합

📥 데이터 소스 통합
• CRM 데이터
• 웹사이트 로그
• 소셜 미디어 지표
• 광고 플랫폼 데이터

🧹 데이터 클리닝
• 중복 데이터 제거
• 이상치 처리
• 누락 데이터 보완

📊 데이터 시각화
• 대시보드 구축
• 리포트 자동화
• 실시간 모니터링

2. 인사이트 도출

🔍 분석 영역
• 고객 여정 분석
• 전환율 최적화
• 이탈률 원인 파악

📈 핵심 지표
• ROAS
• CAC
• LTV
• Churn Rate

3. 실행 및 최적화

🎯 전략 수립
• 타겟 세그먼트 정의
• 채널별 예산 배분
• A/B 테스트 설계

⚡ 실시간 대응
• 실시간 입찰 조정
• 크리에이티브 최적화
• 타겟팅 세분화`
                    },
                    {
                        title: "데이터 기반 마케팅 성공 사례",
                        content: `💼 A 이커머스 기업 사례

초기 상황
• 높은 장바구니 이탈률
• 낮은 재구매율
• 부정확한 타겟팅

분석 도구
• GA4 + 히트맵
• CRM 데이터
• 메타 픽셀

개선 전략
• 장바구니 UI/UX 최적화
• 리타겟팅 시나리오 세분화
• 포기 상품 리마인더 자동화

성과
• 장바구니 전환율 47% 증가
• 객단가 23% 상승
• ROAS 31% 개선

🏢 B 기업 리드젠 사례

초기 상황
• 높은 리드 획득 비용
• 낮은 리드 품질
• 긴 전환 소요 시간

분석 도구
• 메타 픽셀 + CRM
• 리드 스코어링 시스템
• 히트맵 분석

개선 전략
• 잠재고객 세그먼트 재정의
• 랜딩페이지 동적 최적화
• 리드 스코어링 도입

성과
• 리드 획득 비용 52% 감소
• 리드 품질 점수 28% 상승
• 최종 전환율 35% 개선`
                    }
                ],
                conclusion: `데이터 기반 마케팅은 더 이상 선택이 아닌 필수입니다. 

적절한 도구를 활용하여 데이터를 수집하고, 체계적인 분석을 통해 인사이트를 도출하며, 이를 실제 전략에 반영한다면 마케팅 성과를 획기적으로 개선할 수 있습니다.

다음 글에서는 GA4의 고급 기능과 데이터 스튜디오를 활용한 대시보드 구축 방법을 상세히 다루도록 하겠습니다.`
            }
        },
        {
            id: "5",
            title: "2024 디지털 마케팅 트렌드: AI와 퍼스널라이제이션의 시대",
            description: "ChatGPT부터 하이퍼 퍼스널라이제이션까지, 2024년 주목해야 할 디지털 마케팅 트렌드와 실전 적용 전략",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
            category: "트렌드",
            date: "2024.01.01",
            readTime: "14분",
            tags: ["AI 마케팅", "ChatGPT", "퍼스널라이제이션", "마케팅 자동화", "디지털 트렌드"],
            content: {
                introduction: `2024년, 디지털 마케팅은 AI 기술의 혁신적인 발전으로 새로운 국면을 맞이하고 있습니다.

실제로 마케터의 78%가 2024년에 마케팅 자동화를 위해 AI를 도입할 계획이라고 밝혔으며, 이는 전년 대비 32% 증가한 수치입니다.

이번 글에서는 2024년 주목해야 할 핵심 디지털 마케팅 트렌드와 이를 실제 비즈니스에 적용하는 방법을 상세히 알아보겠습니다.`,
                sections: [
                    {
                        title: "2024 디지털 마케팅의 핵심 키워드",
                        content: `1. AI 기반 마케팅 자동화

🤖 주요 변화
• 콘텐츠 제작 자동화
• 고객 응대 자동화
• 데이터 분석 고도화

📈 시장 전망
• AI 마케팅 시장 43% 성장
• 도입 기업 32% 증가
• ROI 평균 267% 개선

2. 하이퍼 퍼스널라이제이션

🎯 개인화 수준
• 실시간 행동 기반
• 상황별 맞춤 제안
• 1:1 커뮤니케이션

💡 적용 분야
• 이메일 마케팅
• 웹사이트 경험
• 푸시 알림

3. 프라이버시 중심 마케팅

🔒 주요 이슈
• 쿠키리스 환경 대응
• 개인정보 보호 강화
• 투명성 확보

⚡ 대응 전략
• 자사 데이터 활용
• 컨텍스트 타겟팅
• 옵트인 전략

4. 몰입형 경험

🌟 핵심 기술
• AR/VR 활용
• 라이브 커머스
• 인터랙티브 콘텐츠

🎮 활용 사례
• 가상 쇼룸
• AR 제품 체험
• 메타버스 이벤트`
                    },
                    {
                        title: "AI 기반 마케팅 자동화 전략",
                        content: `1. 콘텐츠 제작 자동화

✍️ ChatGPT 활용
• 블로그 아웃라인 작성
• 소셜 미디어 포스팅
• 광고 카피라이팅

🎨 DALL-E/Midjourney 활용
• 썸네일 이미지 제작
• 배너 디자인
• 제품 이미지 변형

2. 고객 서비스 자동화

🤖 챗봇 고도화
• 24/7 실시간 응대
• 맞춤형 추천 제공
• 다국어 지원

📱 옴니채널 통합
• 채널 간 이동성
• 대화 맥락 유지
• 통합 데이터 관리

3. 데이터 분석 자동화

📊 예측 분석
• 구매 가능성 예측
• 이탈 위험 감지
• 트렌드 예측

🎯 타겟팅 최적화
• 잠재고객 발굴
• 세그먼트 자동 생성
• 캠페인 최적화`
                    },
                    {
                        title: "AI 마케팅 도입 성공 사례",
                        content: `💼 A 패션 브랜드 사례

도입 배경
• 낮은 이메일 오픈율
• 부정확한 상품 추천
• 높은 CS 비용

적용 기술
• AI 이메일 최적화
• 개인화 추천 엔진
• AI 챗봇 도입

개선 결과
• 이메일 오픈율 57% 증가
• 추천 상품 전환율 83% 상승
• CS 비용 45% 절감

🏢 B 서비스 기업 사례

도입 배경
• 콘텐츠 제작 병목
• 낮은 광고 효율
• 부정확한 리드 스코어링

적용 기술
• AI 콘텐츠 제작
• 자동 입찰 시스템
• AI 리드 스코어링

개선 결과
• 콘텐츠 제작 시간 68% 단축
• 광고 ROAS 92% 개선
• 리드 품질 점수 47% 상승`
                    }
                ],
                conclusion: `AI 기술의 발전은 마케팅의 패러다임을 완전히 바꾸고 있습니다.

2024년에는 AI를 활용한 자동화와 개인화가 더욱 가속화될 것이며, 이를 효과적으로 도입하는 기업이 시장에서 우위를 차지하게 될 것입니다.

다음 글에서는 ChatGPT를 활용한 실전 마케팅 콘텐츠 제작 가이드를 상세히 다루도록 하겠습니다.`
            }
        },
        {
            id: "6",
            title: "브랜드 스토리텔링의 힘: 감동을 전하는 콘텐츠 제작 가이드",
            description: "고객의 마음을 사로잡는 브랜드 스토리텔링의 원칙부터 실전 제작 노하우까지, 성공적인 콘텐츠 제작을 위한 완벽 가이드",
            thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000",
            category: "콘텐츠 마케팅",
            date: "2024.01.01",
            readTime: "11분",
            tags: ["브랜드 스토리", "콘텐츠 마케팅", "디지털 스토리텔링", "브랜딩", "바이럴"],
            content: {
                introduction: `디지털 시대에도 변함없는 진리가 있습니다. 바로 '좋은 이야기'의 힘입니다.

실제로 브랜드 스토리에 감정적 연결을 느낀 소비자의 92%가 해당 브랜드의 제품을 구매할 의향이 있다고 답했습니다.

이번 글에서는 고객의 마음을 움직이는 브랜드 스토리텔링의 원칙과 실전 제작 노하우를 상세히 알아보겠습니다.`,
                sections: [
                    {
                        title: "브랜드 스토리텔링의 기본 원칙",
                        content: `1. 진정성 있는 스토리 구축

💫 핵심 요소
• 브랜드의 미션과 비전
• 창업 스토리와 여정
• 브랜드만의 독특한 가치

🎯 스토리 구성 원칙
• 명확한 메시지
• 감정적 연결
• 일관된 톤앤매너

2. 고객 중심 스토리텔링

👥 타겟 분석
• 고객 페르소나 정의
• 관심사와 니즈 파악
• 소비 여정 매핑

💝 공감대 형성
• 고객의 문제 인식
• 해결책 제시
• 정서적 교감

3. 스토리 구조화

📝 기본 구조
• 도입: 흥미 유발
• 전개: 갈등과 해결
• 결말: 가치 전달

🔄 순환적 구조
• 지속적인 스토리 개발
• 시리즈물 기획
• 팔로업 콘텐츠`
                    },
                    {
                        title: "디지털 채널별 스토리텔링 전략",
                        content: `1. 유튜브 스토리텔링

🎥 콘텐츠 유형
• 브랜드 다큐멘터리
• 제품 스토리
• 고객 인터뷰

📋 제작 가이드
• 첫 15초 임팩트
• 시각적 스토리텔링
• 감성적 BGM 활용

2. 인스타그램 스토리텔링

📱 콘텐츠 포맷
• 피드 스토리
• 릴스 활용
• 스토리 하이라이트

✨ 시각화 전략
• 브랜드 색상 활용
• 일관된 디자인
• 감성적 이미지

3. 블로그 스토리텔링

📖 콘텐츠 구성
• 심층적 브랜드 스토리
• 전문성 있는 정보
• 고객 성공 사례

📌 최적화 전략
• SEO 최적화
• 구조화된 포맷
• 멀티미디어 활용`
                    },
                    {
                        title: "성공적인 브랜드 스토리텔링 사례",
                        content: `💼 A 라이프스타일 브랜드 사례

스토리 테마
• 지속가능한 라이프스타일
• 환경 보호의 가치
• 소비자 참여형 캠페인

실행 전략
• 환경 다큐멘터리 제작
• 고객 참여 챌린지
• 친환경 패키지 스토리

성과
• 브랜드 호감도 89% 상승
• SNS 팔로워 312% 증가
• 매출 47% 성장

🏢 B 테크 스타트업 사례

스토리 테마
• 혁신을 통한 문제 해결
• 창업팀의 열정
• 사용자 중심 개발

실행 전략
• 창업 과정 시리즈
• 개발자 브이로그
• 사용자 스토리

성과
• 투자 유치 성공
• 서비스 가입자 127% 증가
• 언론 보도 230% 증가`
                    }
                ],
                conclusion: `좋은 스토리는 단순한 정보 전달을 넘어 감동을 전하고 행동의 변화를 이끌어냅니다.

브랜드의 진정성 있는 이야기를 지속적으로 전달하고, 고객과 감정적 연결을 만들어낸다면, 그 어떤 마케팅 전략보다 강력한 효과를 얻을 수 있을 것입니다.

다음 글에서는 브랜드 스토리를 효과적으로 전달하기 위한 실전 기법들을 자세히 다루도록 하겠습니다.`
            }
        }
    ];

    const currentPost = posts.find(post => post.id === id);
    const recentPosts = posts
        .filter(post => post.id !== id)  // 현재 글 제외
        .slice(0, 3);  // 최근 3개만 선택

    const handleGoBack = () => {
        navigate('/insights', {
            state: { from: window.location.pathname }
        });
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
                            >
                                <button
                                    onClick={handleGoBack}
                                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6 md:mb-8"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    인사이트 목록으로 돌아가기
                                </button>
                            </motion.div>
                            <motion.div
                                style={{ opacity, scale }}
                                className="space-y-4 md:space-y-6"
                            >
                                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                    <motion.span 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm border border-purple-500/20"
                                    >
                                        {currentPost.category}
                                    </motion.span>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {currentPost.date}
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Clock className="w-4 h-4 mr-1" />
                                        {currentPost.readTime} 읽기
                                    </motion.div>
                                </div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                                >
                                    {currentPost.title}
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="text-lg md:text-xl text-gray-400"
                                >
                                    {currentPost.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {currentPost.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
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