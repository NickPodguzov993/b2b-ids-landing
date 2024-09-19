import BlueBlackTicker from "../../BlueBlackTicker.tsx";
import arrow from '../../../../public/assets/MainPage/Mobile/arrow.svg'
import {useState} from "react";
const Faq = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)




    return (
        <div>
            <div className='hidden sm:block'>
                <BlueBlackTicker/>
                <div className="text-center text-black text-9xl font-medium font-['Oswald'] uppercase">FaQ</div>
                <div>
                    <div className=" ml-[372px] pt-8 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']">Is
                                there
                                a mobile application?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen(!open)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">No,
                            there is currently no mobile application developed. <br/> The recommended device
                            resolution
                            for
                            comfortable use is 1920x1080.
                        </div>}
                    </div>
                    <div className=" ml-[372px]  flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']"> What
                                are the system requirements?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen2(!open2)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open2 ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">OS:
                            Windows 7, 8, 8.1, 10, 11 or later versions; OS X <br/>
                            (Monterey, Big Sur, Catalina, Mojave, High Sierra) or later versions. <br/>
                            Recommended incoming/outgoing connection speed — at least 2 Mbps. <br/> Browsers: Google
                            Chrome 106.0 and above; Opera 91.0 and above; <br/> Safari 14.0 and above.
                        </div>}
                    </div>
                    <div className=" ml-[372px]  flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']"> How
                                is software support provided?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen3(!open3)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open3 ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">
                            System support is provided through software maintenance after <br/> its delivery to the
                            customer,
                            including troubleshooting identified <br/> during operation and planned system upgrades
                            according <br/> to scheduled changes and improvements.
                        </div>}
                    </div>
                    <div className=" ml-[372px]  flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']"> How
                                much does each product cost?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen4(!open4)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open4 ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">
                            The cost of the software is calculated individually <br/> based on needs, required modules,
                            and usage duration.
                        </div>}
                    </div>
                    <div className=" ml-[372px]  flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']"> I am ready to purchase the software, how do I do it?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen5(!open5)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open5 ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">
                            To form and send an individual commercial proposal, please contact us via email.
                        </div>}
                    </div>
                    <div className=" ml-[372px]  flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[800px] justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-normal font-['Arial']"> How do I install the software?
                            </div>


                            <div
                                className="w-11 h-11 p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 relative rotate-[-90deg]" onClick={() => {
                                    setOpen6(!open6)
                                }}><img src={arrow}/>
                                </div>
                            </div>
                        </div>
                        {!open6 ? <span></span> : <div
                            className="grow shrink basis-0 text-black text-[24px] font-normal font-['Arial']">
                            This is a SaaS product. Users do not need to install or configure <br/> the software
                            themselves. It is only necessary to go through <br/> the registration and authorization
                            process.
                        </div>}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Faq;