import half from '../../../../public/assets/MainPage/Mobile/half.svg'
import Vector from '../../../../public/assets/MainPage/Desctop/Vector.svg'

import AnimationPayOnly from '../Components/AnimationPayOnly.module.scss'

const PayOnly = () => {
    return (
        <div>
            <div className='hidden sm:block'>
                <div className="h-[190px] w-[1400px] ml-[132px] mb-[64px] justify-between items-end inline-flex">
                    <div className="w-[712px]"><span
                        className="text-black text-[64px] font-light font-['Oswald'] uppercase">Pay only for the </span><span
                        className="text-black text-[64px] font-medium font-['Oswald'] uppercase">necessary functionality</span>
                    </div>
                    <div className="w-[435px] text-[#1b1b1b] text-xl font-normal font-['Arial']">To create and submit a
                        personalized commercial proposal, please use the contact form
                    </div>
                </div>

                <div className='flex ml-[132px] mt-8 '>
                    <div
                        className={AnimationPayOnly.animationPayOnly}>
                        <div
                            className="self-stretch h-[82px] px-2 flex-col justify-start items-start gap-3 flex relative">
                            <p className=' duration-700'>
                                <div
                                    className="h-[33px] px-2.5 py-[5px] text-white text-base font-normal font-['Arial']
                                 bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                    01
                                </div>
                                <h3 className="self-stretch text-black text-[32px] font-normal font-['Arial']">The cost
                                    is
                                    based on needs
                                </h3>
                                <button
                                    className="h-12 px-8 py-4 hover:text-black text-white
                                     bg-black hover:bg-main_green  @apply hidden rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                    <div className=" text-base font-normal font-['Arial']">Calculate the
                                        cost
                                    </div>
                                    <div className="w-6 h-6 relative"/>
                                </button>
                            </p>

                            <section className={AnimationPayOnly.vector}><img src={Vector}/></section>
                        </div>
                    </div>


                    <div
                        className={AnimationPayOnly.animationPayOnly}>
                        <div
                            className="self-stretch h-[82px] px-2 flex-col justify-start items-start gap-3 flex relative">
                            <p className=' duration-700'>
                                <div
                                    className="h-[33px] px-2.5 py-[5px] text-white text-base font-normal font-['Arial']
                                 bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                    02
                                </div>
                                <h3 className="self-stretch text-black text-[32px] font-normal font-['Arial']">The cost
                                    is based on usage duration
                                </h3>
                                <button
                                    className="h-12 px-8 py-4 hover:text-black text-white bg-black hover:bg-main_green  @apply hidden rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                    <div className=" text-base font-normal font-['Arial']">Calculate the
                                        cost
                                    </div>
                                    <div className="w-6 h-6 relative"/>
                                </button>
                            </p>

                            <section className={AnimationPayOnly.vector}><img src={Vector}/></section>
                        </div>
                    </div>
                    <div
                        className={AnimationPayOnly.animationPayOnly}>
                        <div
                            className="self-stretch h-[82px] px-2 flex-col justify-start items-start gap-3 flex relative">
                            <p className=' duration-700'>
                                <div
                                    className="h-[33px] px-2.5 py-[5px] text-white text-base font-normal font-['Arial']
                                 bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                    03
                                </div>
                                <h3 className="self-stretch text-black text-[32px] font-normal font-['Arial']">The cost
                                    is based on required microservices
                                </h3>
                                <button
                                    className="h-12 px-8 py-4 hover:text-black text-white bg-black hover:bg-main_green  @apply hidden rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                    <div className=" text-base font-normal font-['Arial']">Calculate the
                                        cost
                                    </div>
                                    <div className="w-6 h-6 relative"/>
                                </button>
                            </p>

                            <section className={AnimationPayOnly.vector}><img src={Vector}/></section>
                        </div>
                    </div>

                </div>

            </div>


            <div className='sm:hidden mt-[120px] '>
                <div className='p-4 bg-white'><span
                    className="text-black text-[32px] font-light font-['Oswald'] uppercase">Pay only for the</span><span
                    className="text-black text-[32px] font-medium font-['Oswald'] uppercase"> necessary functionality</span>
                </div>
                <div className="text-[#1b1b1b] text-base font-normal p-4 font-['Arial'] bg-white">To create and submit a
                    personalized
                    commercial proposal, please use the contact form
                </div>


                <div className="w-[343px]  flex-col ml-4 justify-start items-start gap-8 inline-flex ">

                    <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden ">
                        <div className="flex flex-row    mt-[40px]">
                            <div
                                className="w-[300px] h-[340px] origin-top-left  flex-col justify-center items-center inline-flex">
                                <div className='border-l-2 border-r-2'>
                                    <div>
                                        <img src={half}/>
                                    </div>

                                    <div className="bg-[#e8eaed] mt-[20px]  relative">
                                        <div
                                            className="self-stretch  px-2 flex-col justify-start items-start gap-3 flex">
                                        <div
                                                className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                                <div
                                                    className="text-white text-sm font-normal font-['Arial'] leading-snug">01
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch text-black text-xl font-normal font-['Arial']">The
                                                cost is
                                                based on
                                                needs
                                            </div>
                                            <div
                                                className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                                <div
                                                    className="text-white text-sm font-normal font-['Arial'] leading-snug">Calculate
                                                    the cost
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[300px] h-[340px] origin-top-left  flex-col justify-center items-center inline-flex">
                                <div className=' border-r-2'>
                                    <div>
                                        <img src={half}/>
                                    </div>

                                    <div className="bg-[#e8eaed] mt-[20px]  relative">
                                        <div
                                            className="self-stretch  px-2 flex-col justify-start items-start gap-3 flex">
                                            <div
                                                className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                                <div
                                                    className="text-white text-sm font-normal font-['Arial'] leading-snug">01
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch text-black text-xl font-normal font-['Arial']">The
                                                cost is
                                                based on
                                                needs
                                            </div>
                                            <div
                                                className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                                <div
                                                    className="text-white text-sm font-normal font-['Arial'] leading-snug">Calculate
                                                    the cost
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PayOnly;