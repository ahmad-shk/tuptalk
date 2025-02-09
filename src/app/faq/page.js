'use client'
import React, { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function page() {
  const [faq, setFaq] = useState(null);

  const toggleFaq = (index) => {
    setFaq(faq === index ? null : index);
  };

  const faqBoxes = useRef([]);

  useGSAP(()=>{
    faqBoxes.current.forEach((faqBox, i)=>{
      gsap.to(faqBoxes.current[i], {
         y: 0,
         opacity: 1,
         duration: .4,
         scrollTrigger: {
          trigger: faqBoxes.current[i],
          start: '100px bottom'
         }
      })
    })
  })

  return (
    <>
        <div>
    <div
      className={`cursor-pointer fixed bottom-[60px] right-[60px] z-[9999] bg-radial faq-dropdown-icon min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex items-center justify-center transition-opacity duration-300 ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <img className="rotate-[180deg]" src="/assets/faqopen.svg" alt="Scroll to Top" />
    </div>
            <NavBar/>
            <div className='pt-[80px]'>

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
            ref={e=>faqBoxes.current[index]=e}
            key={index}
            className="opacity-0 translate-y-[60px] min-h-[132px] mt-[25px] faq-question-container rounded-[18px] w-[80%] flex m-auto faq-shadow flex flex-col py-[40px] px-[40px] justify-center items-start"
          >
            <div className="flex items-center justify-between w-full">
              <p className="question question-text font-[500] text-[22px] font-poppins">{item.question}</p>
              <div className={` cursor-pointer faq-dropdown-icon min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] rounded-[50%] flex items-center justify-center ${faq === index ? "bg-gradient-to-l from-[#6446C7] to-[#DD38D5]" : "bg-[white] faq-button-shadow" } `} onClick={() => toggleFaq(index)}>
                <img className='' src={faq === index ? "/assets/faqopen.svg" : "/assets/faqclose.svg"} alt="" />
              </div>
            </div>
            <p className={`${faq === index ? "block" : "hidden"} bg-[] answer-text text-[18px] font-[400] font-poppins text-[#6F6C90] w-[80%] mt-4`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <Footer mt={"200px"}/>
            </div>
        </div>
    </>
  );
}

export default page;
