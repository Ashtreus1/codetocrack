'use client';

import BoxReveal from '@/components/box-reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Can I still join even the competition has already started?",
      answer: "Yes, you can still join the competition even if it has already started.",
    },
    {
      question: "Are allowed to join multiple teams in a single section?",
      answer: "You can, as long as you are not dealing with cheating or any form of dishonesty.",
    },
    {
      question: "How can I register my team?",
      answer: `
        To register your team, you must fill out the registration form provided by the organizers.
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdctvwQyORY0PkBhmxmPJdNDIIQMb7pZEnnY6xvzkl36CfNkQ/viewform"
           class="text-orange-500 hover:text-orange-600 transition-colors">
          Code2Crack Registration
        </a>
      `,
    },
    {
      question: "How do the elimination weekly puzzle challenges work?",
      answer: "Organizers will provide a link to a set of 5 puzzles or riddles related to technology each week. Teams must solve these puzzles within a time limit to earn points.",
    },
    {
      question: "How will points be awarded during the competition?",
      answer: "Points will be awarded based on the puzzles solved, with each puzzle worth 2 points. Organizers will track and list team points weekly, and at the end of the semester, the top 10 teams will qualify for the finals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center border-t-4 border-orange-500 p-10">
      <BoxReveal boxColor="orange" duration={0.5}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-200 mb-5">
          Frequently Asked Questions
        </h2>
      </BoxReveal>
      <div className="w-full max-w-lg">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-5 text-gray-400 text-center">
        <p>
          For more inquiries, leave a chat in our{' '}
          <a className="text-orange-400" href="https://www.facebook.com/CvSUELITS">
            facebook page
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default FAQSection;