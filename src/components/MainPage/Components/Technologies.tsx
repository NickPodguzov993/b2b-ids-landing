import table from '../../../../public/assets/MainPage/Mobile/tables.png'
import arrow from '../../../../public/assets/MainPage/Mobile/arrow.svg'
import ThreeRounds from '../../../../public/assets/MainPage/Desctop/ThreeRounds.png'
import Techno from '../Components/Technologies.module.scss'


const Technologies = () => {
    return (
        <div>


            <div className='hidden sm:block'>

                <div className="h-[237px] mt-[160px] pl-[182px] justify-between items-end inline-flex">
                    <div className="flex-col justify-end items-start gap-3.5 inline-flex">
                        <div
                            className="h-[33px] px-2.5 py-[5px] bg-[#4cffa9] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-base font-normal font-['Arial']">Our technologies</div>
                        </div>
                        <div className="w-[800px]"><span
                            className="text-black text-[64px] font-light font-['Oswald'] uppercase">technologies</span><span
                            className="text-black text-[64px] font-medium font-['Oswald'] uppercase"> used for development</span>
                        </div>
                    </div>
                    <div className="w-[460px] text-[#1b1b1b] text-xl font-normal font-['Arial']">Our choice of
                        technologies reflects our commitment to delivering top-tier solutions for businesses of all
                        sizes
                    </div>
                </div>

                <div className="h-[502px] relative ml-[182px] mt-16 justify-start items-center inline-flex">
                    <div>
                        <img src={ThreeRounds}/>
                    </div>
                    <div
                        className="text-center absolute text-white text-[106px] font-medium font-['Oswald'] uppercase">innovative
                        technology stack
                    </div>
                </div>
                <div className="fc gap-8 justify-start items-start w-full">


                    <div
                        className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
                    </div>

                </div>

                <div className=" fc flex gap-3 mt-16  mb-[160px]  justify-start items-start w-[1600px]">
                    <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden sm:overflow-y-scroll">
                        <div className='hidden sm:flex'>

                            <div className='flex gap-3 mt-16 ml-[132px] mb-[160px]'>
                                <div className={Techno.sections}>
                                    <p className={Techno.stack}>
                                        Stack 01
                                    </p>
                                    <div className="self-stretch  flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">Java
                                            / Kotlin
                                        </div>
                                        <div
                                            className="self-stretch text-black text-base font-normal font-['Arial']">(back-end)
                                        </div>
                                    </div>
                                </div>
                                <div className={Techno.sections}>
                                    <p className={Techno.stack}>
                                        Stack 02
                                    </p>
                                    <div
                                        className="self-stretch h-[74px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">PHP
                                            Laravel
                                        </div>
                                        <div
                                            className="self-stretch text-black text-base font-normal font-['Arial']">(back-end)
                                        </div>
                                    </div>
                                </div>


                                <div className={Techno.sections}>
                                    <p className={Techno.stack}>
                                        Stack 03
                                    </p>
                                    <div
                                        className="self-stretch h-[121px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">Typescript
                                            / React
                                        </div>
                                        <div
                                            className="self-stretch text-black text-base font-normal font-['Arial']">(front-end)
                                        </div>
                                    </div>
                                </div>
                                <div className={Techno.sections}>
                                    <p className={Techno.stack}>
                                        Stack 04
                                    </p>
                                    <div
                                        className="self-stretch h-[121px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">Grafana
                                            Loki OSS
                                        </div>
                                        <div
                                            className="self-stretch text-black text-base font-normal font-['Arial']">(technical
                                            monitoring)
                                        </div>
                                    </div>
                                </div>
                                <div className={Techno.sections}>
                                    <p className={Techno.stack}>
                                        Stack 05
                                    </p>
                                    <div
                                        className="self-stretch h-[168px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">Typescript
                                            / Playwright / Allure
                                        </div>
                                        <div
                                            className="self-stretch text-black text-base font-normal font-['Arial']">(test)
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sm:hidden'>
                <div className=" flex-col justify-center items-start gap-4 inline-flex">
                    <div
                        className="bg-[url('/assets/MainPage/Mobile/half-round.svg')] bg-[top_-30px_right_-20px] bg-no-repeat w-[360px] h-[360px]">
                        <img className='w-[360px] mt-[10px]' src={table}/>
                    </div>
                    <div className="bg-[#4cffa9] p-2 ml-4  rounded-lg relative">
                        <div className="text-black text-sm  font-normal  font-['Arial'] leading-snug ">Our technologies
                        </div>
                    </div>
                    <div className="self-stretch pl-4"><span
                        className="text-black text-[32px] font-light font-['Oswald'] uppercase">technologies</span><span
                        className="text-black text-[32px] font-medium font-['Oswald'] uppercase"> used for development</span>
                    </div>
                    <div className=" pl-4 w-[340px]">Our choice of technologies reflects our commitment to delivering
                        top-tier
                        solutions for businesses of all sizes
                    </div>
                </div>
                <div className="h-[169px] w-[360px] relative justify-start items-center inline-flex">
                    <div
                        className="w-[169px]  h-[169px] absolute z-10 left-[90px] bg-black/40 bg-[url('/assets/MainPage/Mobile/Ellipse6.png')] rounded-full"/>
                    <div
                        className="w-[328px] text-center text-white text-[40px] absolute z-20 left-[20px] font-medium font-['Oswald'] uppercase">innovative
                        technology stack
                    </div>
                    <div
                        className="w-[169px]  h-[169px] absolute   bg-black/10 left-[16px] bg-[url('/assets/MainPage/Mobile/Ellipse5.png')]  rounded-full"/>
                    <div
                        className="w-[169px]  h-[169px] absolute  left-[185px] bg-[url('/assets/MainPage/Mobile/Ellipse7.png')] bg-black z-10 rounded-full"/>

                </div>
                <div className="w-[360px] h-[296px] flex-col  justify-start items-start gap-8 inline-flex">

                    <div className=" w-full  justify-start  items-start inline-flex flex-col overflow-y-hidden">
                        <div className="flex flex-row  ml-4 mr-4  mt-[40px]">
                            <div
                                className="w-[300px] h-[196px]  border-2 border-main_green pl-6 rounded-[20px]  origin-top-left  flex-col justify-center  inline-flex">
                                <div className="">
                                    <div className="bg-[#4cffa9] rounded-lg p-1 mb-4 w-[70px]">
                                        <div
                                            className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack
                                            01
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Java
                                            / Kotlin
                                        </div>
                                        <div
                                            className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(back-end)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[300px] h-[196px]  border-2 ml-4 border-main_green pl-6 rounded-[20px]  origin-top-left  flex-col justify-center  inline-flex">
                                <div className="">
                                    <div className="bg-[#4cffa9] rounded-lg p-1 mb-4 w-[70px]">
                                        <div
                                            className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack
                                            02
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">PHP
                                            Laravel
                                        </div>
                                        <div
                                            className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(back-end)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[300px] h-[196px]  border-2 ml-4 border-main_green pl-6 rounded-[20px]  origin-top-left  flex-col justify-center  inline-flex">
                                <div className="">
                                    <div className="bg-[#4cffa9] rounded-lg p-1 mb-4 w-[70px]">
                                        <div
                                            className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack
                                            03
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Typescript
                                            / React
                                        </div>
                                        <div
                                            className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(front-end)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[300px] h-[196px]  border-2 ml-4 border-main_green pl-6 rounded-[20px]  origin-top-left  flex-col justify-center  inline-flex">
                                <div className="">
                                    <div className="bg-[#4cffa9] rounded-lg p-1 mb-4 w-[70px]">
                                        <div
                                            className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack
                                            04
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Grafana
                                            Loki OSS
                                        </div>
                                        <div
                                            className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(technical
                                            monitoring)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[300px] h-[196px]  border-2 ml-4 border-main_green pl-6 rounded-[20px]  origin-top-left  flex-col justify-center  inline-flex">
                                <div className="">
                                    <div className="bg-[#4cffa9] rounded-lg p-1 mb-4 w-[70px]">
                                        <div
                                            className="text-black text-sm font-normal font-['Arial'] leading-snug">Stack
                                            05
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch h-[67px] flex-col justify-start items-start gap-[9px] flex">
                                        <div
                                            className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Typescript
                                            / <br/> Playwright / Allure
                                        </div>
                                        <div
                                            className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">(test)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex ml-[240px]'>
                    <div className=" bg-[#e8eaed] w-[44px] h-[44px] rounded-3xl">
                        <div className='mt-[10px] ml-[9px]'><img src={arrow}/></div>

                    </div>
                    <div className=" bg-[#e8eaed] w-[44px] h-[44px] ml-[14px] rounded-3xl">
                        <div className='mt-[9px] pl-[9px] rotate-180'><img src={arrow}/></div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Technologies;