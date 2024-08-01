

const Products = () => {
    return (
        <div>
            <div className="h-36 flex-col justify-start items-center gap-4 inline-flex">
                <div className="#4cffa9">
                    <div className="text-black text-sm font-normal font-['Arial'] leading-snug">About product</div>
                </div>
                <div
                    className="self-stretch text-center text-black text-[64px] font-medium font-['Oswald'] uppercase">Our
                    Offers
                </div>
            </div>
            <div className="w-[360px] h-24 px-4 rounded-[20px] justify-start items-center gap-2 inline-flex">
                <div className="#4cffa9">
                    <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Billing</div>
                </div>
                <div className="#e8eaed">
                    <div className="#7e7e7e">Localizer</div>
                </div>
                <div className="#e8eaed">
                    <div className="#7e7e7e">Basic</div>
                </div>
                <div className="#e8eaed">
                    <div className="#7e7e7e">Access Management</div>
                </div>
            </div>
            <div className="#e8eaed">
                <div className="self-stretch h-[351px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch h-[109px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch"><span
                            className="text-black text-[32px] font-medium font-['Oswald'] uppercase">Billing </span><span
                            className="text-black text-[32px] font-light font-['Oswald'] uppercase">module</span></div>
                        <div className="self-stretch text-black text-base font-normal font-['Arial']">The Billing module
                            is the primary tool for managing the financial aspects of your products
                        </div>
                    </div>
                    <div className="self-stretch text-black text-2xl font-medium font-['Oswald'] uppercase">Billing
                        allows you to:
                    </div>
                    <div className="self-stretch h-[174px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="#7e7e7e"/>
                            </div>
                            <div className="grow shrink basis-0 text-black text-base font-normal font-['Arial']">Access
                                a list of available payment methods
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="#7e7e7e"/>
                            </div>
                            <div className="#1b1b1b">Choose a convenient payment system and currency</div>
                        </div>
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="#7e7e7e"/>
                            </div>
                            <div className="grow shrink basis-0 text-black text-base font-normal font-['Arial']">Create
                                a transaction for funding and withdrawing funds
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="#7e7e7e"/>
                            </div>
                            <div className="grow shrink basis-0 text-black text-base font-normal font-['Arial']">Choose
                                a convenient payment system and currency
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch h-11 px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['Arial'] leading-snug">Get started</div>
                    <div className="w-5 h-5 relative"/>
                </div>
            </div>
        </div>
    );
};

export default Products;