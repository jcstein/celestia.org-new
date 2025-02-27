import { faqs } from "@/data/faq/faqs";
import TertiaryHero from "@/components/Heroes/TertiaryHero";
import GetInTouch from "@/components/CallToActions/GetInTouch";
import FAQAccordion from "@/components/Accordion/FAQAccordion";

import meta from "@/components/Meta/Meta";
import seo from "@/data/faq/seo";

export const metadata = meta(seo);

export default async function FAQs() {
  return (
    <>
      <TertiaryHero
        title={"FAQ"}
        blurbTitle={"Frequently asked questions and answers"}
      />
      {/* FAQs */}
      <FAQAccordion faqData={faqs} />
      <GetInTouch />
    </>
  );
}

const FAQ = ({ faq }) => {
  return (
    <div className={"faq-item"}>
      <h2>{faq.question}</h2>
      <p>{faq.answer}</p>
    </div>
  );
};
