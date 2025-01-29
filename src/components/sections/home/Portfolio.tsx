import { useEffect, useRef } from "react";

const logos = [
    "/logo/0.png", "/logo/1.jpg", "/logo/2.png", "/logo/3.png", "/logo/4.jpg",
    "/logo/5.png", "/logo/6.png", "/logo/7.svg", "/logo/8.jpg", "/logo/9.png",
    "/logo/10.png", "/logo/12.png", "/logo/13.png", "/logo/14.png", "/logo/15.png",
    "/logo/16.png", "/logo/17.png", "/logo/18.png", "/logo/19.jpg", "/logo/20.png",
    "/logo/21.png", "/logo/22.png", "/logo/23.png", "/logo/24.png", "/logo/25.jpg",
    "/logo/26.png", "/logo/27.png", "/logo/28.jpg", "/logo/29.png", "/logo/30.png",
    "/logo/31.png", "/logo/32.png", "/logo/33.webp", "/logo/34.png", "/logo/35.png",
    "/logo/36.png", "/logo/37.webp", "/logo/38.png", "/logo/39.jpg"
];

// 이미지를 10번 반복하여 배열 생성
const repeatedLogos = Array(10).fill(logos).flat();

export function Portfolio() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            scrollContainer.scrollLeft += 1;
            if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
                scrollContainer.scrollLeft = 0;
            }
        };

        const intervalId = setInterval(scroll, 30);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    다양한 고객사와 함께했습니다
                </h2>
                <p className="text-lg text-center text-gray-600">
                    브릿지마케팅은 수많은 기업들과 함께 성장해왔습니다
                </p>
            </div>
            <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-hidden whitespace-nowrap py-8"
                style={{ scrollBehavior: 'smooth' }}
            >
                {repeatedLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        className="h-12 w-auto object-contain flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
} 