import card1 from '../../../../public/assets/MainPage/Mobile/card1Mobile.png'
import card2 from '../../../../public/assets/MainPage/Mobile/Card2Mobile.png'
import card3 from '../../../../public/assets/MainPage/Mobile/Card3Mobile.png'
import card4 from '../../../../public/assets/MainPage/Mobile/Card4Mobile.png'


const About = () => {


    return (
        <div>
            <div className="hidden sm:w-[360px] sm:h-[701px] sm:flex-col sm:justify-start sm:items-start sm:gap-8 sm:inline-flex">
                <div className="self-stretch h-[213px] px-4 flex-col justify-start items-start gap-4 flex">
                    <div className="bg-[#4cffa9] p-2 rounded-lg">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snugx ">About</div>
                    </div>
                    <div className="self-stretch"><span
                        className="text-black text-[32px] font-medium font-['Oswald'] uppercase">Automate your business </span><span
                        className="text-black text-[32px] font-light font-['Oswald'] uppercase">with us</span></div>
                    <div className="#1b1b1b">Automate the processes of integrating and managing payment systems and
                        their methods
                    </div>
                </div>
                <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                    <div className="flex flex-row h-[500px]   mt-[40px]">
                        <div
                            className="w-[300px] h-[350px] origin-top-left rotate-[-3.82deg] flex-col justify-center items-center inline-flex">
                            <img className="w-[300px] h-[350px] rounded-[20px]"
                                 src={card3}/>
                        </div>
                        <div
                            className="w-[300px] h-[350px] origin-top-left rotate-[5.28deg] flex-col justify-center items-center inline-flex">
                            <img className="w-[300px] h-[350px] rounded-[20px]"
                                 src={card1}/>
                        </div>
                        <div
                            className="w-[300px] h-[350px] origin-top-left rotate-[1.76deg] flex-col justify-center items-center inline-flex">
                            <img className="w-[300px] h-[350px] rounded-[20px]"
                                 src={card4}/>
                        </div>
                        <div
                            className="w-[300px] h-[350px] origin-top-left -rotate-6 flex-col justify-center items-center inline-flex">
                            <img className="w-[300px] h-[350px] rounded-[20px]"
                                 src={card2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[360px] h-[540px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch"><span
                    className="text-black text-[40px] font-light font-['Oswald'] uppercase">No special qualifications are required to use the software.</span><span
                    className="text-black text-[40px] font-semibold font-['Oswald'] uppercase"> </span><span
                    className="text-white bg-[#4cffa9] text-[40px] font-semibold font-['Oswald'] uppercase">Basic skills </span><span
                    className="text-[40px] text-black  font-light font-['Oswald'] uppercase"> in working with a PC and a web browser </span><span
                    className=" font-semibold text-[40px] text-[#4cffa9] font-['Oswald'] uppercase">are sufficient</span><span
                    className="#4cffa940px] font-light font-['Oswald'] uppercase">.</span></div>

                <div>
                    <div className="#1b1b1b">osuna</div>
                </div>
            </div>

        </div>
    );
};

export default About;