'use client'

import React from 'react';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function page() {
    const handleDownload = () => {
        window.open('/assets/tuptalkinfo.pdf', '_blank'); // Opens the PDF in a new tab
    };
    return (
        <div>
            <NavBar />
            <div className='pt-[80px]'>
                <PageHeader heading={"DOCS"} subheading={"Docs"} />
                <div className='h-[48px] w-[220px] mt-[30px] m-auto docs-whitepaper gradient-bg rounded-[14px] flex items-center justify-center'>
                    <button
                        onClick={handleDownload}
                        className='h-[44px] text-black font-poppins w-[216px] text-[30px] rounded-[14px] bg-[white]'
                    >
                        WHITEPAPER
                    </button>
                </div>
                <p className='mt-[105px] docs-heading docs-main-heading text-[24px] text-center font-[400] font-poppins'>Import your TUPL Tokens to your MetaMask or TrustWallet</p>
                <div className="wallet-container flex px-[8%] gap-[50px] mt-[80px]">
                    <div className="metamask metamask-left w-[50%] rounded-[50px] py-[50px] px-[30px] border-[1px] border-[#9B9B9B]">
                        <p className='font-poppins font-[600] docs-heading text-[24px] text-center mb-[90px]'>Import process using MetaMask</p>
                        <div className="relative flex flex-col items-start gap-[40px]">
                            <div className="absolute left-[25px] top-0 w-[2px] bg-[#738DED] h-[100%]"></div>
                            {/* Point 1 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    1
                                </div>
                                <span className=''>
                                    <p className=' point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Get the TUPL Token Contract Address</p>
                                    <div className='ml-[8px]'>
                                        <p className='w-[90%] point-heading font-poppins font-[400] text-[16px] text-[#888888] leading-[24px]'>The TUPL token contract address is provided on the presale dApp or the official Tuptalk website. Always verify the contract address through our official communication channels to avoid scams.</p>
                                        <p className='font-poppins font-[400] text-[16px] leading-[24px]'>Contract Address: 
                                        <span className='font-poppins font-[700] text-[16px]  leading-[24px] break-all'> 0x77033DecB1d3bf00384473e34B07958044a72aD3</span></p>
                                        {/* <p className='underline font-bold text-[#728DED]'>LINK</p> */}
                                        <a className='underline font-bold text-[#728DED]' target='blank' href="https://support.metamask.io/metamask-portfolio/overview/how-to-import-a-token-in-metamask-portfolio/">LINK</a>
                                    </div>
                                </span>
                            </div>

                            {/* Point 2 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    2
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Open MetaMask</p>
                                    <div className='ml-[8px]'>
                                        <ul className="list-disc leading-[30px] pl-5 text-[16px] text-[#888888] font-[400] font-poppins">
                                            <li>Launch the MetaMask extension in your browser or open the MetaMask app on your mobile device.</li>
                                            <li>Log in to your wallet using your password or biometric authentication.</li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                            {/* Point 3 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    3
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Add a Custom Token</p>
                                    <div className='ml-[8px]'>
                                        <div>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Switch to the Correct Network:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                                Ensure your MetaMask is set to the network where you purchased the TUPL tokens (e.g., Ethereum Mainnet or another specified network).
                                            </p>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Go to the Tokens Tab:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                                Click on the “Assets” tab to view your token holdings. Scroll to the bottom and click “Import Tokens.”
                                            </p>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Enter the TUPL Token Details:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                                In the “Custom Token” tab, input the following information:
                                            </p>
                                        </div>
                                        <div className='flex docs-text-flex gap-[0px] flex-wrap'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888] text-nowrap'>Token Contract Address: </p>
                                            <p className='font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] break-all'>0x77033DecB1d3bf00384473e34B07958044a72aD3</p>
                                        </div>
                                        <div className='flex docs-text-flex gap-[5px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Token Symbol: </p>
                                            <p className='font-poppins text-[16px] font-[400] leading-[24px] text-[#888888]'>TUPL</p>
                                        </div>
                                        <div className='flex docs-text-flex gap-[5px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Decimals: </p>
                                            <p className='font-poppins text-[16px] font-[400] leading-[24px] text-[#888888]'>18 (or the specified number provided in the presale documentation)</p>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            {/* Point 4 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className='flex flex-col'>
                                    <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                        4
                                    </div>
                                    <div className='w-[30ox] last-point-height h-[280px] bg-[white] '></div>
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>View Your TUPL Tokens</p>
                                    <div className='ml-[8px]'>
                                        <p className='w-[90%] point-heading font-poppins font-[400] text-[16px] text-[#888888] leading-[24px]'>Once imported, your TUPL tokens will appear in the Assets tab of your MetaMask wallet. You can now see your balance and use your tokens as needed.</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="trustwallet trustwallet-right w-[50%] rounded-[50px] py-[50px] px-[30px] border-[1px] border-[#9B9B9B]">
                        <p className='font-poppins font-[600] text-[24px] text-center  mb-[90px] docs-heading'>Import process using TrustWallet</p>
                        <div className="relative flex flex-col items-start gap-[40px]">
                            <div className="absolute left-[25px] top-0 w-[2px] bg-[#738DED] h-[100%]"></div>
                            {/* Point 1 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    1
                                </div>
                                <span className=''>
                                    <p className=' point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Get the TUPL Token Contract Address</p>
                                    <div className='ml-[8px]'>
                                        <p className='w-[90%] point-heading font-poppins font-[400] text-[16px] text-[#888888] leading-[24px]'>You’ll need the TUPL token contract address, which can be found on the presale dApp or the official Tuptalk website. Always ensure you’re using the verified contract address from our official sources.</p>
                                        <p className='font-poppins font-[400] text-[16px] leading-[24px]'>Contract Address: <span className='font-poppins font-[700]  break-all text-[16px] leading-[24px]'>0x77033DecB1d3bf00384473e34B07958044a72aD3</span></p>
                                        {/* <p className='underline font-bold text-[#728DED]'>LINK</p> */}
                                        <a className='underline font-bold text-[#728DED]' target='blank' href="https://trustwallet.com/blog/how-to-add-a-custom-token-using-trust-wallet">LINK</a>
                                    </div>
                                </span>
                            </div>

                            {/* Point 2 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    2
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Open TrustWallet</p>
                                    <div className='ml-[8px]'>
                                        <p className='font-poppins font-[400] text-[16px] text-[#888888] leading-[24px]'>Launch the Trust Wallet app on your mobile device. Ensure you’re on the correct wallet and have access to the network (e.g., Ethereum) used during the presale.</p>
                                    </div>
                                </span>
                            </div>
                            {/* Point 3 */}
                            <div className="flex points-gap gap-[15px] items-start relative">
                                <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                    3
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>Add a Custom Token</p>
                                    <div className='ml-[8px]'>
                                        <div>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Tap the “Search” Icon:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            On the main wallet screen, tap the “Search” icon in the upper-right corner.
                                            </p>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Scroll Down and Add Custom Token:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            Scroll to the bottom of the token list and tap “Add Custom Token.”
                                            </p>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Enter the TUPL Token Details:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            <span className='font-[600]'>Network:</span> Select the correct blockchain network (e.g., Ethereum) where the TUPL tokens were purchased.
                                            </p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            <span className='font-[600]'>Contract Address:</span> Paste the TUPL token contract address.
                                            </p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            <span className='font-[600]'>Name:</span> Enter "Tuptalk " or "TUPL."

                                            </p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            <span className='font-[600]'>Symbol:</span> TUPL
                                            </p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            <span className='font-[600]'>Decimals:</span> 18 (or the specified number provided in the presale documentation).
                                            </p>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <p className='font-poppins font-[700] text-[16px] leading-[24px] text-[#888888]'>Save the Token:</p>
                                            <p className="font-poppins text-[16px] font-[400] leading-[24px] text-[#888888] [text-indent:8px]">
                                            Once you’ve entered the details, tap “Save” or “Done.”
                                            </p>
                                            </div>
                                    </div>
                                </span>
                            </div>
                            {/* Point 4 */}
                            <div className="flex points-gap gap-[15px] trustwallet-last-option items-start relative ">
                                <div className='flex flex-col'>
                                    <div className="min-h-[51px] min-w-[51px] rounded-full flex items-center justify-center bg-[#738DED] font-poppins font-[700] text-[24px] text-white z-10">
                                        4
                                    </div>
                                    <div className='w-[30ox] last-point-height h-[280px] bg-[white] '></div>
                                </div>
                                <span>
                                    <p className='point-heading w-[90%] font-poppins font-[500] text-[16px] leading-[24px]'>View Your TUPL Tokens</p>
                                    <div className='ml-[8px]'>
                                        <p className='w-[90%] point-heading font-poppins font-[400] text-[16px] text-[#888888] leading-[24px]'>After saving the custom token, you’ll see TUPL listed in your wallet.</p>
                                    </div>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer mt={"200px"} />
            </div>
        </div>
    );
}

export default page;
