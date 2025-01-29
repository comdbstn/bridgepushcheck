import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Basic",
        price: "30만원",
        description: "소규모 바이럴 마케팅을 위한 기본 플랜",
        features: [
            "3개 카페 바이럴",
            "기본 컨텐츠 제작",
            "주간 리포트 제공",
            "기본 키워드 분석",
            "이메일 지원"
        ]
    },
    {
        title: "Standard",
        price: "100만원",
        description: "효과적인 바이럴 마케팅을 위한 표준 플랜",
        features: [
            "10개 카페 바이럴",
            "맞춤형 컨텐츠 제작",
            "실시간 모니터링",
            "일일 리포트 제공",
            "키워드 분석 리포트",
            "카카오톡 채널 지원"
        ]
    },
    {
        title: "Premium",
        price: "300만원",
        description: "대규모 바이럴 마케팅을 위한 프리미엄 플랜",
        features: [
            "무제한 카페 바이럴",
            "프리미엄 컨텐츠 제작",
            "실시간 대시보드 제공",
            "전담 매니저 배정",
            "성과 분석 컨설팅",
            "24/7 긴급 지원",
            "맞춤형 전략 수립"
        ]
    }
];

export function Pricing() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">서비스 요금</h2>
                    <p className="text-lg text-gray-600">
                        규모와 목적에 맞는 최적의 플랜을 선택하세요<br />
                        모든 플랜은 언제든지 변경이 가능합니다
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                            <p className="text-gray-600 mb-6">소규모 바이럴 마케팅을 위한 기본 플랜</p>
                            <div className="text-4xl font-bold text-gray-900">30만원</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                3개 카페 바이럴
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                기본 컨텐츠 제작
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                주간 리포트 제공
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                기본 키워드 분석
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                이메일 지원
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                            시작하기
                        </button>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-600 rounded-2xl p-8 hover:shadow-xl transition-shadow transform scale-105">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                            <p className="text-gray-600 mb-6">효과적인 바이럴 마케팅을 위한 표준 플랜</p>
                            <div className="text-4xl font-bold text-gray-900">100만원</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                10개 카페 바이럴
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                맞춤형 컨텐츠 제작
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                실시간 모니터링
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                일일 리포트 제공
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                키워드 분석 리포트
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                카카오톡 채널 지원
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                            시작하기
                        </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                            <p className="text-gray-600 mb-6">대규모 바이럴 마케팅을 위한 프리미엄 플랜</p>
                            <div className="text-4xl font-bold text-gray-900">300만원</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                무제한 카페 바이럴
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                프리미엄 컨텐츠 제작
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                실시간 대시보드 제공
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                전담 매니저 배정
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                성과 분석 컨설팅
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                24/7 긴급 지원
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                맞춤형 전략 수립
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                            시작하기
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} 
