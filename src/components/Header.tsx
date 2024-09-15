import logo from '../../public/assets/Header/Mobile/logo.svg'
import BlueBlackTicker from "./BlueBlackTicker.tsx";

const Header = () => {
    return (
        <div>
            <div
                className="hidden sm:fixed sm:w-[1400px] sm:h-[88px]  sm:ml-24 sm:mt-4 sm:p-4 sm:bg-white sm:rounded-[30px] sm:z-10 sm:shadow sm:justify-between sm:items-center sm:inline-flex">
                <div className="justify-start items-center gap-3.5 flex">
                    <div className="flex-col justify-start items-start gap-[3px] inline-flex"/>
                </div>
                <div
                    className="p-8    justify-start items-center flex">
                    <div className="w-[185px] h-12 p-4 justify-center items-center gap-2.5 flex">
                        <div className="text-[#1d1d1d] text-base font-bold font-['Arial']">Our Services</div>
                    </div>
                    <div className="w-[185px] h-12 p-4 justify-center items-center gap-2.5 flex">
                        <div className="text-[#1d1d1d] text-base font-bold font-['Arial']">Integration</div>
                    </div>
                    <div className="w-[185px] h-12 p-4 justify-center items-center gap-2.5 flex">
                        <div className="text-[#1d1d1d] text-base font-bold font-['Arial']">Policies</div>
                    </div>
                </div>
                <div className="px-8 py-4 bg-black rounded-[20px] justify-center items-center gap-2.5 flex">
                    <div className="text-white text-base font-normal font-['Arial']">Let's talk</div>
                    <div className="w-6 h-6 relative"/>
                </div>
            </div>


            <div className='sm:hidden  sm:w-full sm:rounded-[30px]  sm:z-10 '>
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
                </div>
                <BlueBlackTicker/>
            </div>
        </div>

    );
};

export default Header;