
const Technologies = () => {
    return (
        <div>
            <div className=" flex-col justify-start items-start gap-4 inline-flex">
                <div className="#4cffa9">
                    <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Our technologies</div>
                </div>
                <div className="self-stretch"><span
                    className="text-black text-[32px] font-light font-['Oswald'] uppercase">technologies</span><span
                    className="text-black text-[32px] font-medium font-['Oswald'] uppercase"> used for development</span>
                </div>
                <div className="#1b1b1b">Our choice of technologies reflects our commitment to delivering top-tier
                    solutions for businesses of all sizes
                </div>
            </div>
            <div
                className="w-[328px] text-center  text-[40px] font-medium font-['Oswald'] uppercase">innovative
                technology stack
            </div>
            <div className="#4cffa9">
                <div className="#4cffa9">
                    <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack 01</div>
                </div>
                <div className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                    <div className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Java /
                        Kotlin
                    </div>
                    <div
                        className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(back-end)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;