import { Link } from "react-router-dom";

export function ServicePage() {
    const services = [
        {
            title: "에브리타임",
            description: "대학생 타겟 바이럴 마케팅",
            link: "/everytime",
        },
        {
            title: "블라인드",
            description: "직장인 타겟 바이럴 마케팅",
            link: "/blind",
        },
        {
            title: "틱톡",
            description: "MZ세대 타겟 바이럴 마케팅",
            link: "/tiktok",
        }
    ];

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-2xl font-bold mb-8 font-tway">서비스 목록</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            to={service.link}
                            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <h2 className="text-xl font-bold mb-2 font-tway">{service.title}</h2>
                            <p className="text-gray-600 font-tway">{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 