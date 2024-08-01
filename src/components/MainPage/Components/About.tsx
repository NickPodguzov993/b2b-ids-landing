

const About = () => {
    return (
        <div>
            <div className="w-[360px] h-[701px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[213px] px-4 flex-col justify-start items-start gap-4 flex">
                    <div className="bg-[#4cffa9]">
                        <div className="text-black text-sm font-normal font-['Arial'] leading-snug">About</div>
                    </div>
                    <div className="self-stretch"><span
                        className="text-black text-[32px] font-medium font-['Oswald'] uppercase">Automate your business </span><span
                        className="text-black text-[32px] font-light font-['Oswald'] uppercase">with us</span></div>
                    <div className="#1b1b1b">Automate the processes of integrating and managing payment systems and
                        their methods
                    </div>
                </div>
                <div className="w-[360px] h-[456px] relative bg-white">
                    <div
                        className="w-[300px] h-[350px] left-0 top-[29.01px] absolute origin-top-left rotate-[-3.82deg] flex-col justify-center items-center inline-flex">
                        <img className="w-[300px] h-[350px] rounded-[20px]" src="https://via.placeholder.com/300x350"/>
                    </div>
                </div>
            </div>
            <div className="w-[360px] h-[540px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch"><span
                    className="text-black text-[40px] font-light font-['Oswald'] uppercase">No special qualifications are required to use the software.</span><span
                    className="text-black text-[40px] font-semibold font-['Oswald'] uppercase"> </span><span
                    className="text-white text-[40px] font-semibold font-['Oswald'] uppercase">Basic skills </span><span
                    className="text-black text-[40px] font-light font-['Oswald'] uppercase"> in working with a PC and a web browser </span><span
                    className="#4cffa940px] font-semibold font-['Oswald'] uppercase">are sufficient</span><span
                    className="#4cffa940px] font-light font-['Oswald'] uppercase">.</span></div>
                <div className="#4cffa9"/>
                <div className="#4cffa9"/>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="#1b1b1b">osuna</div>
                </div>
            </div>

        </div>
    );
};

export default About;