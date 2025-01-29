import { Link } from "react-router-dom";

export function MainNav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Bridge Marketing
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                            문의하기
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 