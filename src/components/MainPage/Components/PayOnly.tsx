

const PayOnly = () => {
    return (
        <div>
            <div><span
                className="text-black text-[32px] font-light font-['Oswald'] uppercase">Pay only for the</span><span
                className="text-black text-[32px] font-medium font-['Oswald'] uppercase"> necessary functionality</span>
            </div>
            <div className="text-[#1b1b1b] text-base font-normal font-['Arial']">To create and submit a personalized
                commercial proposal, please use the contact form
            </div>
            <div className="#e8eaed">
                <div className="self-stretch h-[124px] px-2 flex-col justify-start items-start gap-3 flex">
                    <div
                        className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-sm font-normal font-['Arial'] leading-snug">01</div>
                    </div>
                    <div className="self-stretch text-black text-xl font-normal font-['Arial']">The cost is based on
                        needs
                    </div>
                    <div
                        className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-sm font-normal font-['Arial'] leading-snug">Calculate the cost
                        </div>
                        <div className="w-5 h-5 relative"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayOnly;