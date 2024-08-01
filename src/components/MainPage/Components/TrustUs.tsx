

const TrustUs = () => {
    return (
        <div>
            <div className="w-[360px] h-[113px] px-4 flex-col justify-start items-center gap-8 inline-flex">
                <div className="flex-col justify-center items-center gap-3.5 flex">
                    <div className="#4cffa9">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snug">They trust us</div>
                    </div>
                </div>
                <div className="self-stretch h-12 flex-col justify-center items-center gap-10 flex">
                    <div className="self-stretch justify-center items-center gap-6 inline-flex">
                        <div className="w-[120px] h-12 py-4 rounded-[100px] justify-center items-center gap-2.5 flex">
                            <img className="grow shrink basis-0 h-[46px]" src="https://via.placeholder.com/120x46"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;