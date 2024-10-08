import arrow from '../../../../public/assets/MainPage/Mobile/arrow.svg'
import photo from '../../../../public/assets/MainPage/Desctop/photo.png'
import style from '../Components/Reviews.module.scss'



const Reviews = () => {
    return (
        <div>
            <div className='hidden sm:block '>
                <div
                    className="h-[237px] ml-[335px] mt-[160px] flex-col justify-start items-center gap-3.5 inline-flex">
                    <div
                        className="h-[33px] px-2.5 py-[5px] bg-[#4cffa9] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-black text-base font-normal font-['Arial']">Reviews</div>
                    </div>
                    <div
                        className="self-stretch text-center text-black text-9xl font-medium font-['Oswald'] uppercase">they
                        talk about us
                    </div>
                </div>
                <div className=" fc flex gap-4  ml-[132px] mb-[160px] w-[1600px]">
                    <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden sm:overflow-y-scroll">
                        <div className='hidden sm:flex'>
                            <div className='flex gap-4  '>

                                <div className={style.block}>
                                    <div className={style.arrow}>
                                        <img src={arrow}/>
                                    </div>
                                    <div className="w-[147px] h-[147px] relative"/>
                                    <div className={style.description}>Thanks to the
                                        software, we easily integrated the payment system into our new product. Now, we
                                        can monitor
                                        the status and manage the company's payment accounts with just a few clicks.
                                        Tracking
                                        transactions has also become much easier.
                                    </div>
                                    <div
                                        className="w-44 h-[61px] justify-start duration-700 items-center gap-3.5 inline-flex">
                                        <img className="w-[60px] h-[60px] rounded-full " src={photo}/>
                                        <div
                                            className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                            <div
                                                className="self-stretch text-black text-lg font-bold font-['Arial']">Saton
                                            </div>
                                            <div
                                                className="self-stretch text-black text-base font-normal font-['Arial']">CEO,
                                                StarDev
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <div className={style.arrow}>
                                        <img src={arrow}/>
                                    </div>
                                    <div className="w-[147px] h-[147px] relative"/>
                                    <div className={style.description}>Thanks to the
                                        software, we easily integrated the payment system into our new product. Now, we
                                        can monitor
                                        the status and manage the company's payment accounts with just a few clicks.
                                        Tracking
                                        transactions has also become much easier.
                                    </div>
                                    <div
                                        className="w-44 h-[61px] justify-start duration-700 items-center gap-3.5 inline-flex">
                                        <img className="w-[60px] h-[60px] rounded-full " src={photo}/>
                                        <div
                                            className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                            <div
                                                className="self-stretch text-black text-lg font-bold font-['Arial']">Saton
                                            </div>
                                            <div
                                                className="self-stretch text-black text-base font-normal font-['Arial']">CEO,
                                                StarDev
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <div className={style.arrow}>
                                        <img src={arrow}/>
                                    </div>
                                    <div className="w-[147px] h-[147px] relative"/>
                                    <div className={style.description}>Thanks to the
                                        software, we easily integrated the payment system into our new product. Now, we
                                        can monitor
                                        the status and manage the company's payment accounts with just a few clicks.
                                        Tracking
                                        transactions has also become much easier.
                                    </div>
                                    <div
                                        className="w-44 h-[61px] justify-start duration-700 items-center gap-3.5 inline-flex">
                                        <img className="w-[60px] h-[60px] rounded-full " src={photo}/>
                                        <div
                                            className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                            <div
                                                className="self-stretch text-black text-lg font-bold font-['Arial']">Saton
                                            </div>
                                            <div
                                                className="self-stretch text-black text-base font-normal font-['Arial']">CEO,
                                                StarDev
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <div className={style.arrow}>
                                        <img src={arrow}/>
                                    </div>
                                    <div className="w-[147px] h-[147px] relative"/>
                                    <div className={style.description}>Thanks to the
                                        software, we easily integrated the payment system into our new product. Now, we
                                        can monitor
                                        the status and manage the company's payment accounts with just a few clicks.
                                        Tracking
                                        transactions has also become much easier.
                                    </div>
                                    <div
                                        className="w-44 h-[61px] justify-start duration-700 items-center gap-3.5 inline-flex">
                                        <img className="w-[60px] h-[60px] rounded-full " src={photo}/>
                                        <div
                                            className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                            <div
                                                className="self-stretch text-black text-lg font-bold font-['Arial']">Saton
                                            </div>
                                            <div
                                                className="self-stretch text-black text-base font-normal font-['Arial']">CEO,
                                                StarDev
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='sm:hidden'>
                <div className=" flex-col justify-start items-center gap-4 inline-flex">
                    <div className="bg-[#4cffa9] p-2 rounded-lg">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Reviews</div>
                    </div>
                    <div
                        className="self-stretch text-center text-black text-[64px] font-medium font-['Oswald'] uppercase">they
                        talk about us
                    </div>
                </div>
                <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                    <div className="flex flex-row ">
                        <div className="bg-[#4cffa9] w-[300px] h-[363px] ml-4 rounded-[20px] p-[24px]">
                            <div className='rotate-180 '>
                                <img className='pl-[220px] ' src={arrow}/>
                            </div>
                            <div
                                className="self-stretch pt-8 text-black text-sm font-normal font-['Arial'] leading-snug">Thanks
                                to
                                the
                                software, we easily integrated the payment system into our new product. Now, we can
                                monitor
                                the
                                status and manage the company's payment accounts with just a few clicks. Tracking
                                transactions
                                has
                                also become much easier.
                            </div>

                            <div className="w-44 h-[61px] pt-[72px] justify-start items-center gap-3.5 inline-flex">
                                <img className="w-[60px] h-[60px] rounded-full"
                                     src="https://via.placeholder.com/60x60"/>
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                    <div className="self-stretch text-black text-base font-normal font-['Arial']">Saton
                                    </div>
                                    <div
                                        className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">CEO,
                                        StarDev
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='flex mt-8 ml-[240px]'>
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

export default Reviews;