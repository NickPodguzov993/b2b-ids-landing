

const Footer = () => {
    return (
        <div>
            <div
                className="sm:hidden w-[360px] h-[640px] px-4 py-8 bg-[#1b1b1b] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-[54.90px] h-12 relative"/>
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-4 flex">
                    <div
                        className="self-stretch grow shrink basis-0 pb-6 border-b border-[#4cffa9] flex-col justify-between items-start flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="pb-0.5 justify-center items-center gap-2.5 inline-flex">
                                <div className="border-b border-white justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-[32px] font-medium font-['Oswald'] uppercase">info@name.com
                                    </div>
                                </div>
                                <div
                                    className="p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                    <div className="w-6 h-6 relative"/>
                                </div>
                            </div>
                            <div className="pb-0.5 justify-center items-center gap-2.5 inline-flex">
                                <div className="border-b border-white justify-center items-center gap-2.5 flex">
                                    <div className="text-white text-[32px] font-medium font-['Oswald'] uppercase">+357
                                        хх-ххх-ххх
                                    </div>
                                </div>
                                <div
                                    className="p-2.5 bg-[#e8eaed] rounded-[20px] justify-start items-center gap-2.5 flex">
                                    <div className="w-6 h-6 relative"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-end flex">
                            <div className="w-[180px] h-11 py-4 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-[#e8eaed] text-sm font-bold font-['Arial']">Policies</div>
                            </div>
                            <div className="w-[180px] h-11 py-4 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-[#e8eaed] text-sm font-bold font-['Arial']">Terms and conditions
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[130px] flex-col justify-start items-start gap-16 flex">
                        <div className="w-[330px] text-[#e8eaed] text-sm font-normal font-['Arial'] leading-snug">Dolor
                            ut. Sit vestibulum est. Sit hac dictumst. Sit faucibus. Tempus habitasse urna platea lore.
                        </div>
                        <div className="justify-start items-center gap-1 inline-flex">
                            <div className="w-4 h-4 relative"/>
                            <div className="text-[#e8eaed] text-sm font-normal font-['Inter'] leading-snug">Osuna,
                                2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;