import { BarChart3, Brain, MessageSquareText } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "경험과 인사이트의 결과",
        description: "수많은 프로젝트 경험을 통해 축적된 인사이트로 최적의 마케팅 전략을 제시합니다"
    },
    {
        icon: BarChart3,
        title: "데이터와 수치로 정형화된 KPI",
        description: "모든 마케팅 활동은 명확한 KPI를 기반으로 측정되고 최적화됩니다"
    },
    {
        icon: MessageSquareText,
        title: "신속한 커뮤니케이션과 리포트",
        description: "실시간 커뮤니케이션과 정기적인 리포트로 프로젝트의 진행 상황을 투명하게 공유합니다"
    }
];

export function Features() {
    return (
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
                                <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
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
    );
} 