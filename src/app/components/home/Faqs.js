'use client'
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Faqs() {
  const [faq, setFaq] = useState(null);

  const toggleFaq = (index) => {
    setFaq(faq === index ? null : index);
  };

  const faqsTop = useRef(null); 
  const faqsText = useRef(null);
  const faqsQuestions = useRef([]);

  useGSAP(()=>{
    gsap.to(faqsTop.current, {
                    transformOrigin: 'center',
                    scale: 1,
                    duration: .4,
                    onComplete: ()=>{
                       gsap.to(faqsText.current, {
                                   transformOrigin: 'center',
                                   scale: 1,
                                   duration: .4,
                               });
                    },
                    scrollTrigger: {
                        trigger: faqsTop.current,
                        start: '100px bottom',
                    }
                });
                gsap.to(faqsQuestions.current, {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    stagger: .4,
                    scrollTrigger: {
                      trigger: faqsQuestions.current,
                      start: '100px bottom',
                    }
                })
  })


  return (
    <div>
      <div className='flex items-center flex-col roadmap-header mt-[100px]'>
        <img ref={faqsTop} src="/assets/upline.svg" alt="" className='scale-0' />
        <p ref={faqsText} className='text-[40px] font-[700] font-popins gradient-text translate-y-[-10px] scale-0'>FAQs</p>
      </div>
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
            ref={(e)=>faqsQuestions.current[index]=e}
            key={index}
            className="min-h-[132px] mt-[25px] faq-question-container rounded-[18px] w-[80%] flex m-auto faq-shadow flex-col py-[40px] px-[40px] justify-center items-start opacity-0 translate-y-[100px]"
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


    </div>
  );
}

export default Faqs;
