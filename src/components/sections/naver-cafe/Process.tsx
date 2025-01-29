import { motion } from "framer-motion";
import { Search, PenTool, Send, LineChart } from "lucide-react";

const process = [
    {
        icon: Search,
        title: "타겟 분석",
        description: "타겟 고객이 활동하는 네이버 카페 분석 및 선정"
    },
    {
        icon: PenTool,
        title: "컨텐츠 기획",
        description: "카페별 특성에 맞는 자연스러운 바이럴 컨텐츠 기획"
    },
    {
        icon: Send,
        title: "바이럴 실행",
        description: "전문 작가진의 자연스러운 바이럴 마케팅 진행"
    },
    {
        icon: LineChart,
        title: "성과 분석",
        description: "실시간 모니터링 및 데이터 기반 성과 분석 리포트 제공"
    }
];

export function Process() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">진행 프로세스</h2>
                    <p className="text-lg text-gray-600">
                        체계적인 프로세스를 통해<br />
                        효과적인 바이럴 마케팅을 진행합니다
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-6">
                            <span className="text-xl font-bold text-purple-600">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">타겟 분석</h3>
                        <p className="text-gray-600">타겟 고객이 활동하는 네이버 카페 분석 및 선정</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-6">
                            <span className="text-xl font-bold text-purple-600">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">컨텐츠 기획</h3>
                        <p className="text-gray-600">카페별 특성에 맞는 자연스러운 바이럴 컨텐츠 기획</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-6">
                            <span className="text-xl font-bold text-purple-600">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">바이럴 실행</h3>
                        <p className="text-gray-600">전문 작가진의 자연스러운 바이럴 마케팅 진행</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-6">
                            <span className="text-xl font-bold text-purple-600">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">성과 분석</h3>
                        <p className="text-gray-600">실시간 모니터링 및 데이터 기반 성과 분석 리포트 제공</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 
