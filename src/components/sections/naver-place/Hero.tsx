import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { formatNumber } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function Hero() {
    const { count: placeCount, ref: placeRef } = useCountAnimation(2800);
    const { count: userPercentage, ref: percentageRef } = useCountAnimation(95);
    const { count: monthlyUsers, ref: monthlyRef } = useCountAnimation(250);

    return (
        <section className='relative min-h-[100vh] w-full flex items-center bg-gradient-to-br from-[#03AC0E] via-[#02a00d] to-[#019E0C] overflow-hidden'>
            {/* Background patterns */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMjEuMTgyJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNLTM1Ljg5IDQ4NC4yMzdDLTEwLjI0NyA1MjIuMDg0IDIyNy4xNDIgNTE3LjMwMiAyNjcuMTAzIDUwOS4zMzFjNi42MDktMS4zMjEgMTguNDk1LTMuNjA3IDM1LjY1OC02Ljg1OCAxNDQuMDEtMjcuMjMgMjE3LjI0OC0xMDkuNDIgMzA2Ljk0NS0xMDkuNDIgODkuNjk3IDAgMTc0LjE1MSAxMC43MzMgMzY5LjI4NCA3Mi4yMyAxOTUuMTMyIDYxLjQ5NSAyOTUuMDExIDY5LjIzIDM5OS4wNTUgNTMuMjNDMTQ4Mi4wNDIgNDgxLjE4NSAxNTQ0IDQ1OS4xMTIgMTU0NCA0NTkuMTEyVjBILTYwLjA5MXY0MzkuNDk2YzEuNzMgOC44MzggMTEuNTMgMjUuNDYyIDI0LjIwMSA0NC43NDF6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-cover bg-center opacity-10 animate-pulse" />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='max-w-4xl mx-auto text-center'
                >
                    <div className='space-y-12 mb-12'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className='flex items-center justify-center gap-12'>
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src='/logo/naverplace.png'
                                alt='네이버 플레이스 로고'
                                className='h-28'
                            />
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#E8F5E9] via-[#FFFFFF] to-[#F1F8E9] select-none leading-none"
                            >
                                NAVER PLACE
                            </motion.h1>
                        </div>
                        <div className='space-y-8'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='text-3xl sm:text-5xl font-bold text-white font-aggro'
                            >
                                매장 마케팅의 새로운 기준
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className='text-lg sm:text-xl text-white/90 px-4 font-tway'
                            >
                                네이버 플레이스는 국내 최대의 지역 정보 플랫폼입니다.
                                <br className='hidden sm:block' />
                                효과적인 매장 노출을 위한 최적의 플랫폼, 네이버 플레이스 마케팅을 시작하세요.
                            </motion.p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pb-8 sm:pb-0'>
                            {[
                                { number: placeCount, suffix: "만", label: "월간 검색 수", ref: placeRef },
                                { number: userPercentage, suffix: "%", label: "지도 앱 점유율", ref: percentageRef },
                                { number: monthlyUsers, suffix: "%", label: "평균 방문 증가율", ref: monthlyRef },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className='p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group'
                                    ref={stat.ref}
                                >
                                    <h3 className='text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 font-aggro'>
                                        <span className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60'>
                                            {formatNumber(stat.number, stat.suffix)}
                                        </span>
                                    </h3>
                                    <p className='text-white/80'>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className='mt-12 pb-16 sm:pb-20'
                        >
                            <a
                                href='http://pf.kakao.com/_CYGdn/chat'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#03AC0E] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                            >
                                <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 
