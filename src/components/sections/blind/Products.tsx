export function Products() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-8">블라인드 바이럴 마케팅</h2>
                    <p className="text-lg text-gray-600">
                        "가장 큰 직장인 커뮤니티 "블라인드"에 게시글, 댓글로 바이럴마케팅을 진행합니다."
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-12">브릿지마케팅만의 장점</h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* 업계 최대 경력 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-xl font-semibold mb-4 text-blue-600">업계 최대 경력</div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="text-sm">• 업계 최초로 블라인드 마케팅을 시작했습니다. (크몽 기준)</li>
                                <li className="text-sm">• 노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다.</li>
                            </ul>
                        </div>

                        {/* 업계 최저가 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-xl font-semibold mb-4 text-blue-600">업계 최저가</div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="text-sm">• 장기간 확보해온 계정 및 계약을 맺은 직장인 풀을 통하여 합리적인 가격</li>
                            </ul>
                        </div>

                        {/* 9년경력의 마케팅 노하우 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-xl font-semibold mb-4 text-blue-600">9년경력의 마케팅 노하우</div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="text-sm">• 보고하기 쉬운 마케팅 보고서 제공</li>
                                <li className="text-sm">• 1:1 담당자 매칭 및 매니징</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 