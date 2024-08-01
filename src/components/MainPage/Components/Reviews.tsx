
const Reviews = () => {
    return (
        <div>
            <div className="h-[239px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="#4cffa9">
                    <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Reviews</div>
                </div>
                <div
                    className="self-stretch text-center text-black text-[64px] font-medium font-['Oswald'] uppercase">they
                    talk about us
                </div>
            </div>
            <div className="#4cffa9">
                <div className="w-9 h-9 relative"/>
                <div className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">Thanks to the
                    software, we easily integrated the payment system into our new product. Now, we can monitor the
                    status and manage the company's payment accounts with just a few clicks. Tracking transactions has
                    also become much easier.
                </div>
                <div className="w-[147px] h-[147px] relative"/>
                <div className="w-44 h-[61px] justify-start items-center gap-3.5 inline-flex">
                    <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60"/>
                    <div
                        className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-black text-base font-normal font-['Arial']">Saton</div>
                        <div className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">CEO,
                            StarDev
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;