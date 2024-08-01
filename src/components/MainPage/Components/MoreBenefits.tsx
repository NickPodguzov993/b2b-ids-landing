

const MoreBenefits = () => {
    return (
        <div>
            <div className="w-[360px] h-[527px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[213px] flex-col justify-start items-center gap-4 flex">
                    <div className="#4cffa9">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snug">More benefits</div>
                    </div>
                    <div className="w-[324px] justify-center items-center gap-3.5 ">
                        <div
                            className="text-center text-black text-[32px] font-light font-['Oswald'] uppercase">Advantages
                        </div>
                        <div className="text-center text-black text-[32px] font-medium font-['Oswald'] uppercase">of
                            working
                            with us
                        </div>

                    </div>
                    <div className="#1b1b1b">At our company, we pride ourselves on delivering exceptional value through
                        our
                        core strength
                    </div>
                </div>
                <div className="w-[328px] justify-start items-center gap-3.5 inline-flex">

                </div>
            </div>

            <div className=" px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch"><span
                    className="text-black text-[32px] font-medium font-['Oswald'] uppercase">Only registration</span><span
                    className="text-black text-[32px] font-light font-['Oswald'] uppercase"> is nedeed</span></div>
                <div className="#4cffa9">
                    <div className="text-black text-lg font-medium font-['Oswald'] uppercase">Let's go</div>
                    <div className="w-8 h-8 relative"/>
                </div>
                <div className="w-[328px] h-[212.09px] relative">
                    <img className="w-[328px] h-[212.09px] left-0 top-0 absolute"
                         src="https://via.placeholder.com/328x212"/>
                    <div className="#f4f4f4"/>
                </div>
                <div>A ready-to-use online service, no special software installation actions are
                    required from the user
                </div>
            </div>
        </div>
    );
};

export default MoreBenefits;