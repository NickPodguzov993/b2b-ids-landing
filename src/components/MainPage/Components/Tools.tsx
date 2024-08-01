

const Tools = () => {
    return (
        <div
            className="w-[360px] h-[600px] px-4 py-8 bg-black/40 rounded-[20px] flex-col justify-between items-start inline-flex">
            <div className="#4cffa9">
                <div className="text-black text-sm font-normal font-['Arial'] leading-snug">Our tools</div>
            </div>
            <div className="self-stretch h-[323px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch"><span
                    className="text-white text-[32px] font-light font-['Oswald'] uppercase">tools</span><span
                    className="text-white text-[32px] font-medium font-['Oswald'] uppercase"> used for development</span>
                </div>
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-normal font-['Arial'] leading-snug"> Kubernetes K8s
                        </div>
                    </div>
                    <div className="px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-normal font-['Arial'] leading-snug"> IBM Carbon Design
                            Kit
                        </div>
                    </div>
                    <div className="px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-normal font-['Arial'] leading-snug">PostgreSQL</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;