import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro tracking-wider">
                            BRIDGE MARKETING
                        </span>
                    </Link>

                    {/* 메뉴 */}
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        <Link
                            to="/service"
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === "/service"
                                    ? "text-purple-400"
                                    : "text-gray-300 hover:text-purple-400"
                            }`}
                        >
                            서비스
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === "/portfolio"
                                    ? "text-purple-400"
                                    : "text-gray-300 hover:text-purple-400"
                            }`}
                        >
                            포트폴리오
                        </Link>
                        <Link
                            to="/insights"
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === "/insights"
                                    ? "text-purple-400"
                                    : "text-gray-300 hover:text-purple-400"
                            }`}
                        >
                            인사이트
                        </Link>
                        <a
                            href="http://pf.kakao.com/_CYGdn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 