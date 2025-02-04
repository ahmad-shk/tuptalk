import NavBar from '@/app/components/NavBar';
import React from 'react';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

function page() {
  const steps = [
    {
      number: 1,
      title: "Prepare Your Wallet",
      points: [
        "Use a decentralized wallet compatible with Wallet Connect, such as MetaMask or Trust Wallet.",
        "Ensure your wallet is set to the Ethereum network (ERC-20).",
      ],
    },
    {
      number: 2,
      title: "Fund Your Wallet with ETH",
      points: [
        "Ethereum (ETH) is required for transaction gas fees, even if you plan to purchase TUPL using USDT.",
        "Acquire ETH via platforms like Coinbase, Binance, or any other reputable exchange, and transfer it to your wallet.",
      ],
    },
    {
      number: 3,
      title: "Visit the Tuptalk Presale Platform",
      points: [
        "Open your web browser and navigate to https:// .tuptalk",
        'Click the "Connect Wallet" button to link your wallet to the platform.',
      ],
    },
    {
      number: 4,
      title: "Select Payment Method",
      points: [
        "Choose to pay using ETH or USDT by selecting the respective button on the presale dashboard.",
      ],
    },
    {
      number: 5,
      title: "Enter Purchase Amount",
      points: [
        "Input the amount of ETH or USDT you want to ",
        "The dashboard will display the number of TUPL tokens you’ll ",
        'Confirm your selection and click "Buy."',
      ],
    },
    {
      number: 6,
      title: "Approve and Confirm the Transaction",
      points: [
        "Verify transaction details in your wallet, including the amount and recipient address.",
        "Confirm the transaction. Wait for the Ethereum network to validate your ",
        'For USDT Payments: Approve the USDT contract in a separate step before completing the final transaction."',
      ],
    },
    {
      number: 7,
      title: "Success!",
      points: [
        "Once confirmed, your TUPL tokens will be sent directly to your wallet.",
      ],
    },
  ];
  return (
    <div>
      <NavBar />
      <div>
        <PageHeader heading={"HOW TO BUY"} subheading={"How to buy"}/>
        <div className="steps-container px-[130px] pt-[50px]">
          {steps.map((step, index) => (
            <div key={index} className="flex mt-[30px]">
              {/* Left Section */}
              <div className="w-[9%] flex flex-col items-center">
                <div className="h-[85px] w-[85px] rounded-full bg-[#738DED] font-inter text-white font-[700] text-[50px] flex items-center justify-center">
                  {step.number}
                </div>
                <p className="font-inter font-[600] text-[16px] text-[#5F5F5F] mt-[10px]">Step {step.number}</p>
              </div>

              {/* Right Section */}
              <div className="ml-[20px] w-[91%] how-to-buy-step-bg px-[40px] py-[20px] rounded-[22px]">
                <p className="font-[600] font-inter text-[20px]">{step.title}</p>
                <ul className="list-disc leading-[30px] mt-[18px] pl-5 text-[16px] text-[#5F5F5F] font-[400] font-inter">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer mt={"200px"} />
    </div>
  );
}

export default page;
