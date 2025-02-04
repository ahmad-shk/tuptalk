'use client'
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function page() {
  const [faq, setFaq] = useState(null);

  const toggleFaq = (index) => {
    setFaq(faq === index ? null : index);
  };
  return (
    <>
        <div>
            <NavBar/>
            <PageHeader heading={"FREQUENTLY ASKED QUESTIONS"} subheading={"FAQs"}/>
            <div className="questions-container mt-[60px]">
        {[
          {
            question: "What is Tuptalk, and how does it work?",
            answer:
              "Tuptalk blends live voice chat, radio broadcasting, and social networking, enabling real-time conversations, live sessions, and seamless social media sharing. Ideal for businesses, influencers, and communities, it fosters engagement and expands digital presence.",
          },
          {
            question: "Who can benefit from using Tuptalk?",
            answer:
              "Tuptalk blends live voice chat, radio broadcasting, and social networking, enabling real-time conversations, live sessions, and seamless social media sharing. Ideal for businesses, influencers, and communities, it fosters engagement and expands digital presence.",
          },
          {
            question: "What makes Tuptalk different from other communication platforms?",
            answer:
              "Tuptalk blends live voice chat, radio broadcasting, and social networking, enabling real-time conversations, live sessions, and seamless social media sharing. Ideal for businesses, influencers, and communities, it fosters engagement and expands digital presence.",
          },
          {
            question: "How does Tuptalk integrate with social media platforms?",
            answer:
              "Tuptalk blends live voice chat, radio broadcasting, and social networking, enabling real-time conversations, live sessions, and seamless social media sharing. Ideal for businesses, influencers, and communities, it fosters engagement and expands digital presence.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-h-[132px] mt-[25px] rounded-[18px] w-[80%] flex m-auto faq-shadow flex flex-col py-[40px] px-[40px] justify-center items-start"
          >
            <div className="flex items-center justify-between w-full">
              <p className="question font-[500] text-[22px] font-poppins">{item.question}</p>
              <div className={` cursor-pointer h-[50px] w-[50px] rounded-[50%] flex items-center justify-center ${faq === index ? "bg-gradient-to-l from-[#6446C7] to-[#DD38D5]" : "bg-[white] faq-button-shadow" } `} onClick={() => toggleFaq(index)}>
                <img src={faq === index ? "/assets/faqopen.svg" : "/assets/faqclose.svg"} alt="" />
              </div>
            </div>
            <p className={`${faq === index ? "block" : "hidden"} text-[18px] font-[400] font-poppins text-[#6F6C90] w-[80%] mt-4`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <Footer mt={"200px"}/>
        </div>
    </>
  );
}

export default page;
