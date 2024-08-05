import logo from '../../public/assets/Header/Mobile/logo.svg'
import BlueBlackTicker from "./BlueBlackTicker.tsx";

const Header = () => {
    return (
            <div className='w-full rounded-[30px]  z-10 '>

                <div className="w-[360px] h-[720px] relative bg-[url('/assets/Header/Mobile/studioItPhoto.png')] bg-no-repeat
                         bg-cover rounded-bl-[20px] rounded-br-[20px]">
                    <div className="p-4"><img src={logo} alt="logo"/></div>
                    <div className=" p-4 mt-[30px]"><span
                        className="text-white text-[64px] font-light font-['Oswald'] uppercase leading-[70.40px]">Payment system for </span>
                        <br/>

                        <span
                            className="text-black text-[64px] bg-[#4cffa9] rounded-[20px] font-semibold font-['Oswald'] uppercase leading-[70.40px]  ">your</span>
                        <span
                            className="text-black text-[64px] bg-[#4cffa9] rounded-[20px] font-semibold font-['Oswald'] uppercase leading-[70.40px]"> business:</span><span
                            className="text-black text-[64px] font-light font-['Oswald'] uppercase leading-[70.40px]"> </span><span
                            className="text-white text-[64px] font-light font-['Oswald'] uppercase leading-[70.40px]">security, convenie</span>
                        <span className="text-white text-[64px] font-light font-['Oswald'] uppercase leading-[70.40px]">  nce and </span><span
                            className="text-[#4cffa9] text-[64px] font-semibold font-['Oswald'] uppercase leading-[70.40px]">efficiency</span>
                    </div>
                   {/* <div
                        className="w-[560px] h-[29px] origin-top-left -rotate-90 justify-start items-end gap-3 inline-flex absolute left-[20px]">
                        <div className="w-[51px] h-[29px] text-white text-2xl font-normal font-['Oswald']">Scroll</div>
                    </div>*/}
                </div>
                <BlueBlackTicker/>
            </div>
    );
};

export default Header;