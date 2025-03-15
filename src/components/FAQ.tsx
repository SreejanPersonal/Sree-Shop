
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the OpenAI API?",
    answer: "The OpenAI API is a platform that provides access to OpenAI's powerful AI models, including GPT-4o, GPT-3.5 Turbo, and other specialized models for various tasks like text generation, image analysis, and more."
  },
  {
    question: "How do I get started with the API?",
    answer: "Getting started is simple. Sign up for an account, choose your subscription plan, and you'll receive your API key. You can then start making API calls using our comprehensive documentation and SDKs for various programming languages."
  },
  {
    question: "What programming languages are supported?",
    answer: "Our API supports all major programming languages including Python, JavaScript/Node.js, Java, Ruby, Go, PHP, C#, and more. We provide official SDKs for most languages and the REST API can be used with any language that can make HTTP requests."
  },
  {
    question: "How is API usage billed?",
    answer: "API usage is billed based on the number of tokens processed. Different models have different pricing tiers. Your subscription includes a token allowance, and additional usage is billed according to our pay-as-you-go rates."
  },
  {
    question: "Are there rate limits?",
    answer: "Yes, there are rate limits that vary by subscription tier. Basic plans have standard rate limits, while higher-tier plans have increased limits. Enterprise customers can request custom rate limits based on their specific needs."
  },
  {
    question: "What kind of support is provided?",
    answer: "We offer different levels of support based on your subscription. Basic plans include community support, Professional plans include priority email support, and Enterprise plans come with dedicated support and custom SLAs."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All API requests are encrypted using TLS. We do not use your data to train our models unless you explicitly opt in. Enterprise customers can request additional security measures and custom data handling agreements."
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to common questions about our OpenAI API services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a href="#contact" className="btn btn-outline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
