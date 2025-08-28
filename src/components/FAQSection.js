import { useState } from "react"

const faqs = [
  {
    question: "Is QTify free to use?",
    answer: "Yes! It is 100% free and has 0% ads!",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "Sorry, unfortunately we don't provide the service to download any songs.",
  },
  {
    question: "How many devices can I use with one account?",
    answer: "You can use your QTify account on up to 5 devices simultaneously.",
  },
  {
    question: "What audio quality does QTify offer?",
    answer: "QTify offers high-quality audio streaming up to 320kbps for the best listening experience.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
              >
                <span className="faq-question-text">{faq.question}</span>
                <svg
                  className={`faq-icon ${openIndex === index ? 'faq-icon-open' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
