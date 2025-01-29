import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <>
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            지금 바로 시작하세요
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            브릿지마케팅과 함께<br />
                            효과적인 네이버 카페 바이럴 마케팅을 시작하세요
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center py-3 px-8 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            무료 상담하기
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="w-full bg-white py-12 border-t">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            {/* Company Info */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                                    Bridge Marketing
                                </h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <span>서울시 성동구 뚝섬로 13길 38 (성수동 2가)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <span>사업자등록번호: 405-06-65006</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <a 
                                            href="mailto:director@bridgemarketing.xyz" 
                                            className="hover:text-green-600 transition-colors duration-200"
                                        >
                                            director@bridgemarketing.xyz
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="text-sm text-gray-500">
                                © {new Date().getFullYear()} Bridge Marketing. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
} 
