import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartOptions,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const searchGrowthData = {
    labels: ["2020년 1월", "2022년 1월", "2024년 2월"],
    datasets: [
        {
            label: "검색 수(만)",
            data: [1200, 2000, 2800],
            borderColor: "#03AC0E",
            backgroundColor: "rgba(3, 172, 14, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: "#03AC0E",
        },
    ],
};

const categoryDistributionData = {
    labels: ["음식점", "카페", "병원", "미용", "학원", "기타"],
    datasets: [
        {
            data: [35, 25, 15, 12, 8, 5],
            backgroundColor: [
                "#03AC0E", // 네이버 초록
                "#34D399", // 밝은 초록
                "#6EE7B7", // 민트 초록
                "#A7F3D0", // 연한 민트
                "#D1FAE5", // 아주 연한 민트
                "#ECFDF5", // 거의 흰 민트
            ],
            borderWidth: 0,
        },
    ],
};

const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
                callback: function (tickValue: number | string) {
                    return tickValue + "만";
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
    animation: {
        duration: 2000,
        easing: "easeInOutQuart",
    },
};

const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 20,
                usePointStyle: true,
            },
        },
    },
    animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: "easeInOutQuart",
    },
};

export function Stats() {
    return (
        <section className='py-20 bg-gradient-to-br from-white via-green-50 to-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-12 font-aggro'
                >
                    네이버 플레이스 성장 지표
                </motion.h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#03AC0E]'>월간 검색 수 성장</h3>
                        <div className='h-[300px]'>
                            <Line options={lineOptions} data={searchGrowthData} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#03AC0E]'>업종별 분포</h3>
                        <div className='h-[300px]'>
                            <Doughnut options={doughnutOptions} data={categoryDistributionData} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2'
                    >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {[
                                { label: "월간 검색 수", value: "2,800만+" },
                                { label: "지도 앱 점유율", value: "95%" },
                                { label: "평균 방문 증가율", value: "250%" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className='p-6 text-center border-2 border-[#03AC0E] hover:shadow-lg transition-all duration-300'>
                                        <h4 className='text-lg font-medium mb-2 text-gray-600'>{stat.label}</h4>
                                        <p className='text-3xl font-bold text-[#03AC0E]'>{stat.value}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 