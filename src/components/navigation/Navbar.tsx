import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* 로고 */}
                    <Link to="/" className="flex items-center">
                        <img src="/logo/bridgemlogo.png" alt="Bridge Marketing" className="h-8" />
                    </Link>

                    {/* 네비게이션 링크 */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-purple-600 font-tway transition-colors">
                            메인
                        </Link>
                        <Link to="/portfolio" className="text-gray-600 hover:text-purple-600 font-tway transition-colors">
                            포트폴리오
                        </Link>
                        <Link to="/insight" className="text-gray-600 hover:text-purple-600 font-tway transition-colors">
                            인사이트
                        </Link>
                        <Link to="/service" className="text-gray-600 hover:text-purple-600 font-tway transition-colors">
                            서비스
                        </Link>
                        <a
                            href="http://pf.kakao.com/_CYGdn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-tway hover:from-purple-700 hover:to-indigo-700 transition-all hover:shadow-lg"
                        >
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 