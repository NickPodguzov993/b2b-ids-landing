import arrow from '../../../../public/assets/MainPage/Mobile/arrow.svg'



const Reviews = () => {
    return (
        <div>
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
                            software, we easily integrated the payment system into our new product. Now, we can monitor
                            the
                            status and manage the company's payment accounts with just a few clicks. Tracking
                            transactions
                            has
                            also become much easier.
                        </div>

                        <div className="w-44 h-[61px] pt-[72px] justify-start items-center gap-3.5 inline-flex">
                            <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60"/>
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
        </div>
    );
};

export default Reviews;