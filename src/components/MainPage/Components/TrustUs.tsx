import google from "../../../../public/assets/MainPage/Mobile/google.png";



const TrustUs = () => {
    return (
        <div>
            <div className="sm:hidden w-[360px]  px-4 flex-col justify-start items-center gap-8 inline-flex">
                <div className="flex-col justify-center items-center gap-3.5 flex">
                    <div className="bg-[#4cffa9] p-2 rounded-lg">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snug">They trust us</div>
                    </div>
                </div>
                <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                    <div className="flex flex-row    mt-[40px]">
                        <div
                            className="origin-top-left w-[120px] h-[46px]  flex-col justify-center items-center inline-flex">
                            <img
                                 src={google}/>
                        </div>
                        <div
                            className=" origin-top-left w-[120px] ml-4 h-[46px] flex-col justify-center items-center inline-flex">
                            <img
                                 src={google}/>
                        </div>
                        <div
                            className=" origin-top-left  flex-col ml-4 w-[120px] h-[46px] justify-center items-center inline-flex">
                            <img
                                 src={google}/>
                        </div>
                        <div
                            className=" origin-top-left  flex-col ml-4 w-[120px] h-[46px] justify-center items-center inline-flex">
                            <img
                                 src={google}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;