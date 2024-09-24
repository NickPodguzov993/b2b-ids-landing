

const SendForm = () => {
    return (
        <div className="absolute right-[0px] w-[640px] h-[900px] ml-[132px] p-8 bg-white z-20 flex-col justify-between items-start inline-flex">
            <div className="self-stretch h-[710px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch justify-between items-start inline-flex">
                    <div><span className="text-black text-[64px] font-medium font-['Oswald'] uppercase">write</span><span
                        className="text-black text-[64px] font-medium font-['Oswald'] uppercase"> </span><span
                        className="text-black text-[64px] font-light font-['Oswald'] uppercase">to us</span></div>
                    <div className="w-11 h-11 justify-center items-center flex">
                        <div className="w-6 h-6 relative"/>
                    </div>
                </div>
                <div className="self-stretch h-[583px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[349px] flex-col justify-start items-start gap-2.5 flex">
                        <div
                            className="self-stretch h-16 p-4 bg-white rounded-[20px] border border-[#e8eaed] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Name</div>
                        </div>
                        <div
                            className="self-stretch h-16 p-4 bg-white rounded-[20px] border border-[#e8eaed] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Phone</div>
                        </div>
                        <div
                            className="self-stretch h-16 p-4 bg-white rounded-[20px] border border-[#e8eaed] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">E-mail</div>
                        </div>
                        <div
                            className="self-stretch h-[127px] pl-4 pr-3.5 pt-3.5 pb-4 bg-white rounded-[20px] border border-[#e8eaed] justify-start items-start gap-2.5 inline-flex">
                            <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Message</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[86px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch text-black text-base font-normal font-['Arial']">Select request
                            type
                        </div>
                        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                            <div className="justify-start items-center gap-1 flex">
                                <div className="w-6 h-6 relative"/>
                                <div className="text-black text-base font-normal font-['Arial']">No request type</div>
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                                <div className="w-6 h-6 relative"/>
                                <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Request type 3
                                </div>
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                                <div className="w-6 h-6 relative"/>
                                <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Request type 1
                                </div>
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                                <div className="w-6 h-6 relative"/>
                                <div className="text-[#7e7e7e] text-base font-normal font-['Arial']">Request type 2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3.5 flex">
                        <div
                            className="self-stretch h-16 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-white text-base font-normal font-['Arial']">Send</div>
                            <div className="w-6 h-6 relative"/>
                        </div>
                        <div className="self-stretch"><span
                            className="text-[#1b1b1b] text-sm font-normal font-['Arial'] leading-snug">By clicking send you accept our </span><span
                            className="text-[#4cffa9] text-sm font-normal font-['Arial'] leading-snug">privacy policy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch pt-3 border-t border-[#e8eaed] justify-between items-center inline-flex">
                <div className="pb-0.5 justify-center items-center gap-2.5 flex">
                    <div className="text-[#4cffa9] text-[32px] font-medium font-['Oswald'] uppercase">info@name.com
                    </div>
                </div>
                <div className="pb-0.5 justify-center items-center gap-2.5 flex">
                    <div className="text-[#4cffa9] text-[32px] font-medium font-['Oswald'] uppercase">+357-хх-ххх-ххх
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendForm;