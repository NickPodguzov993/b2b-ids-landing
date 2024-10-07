import card1 from '../../../../public/assets/MainPage/Mobile/card1Mobile.png'
import card2 from '../../../../public/assets/MainPage/Mobile/Card2Mobile.png'
import card3 from '../../../../public/assets/MainPage/Mobile/Card3Mobile.png'
import card4 from '../../../../public/assets/MainPage/Mobile/Card4Mobile.png'
import tallArrow from '../../../../public/assets/MainPage/Desctop/tallArrow.svg'
import Arrow3 from '../../../../public/assets/MainPage/Desctop/Arrow3.svg'
import BlueBlackTicker from "../../BlueBlackTicker.tsx";
import {useEffect, useState} from "react";
import '../../ScrollText.css';


const About = () => {
    const [backgroundPosition, setBackgroundPosition] = useState('-10%');

    useEffect(() => {
        const handleScroll = () => {
            const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setBackgroundPosition(`${-t * 720}%`);
        };

        window.addEventListener('scroll', handleScroll);

        // Очистка обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div>
            <div
                className="hidden sm:block sm:w-[1600px] sm:h-[860px] ml-[60px]  sm:bg-black/40 sm:bg-[url('/assets/MainPage/Desctop/studioItPhoto.png')]
                 sm:bg-cover rounded-bl-[40px] sm:rounded-br-[40px]
                 sm:relative">
                <div
                    className="text-white text-8xl pt-[150px] pl-[150px] font-light font-['Oswald'] uppercase leading-[140px]">Payment
                    system for
                </div>
                <div
                    className="text-black w-[670px] bg-[#4cffa9] rounded-2xl text-8xl font-semibold pl-4 ml-[150px] font-['Oswald'] uppercase leading-[140px]">your
                    business:
                </div>
                <div
                    className="text-white text-8xl pl-[150px] font-light font-['Oswald'] uppercase leading-[140px]">security,
                    convenience
                </div>
                <div className="h-[140px] justify-start pl-[150px] items-center gap-[25px] inline-flex">
                    <div className="text-white text-8xl font-light font-['Oswald'] uppercase leading-[140px]">and</div>
                    <div
                        className="text-[#4cffa9] text-8xl font-semibold font-['Oswald'] uppercase leading-[140px]">efficiency
                    </div>
                </div>
                <div className='absolute left-[1430px] top-[150px]'><img src={tallArrow}/></div>
                <BlueBlackTicker/>
                <div
                    className="w-[1400px] h-[819px] ml-[132px] mt-[160px] px-8 pt-8 flex-col justify-start items-start gap-8 inline-flex">
                    <div
                        className="h-[33px] px-2.5 py-[5px] bg-[#4cffa9] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-black text-base font-normal font-['Arial']">About</div>
                    </div>
                    <div className="self-stretch justify-between items-end inline-flex">
                        <div className="w-[712px]"><span
                            className="text-black text-[64px] font-medium font-['Oswald'] uppercase">Automate your business </span><span
                            className="text-black text-[64px] font-light font-['Oswald'] uppercase">with us</span>
                        </div>
                        <div className="w-[460px] text-[#1b1b1b] text-xl font-normal font-['Arial']">Automate the
                            processes of integrating and managing payment systems and their methods
                        </div>
                    </div>
                    <div className="h-[500px] relative bg-white">
                        <div
                            className="w-[360px] h-[400px] rounded-[20px] bg-[url('/assets/MainPage/Desctop/Card1Default.png')]
                            hover:bg-[url('/assets/MainPage/Desctop/Card1Hover.png')] hover:duration-700 duration-700
                             left-0 top-[49.01px] absolute origin-top-left rotate-[-3.82deg] flex-col justify-center items-center inline-flex">
                        </div>
                        <div
                            className="w-[360px] h-[400px] left-[346.84px] rounded-[20px]
                            bg-[url('/assets/MainPage/Desctop/card2Default.png')]
                            hover:bg-[url('/assets/MainPage/Desctop/card2Hover.png')] hover:duration-700 duration-700
                             top-[50px] absolute origin-top-left rotate-[5.28deg] flex-col justify-center items-center inline-flex">

                        </div>
                        <div
                            className="w-[360px] h-[400px] left-[657.24px]
                            bg-[url('/assets/MainPage/Desctop/Card3Default.png')]
                            hover:bg-[url('/assets/MainPage/Desctop/Card3Hover.png')] hover:duration-700 duration-700
                            top-[19.55px] absolute origin-top-left rotate-[1.76deg] flex-col justify-center items-center inline-flex">

                        </div>
                        <div
                            className="w-[360px] h-[400px] left-[936.10px]
                             bg-[url('/assets/MainPage/Desctop/Card4Default.png')]
                            hover:bg-[url('/assets/MainPage/Desctop/Card4Hover.png')] hover:duration-700 duration-700
                             top-[85.63px] absolute origin-top-left -rotate-6 flex-col justify-center items-center inline-flex">
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <div className='w-[1400px] ml-[142px] sm:mt-[260px] relative'><span style={{backgroundPosition}}

                                                                          className="text-black text-9xl font-light font-['Oswald'] uppercase leading-[160px]">

                  No special qualifications
                        are required to use the
                        software.

                            in working with  a PC and<br/> a web browser  </span>
                    </div>
                </div>
                <p
                    className="absolute top-[2663px] left-[590px] text-white bg-main_green pl-2 pr-2  rounded-2xl text-9xl font-semibold font-['Oswald'] uppercase leading-[160px]">Basic
                    skills </p>
                <span  className="absolute top-[2823px] left-[960px] text-main_green  pl-2 pr-2  rounded-2xl text-9xl font-semibold font-['Oswald'] uppercase leading-[160px]">are </span>
                <span  className="absolute top-[2985px] left-[130px] text-main_green  pl-2 pr-2  rounded-2xl text-9xl font-semibold font-['Oswald'] uppercase leading-[160px]"> sufficient</span>

                <div className='flex pl-[132px] mt-[190px]'>
                    <div><img src={Arrow3}/></div>
                    <div
                        className="text-center text-[#1b1b1b] text-[32px] font-light mt-[-20px] ml-8 font-['Oswald'] uppercase">osuna
                    </div>
                </div>
            </div>


            <div className='sm:hidden'>
                <div className=" w-[360px] h-[701px] flex-col justify-start items-start gap-8 inline-flex">
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
                                className="w-[300px] h-[350px] origin-top-left rotate-[1.76deg] ml-[-45px] flex-col justify-center items-center inline-flex">
                                <img className="w-[300px] h-[350px] rounded-[20px]"
                                     src={card4}/>
                            </div>
                            <div
                                className="w-[300px] h-[350px] origin-top-left -rotate-6 flex-col ml-[-60px] justify-center items-center inline-flex">
                                <img className="w-[300px] h-[350px] rounded-[20px]"
                                     src={card2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[360px] h-[540px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                    <div>
                        <div><span className="text-black text-[40px] font-light font-['Oswald'] uppercase">No special qualifications are required to use the software.</span><span
                            className="text-black text-[40px] font-semibold font-['Oswald'] uppercase"> </span><span
                            className=" text-[40px] text-white rounded-lg font-semibold font-['Oswald'] bg-main_green uppercase">Basic </span>
                            <span className="text-[40px] text-white rounded-lg font-semibold font-['Oswald'] bg-main_green uppercase">  skills </span><span
                            className="text-black text-[40px] font-light font-['Oswald'] uppercase"> in working with a PC and a web browser </span><span
                            className="text-[#4cffa9] text-[40px] font-semibold font-['Oswald'] uppercase">are sufficient</span><span
                            className="text-[#4cffa9] text-[40px] font-light font-['Oswald'] uppercase">.</span></div>
                    </div>


                    <div>
                        <div className="#1b1b1b">osuna</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;