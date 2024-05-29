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

const FAQList: FAQProps[] = [
  {
    question: "Is this app free?",
    answer: "Yes, Kumbu offers a free plan for personal use with limited functionality, but organizations and advanced features require a paid subscription: we have different offers in this sense.",
    value: "item-1",
  },
  {
    question: "How does it work ?",
    answer:
      "Kumbu is a web platform dedicated to centralizing corporate knowledge and documents. These documents can be digital or paper scans. When you upload documents, they are stored on a secure cloud, and our software solution makes it easy to access them: directly in folders, via a search bar or via a dedicated chat.",
    value: "item-2",
  },
  {
    question:
      "Why should I care ?",
    answer:
      "Corporate knowledge is the crucial raw material for operating in the 21st century. Having a functional and efficient information management system sets you apart in the ecosystem and among your competitors.",
    value: "item-3",
  },
  {
    question: "What data do you collect ?",
    answer: "We don't have direct access to our customers' documents, which are stored in separate partitions. We only collect platform usage data in order to improve the user experience.",
    value: "item-4",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:contact@kumbu.ai"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
