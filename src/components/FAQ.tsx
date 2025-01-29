import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQ = () => {
  const { t } = useTranslation("common");

  const FAQList: FAQProps[] = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer"),
      value: "item-1",
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
      value: "item-2",
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
      value: "item-3",
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer"),
      value: "item-4",
    },
  ];

  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left font-semibold">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-base">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-6 text-lg">
        {t("faq.contact.text")}{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:contact@kumbu.ai"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          {t("faq.contact.linkText")}
        </a>
      </h3>
    </section>
  );
};
