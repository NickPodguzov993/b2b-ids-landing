import {FC, useEffect, useState} from "react";
import { useLocalStorage } from '../utils/useLocalStorage'
import {classNames} from "../utils/classNames.ts";
//import heart from '../../public/images/redHeart.svg'
import {Link} from "react-router-dom";
const Cookies: FC = () => {
    const [agreed, setAgreed] = useLocalStorage('agreedCookies', false)
    const [classes, setClasses] = useState("")
    useEffect(() => {
        setClasses(classNames({ ["hidden"]: agreed, ["animate-fade-up animate-once animate-duration-500" +
            " animate-delay-[3000ms] animate-ease-linear animate-fill-backwards z-[40] sm:px-8 sm:w-[800px]"]: !agreed }))
    }, [agreed])
    return (
        <div className='  fixed top-[400px] sm:top-[550px] z-50'>
            <div
                className={classes}
            >

                <div className="sm:w-[825px] sm:h-[150px] w-[360px] h-[169px]   p-8 bg-white rounded-[20px] shadow justify-start items-center gap-8 sm:inline-flex">
                    <div className=" hidden sm:block sm:w-[86px] sm:h-[86px] p-6 bg-neutral-100 rounded-[30px] justify-center items-center gap-2.5 flex">
                        <div className="" ></div>
                    </div>
                    <div className="h-[30px] sm:justify-start sm:items-center sm:gap-4 sm:flex">
                        <Link to={"/policies"} className="text-green text-sm sm:text-base font-semibold font-['Outfit']">
                            <div className="grow shrink basis-0"><span className="text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">Мы используем </span><span className="text-rose-600 text-xl font-bold font-['Raleway']">cookies</span>
                                <span className="text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]"> для лучшей работы сайта</span></div>
                        </Link>.

                    </div>
                    <button onClick={()=>setAgreed(true)} className="w-32 h-10 px-8 bg-rose-600 rounded-[100px] justify-start items-center gap-1 ml-[70px] mt-[45px] sm:mt-[0] sm:flex">
                        <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Хорошо</div>
                    </button>
                </div>
            </div>

            {/*<div className="w-[360px] h-[169px] px-4 pt-4 pb-8 bg-white rounded-tl-[20px] rounded-tr-[20px] shadow flex-col justify-center items-start gap-6 inline-flex">
                <div className="self-stretch h-[49px] flex-col justify-center items-center gap-4 flex">
                    <div className="self-stretch text-center"><span style="text-zinc-900 text-base font-medium font-['Raleway'] leading-normal">Мы используем </span><span style="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">cookies</span><span style="text-zinc-900 text-base font-medium font-['Raleway'] leading-normal"> для лучшей работы сайта</span></div>
                </div>
                <div className="self-stretch h-12 px-8 bg-rose-600 rounded-[100px] justify-center items-center gap-1 inline-flex">
                    <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Хорошо</div>
                </div>
            </div>*/}

        </div>

    );
};

export default Cookies;

