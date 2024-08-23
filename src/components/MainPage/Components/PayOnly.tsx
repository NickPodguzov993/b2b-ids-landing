import half from '../../../../public/assets/MainPage/Mobile/half.svg'


const PayOnly = () => {
    return (
        <div className='mt-[120px] '>
            <div className='p-4 bg-white'><span
                className="text-black text-[32px] font-light font-['Oswald'] uppercase">Pay only for the</span><span
                className="text-black text-[32px] font-medium font-['Oswald'] uppercase"> necessary functionality</span>
            </div>
            <div className="text-[#1b1b1b] text-base font-normal p-4 font-['Arial'] bg-white">To create and submit a
                personalized
                commercial proposal, please use the contact form
            </div>



            <div className="w-[343px]  flex-col ml-4 justify-start items-start gap-8 inline-flex ">

                <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden ">
                    <div className="flex flex-row    mt-[40px]">
                        <div
                            className="w-[300px] h-[340px] origin-top-left  flex-col justify-center items-center inline-flex">
                            <div className='border-l-2 border-r-2'>
                                <div>
                                    <img src={half}/>
                                </div>

                                <div className="bg-[#e8eaed] mt-[20px]  relative">
                                    <div className="self-stretch  px-2 flex-col justify-start items-start gap-3 flex">
                                        <div
                                            className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                            <div
                                                className="text-white text-sm font-normal font-['Arial'] leading-snug">01
                                            </div>
                                        </div>
                                        <div className="self-stretch text-black text-xl font-normal font-['Arial']">The
                                            cost is
                                            based on
                                            needs
                                        </div>
                                        <div
                                            className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                            <div
                                                className="text-white text-sm font-normal font-['Arial'] leading-snug">Calculate
                                                the cost
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[300px] h-[340px] origin-top-left  flex-col justify-center items-center inline-flex">
                            <div className=' border-r-2'>
                                <div>
                                    <img src={half}/>
                                </div>

                                <div className="bg-[#e8eaed] mt-[20px]  relative">
                                    <div className="self-stretch  px-2 flex-col justify-start items-start gap-3 flex">
                                        <div
                                            className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                            <div
                                                className="text-white text-sm font-normal font-['Arial'] leading-snug">01
                                            </div>
                                        </div>
                                        <div className="self-stretch text-black text-xl font-normal font-['Arial']">The
                                            cost is
                                            based on
                                            needs
                                        </div>
                                        <div
                                            className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                            <div
                                                className="text-white text-sm font-normal font-['Arial'] leading-snug">Calculate
                                                the cost
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
};

export default PayOnly;