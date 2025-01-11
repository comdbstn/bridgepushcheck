import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const questions = [
    {
        question: "홍보 가능한 대학은 어디까지인가요?",
        answer: "서울을 비롯한 수도권 주요 대학 및 지방 소재 주요 대학에 홍보 가능합니다! 200여 개 주요 대학 커뮤니티에 홍보 가능하며, 협의 후 세부사항을 결정해드립니다.",
    },
    {
        question: "한번 올라간 글은 얼마나 유지되나요? 글이 삭제되지는 않나요?",
        answer: "게시판에 올라가는 글은 계속해서 유지되며, 시간이 지남에 따라 글이 자연스럽게 노출에서 밀려날 때까지 24시간 365일 지속됩니다. 커뮤니티 규정에 걸맞게 글을 구성하고 업로드하기 때문에 글이 삭제되는 경우는 매우 드물다는 점을 수천 건의 업로드 진행 경험과 함께 확실히 강조드립니다.",
    },
    {
        question: "조회수 등 지표는 어떻게 확인할 수 있나요?",
        answer: "대학 커뮤니티 특성상 조회수를 직접적으로 확인하는 것은 어렵습니다. 다만 별도의 단축링크(bit.ly 등)를 통해 제품 및 서비스의 홍보 페이지와 연결하여 유입 수를 측정하는 방법을 권장드립니다. 또한 자유게시판 바이럴 등의 경우에는 추천/스크랩 및 기타 반응 등을 종합하여 전달드리고 있습니다.",
    },
    {
        question: "마케팅원고 대필은 불가능한가요?",
        answer: "마케팅원고는 구매자 측에서 초안을 제시하는 것을 원칙으로 하되, 대학 커뮤니티 분위기에 맞게 글을 무료로 수정해드리고 있습니다. 만약 초안을 포함한 완전한 대필을 원하신다면 추가비용 30,000원과 함께 글을 작성드리고 있으니 참고해주시면 감사하겠습니다.",
    },
];

export function QA() {
    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    자주 묻는 질문
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 font-tway'
                >
                    에브리타임 마케팅에 대해 자주 묻는 질문들을 모았습니다
                </motion.p>

                <div className='max-w-3xl mx-auto'>
                    <Accordion type='single' collapsible>
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className='font-tway'>{item.question}</AccordionTrigger>
                                    <AccordionContent className='font-tway'>{item.answer}</AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
