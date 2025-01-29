import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
    { label: "고객사 재구매율", value: "92%" },
    { label: "누적 작업 횟수", value: "3,000+" },
    { label: "평균 만족도", value: "4.8/5" }
];

export function Hero() {
    return (
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
    );
} 