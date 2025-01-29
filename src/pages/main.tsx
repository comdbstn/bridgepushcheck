import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight, Bot, Zap, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useRef, useState, useMemo } from "react";
import { Loading } from "@/components/ui/loading";
import { Analytics } from "@vercel/analytics/react";

// 로고 배열 생성
const clientLogos = [
    "/logo/0.png", "/logo/1.jpg", "/logo/2.png", "/logo/3.png", 
    "/logo/4.jpg", "/logo/5.png", "/logo/6.png", "/logo/7.svg", 
    "/logo/8.jpg", "/logo/9.png", "/logo/10.png", "/logo/12.png", 
    "/logo/13.png", "/logo/14.png", "/logo/15.png", "/logo/16.png", 
    "/logo/17.png", "/logo/18.png", "/logo/19.jpg", "/logo/20.png",
    "/logo/21.png", "/logo/22.png", "/logo/23.png", "/logo/24.png", 
    "/logo/25.jpg", "/logo/26.png", "/logo/27.png", "/logo/28.jpg", 
    "/logo/29.png", "/logo/30.png", "/logo/31.png", "/logo/32.png",
    "/logo/33.webp", "/logo/34.png", "/logo/35.png", "/logo/36.png",
    "/logo/37.webp", "/logo/38.png", "/logo/39.jpg"
];

// 이미지를 10번 반복하여 배열 생성
const repeatedLogos = Array(10).fill(clientLogos).flat();

const stats = [
    { label: "고객사 재구매율", value: "92%" },
    { label: "누적 작업 횟수", value: "3,000+" },
    { label: "평균 만족도", value: "4.8/5" }
];

const features = [
    {
        title: "경험과 인사이트의 결과",
        description: "수많은 프로젝트 경험을 통해 축적된 인사이트로 최적의 마케팅 전략을 제시합니다"
    },
    {
        title: "데이터와 수치로 정형화된 KPI",
        description: "모든 마케팅 활동은 명확한 KPI를 기반으로 측정되고 최적화됩니다"
    },
    {
        title: "신속한 커뮤니케이션과 리포트",
        description: "실시간 커뮤니케이션과 정기적인 리포트로 프로젝트의 진행 상황을 투명하게 공유합니다"
    }
];

const services = [
    {
        title: "에브리타임",
        features: [
            "실제 재학생 타겟팅",
            "높은 도달률",
            "학교별 타겟팅",
            "국비지원, 병원, 서비스"
        ],
        image: "/logo/everytime.png",
        link: "/everytime"
    },
    {
        title: "블라인드",
        features: [
            "직장인 타겟팅",
            "높은 결제율",
            "자연스러운 바이럴",
            "금융, 채용, 서비스"
        ],
        image: "/logo/blind.png",
        link: "/blind"
    },
    {
        title: "틱톡",
        features: [
            "MZ 타겟팅",
            "높은 전환율",
            "숏폼 컨텐츠",
            "뷰티, 성형, 화장품"
        ],
        image: "/logo/tiktok.png",
        link: "/tiktok"
    }
];

export function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const shouldRestore = location.state?.shouldRestore;
    const savedScrollPosition = location.state?.scrollPosition;
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (shouldRestore && savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
        }
    }, [shouldRestore, savedScrollPosition]);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            scrollContainer.scrollLeft += 1;
            if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
                scrollContainer.scrollLeft = 0;
            }
        };

        const intervalId = setInterval(scroll, 30);
        return () => clearInterval(intervalId);
    }, []);

    // 1. State Hooks
    const [isLoading, setIsLoading] = useState(true);
    const [statsCounts, setStatsCounts] = useState([0, 0, 0]);

    // 2. Motion Hooks
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
    const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(147,51,234,0.15), transparent 70%)`;

    // 3. Ref Hooks
    const statsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    // 4. Constants
    const statsData = useMemo(() => [
        { value: 92, suffix: "%", label: "고객사 재구매율" },
        { value: 34000, suffix: "+", label: "누적 작업횟수" },
        { value: 4.9, suffix: "", label: "평균 만족도" }
    ], []);

    // 5. Effect Hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // 로딩이 끝나면 바로 통계 카운트 시작
            statsData.forEach((stat, index) => {
                let startTime: number;
                const endValue = stat.value;
                const duration = 1.5;

                const animate = (currentTime: number) => {
                    if (!startTime) startTime = currentTime;
                    const progress = (currentTime - startTime) / (duration * 1000);

                    if (progress < 1) {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = Math.floor(endValue * progress);
                            return newCounts;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = endValue;
                            return newCounts;
                        });
                    }
                };
                requestAnimationFrame(animate);
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [statsData]);

    // 6. Event Handlers
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <Analytics />
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero 섹션 */}
                <section className="pt-32 pb-20 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Your bridge to success
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12">
                                정확한 데이터와 KPI로 가치를 전달합니다
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                시작하기
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio 섹션 */}
                <section className="py-20 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                            다양한 고객사와 함께했습니다
                        </h2>
                        <p className="text-lg text-center text-gray-600">
                            브릿지마케팅은 수많은 기업들과 함께 성장해왔습니다
                        </p>
                    </div>
                    <div 
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-hidden whitespace-nowrap py-8"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {repeatedLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Client logo ${index + 1}`}
                                className="h-12 w-auto object-contain flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </section>

                {/* Features 섹션 */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                브릿지마케팅만의 특별함
                            </h2>
                            <p className="text-lg text-gray-600">
                                차별화된 서비스로 고객의 성공을 이끌어냅니다
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                                >
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                                        <span className="text-xl font-bold text-purple-600 group-hover:text-white transition-colors duration-300">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services 섹션 */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                맞춤형 마케팅 서비스
                            </h2>
                            <p className="text-lg text-gray-600">
                                각 플랫폼의 특성을 고려한 최적의 마케팅 솔루션을 제공합니다
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <Link 
                                    key={index}
                                    to={service.link}
                                    className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                                >
                                    <div className="flex items-center justify-center mb-8">
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            className="h-12 w-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, featureIndex) => (
                                            <li 
                                                key={featureIndex}
                                                className="flex items-center text-gray-600"
                                            >
                                                <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex items-center justify-center text-purple-600 group-hover:text-purple-700 transition-colors">
                                        자세히 보기
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 