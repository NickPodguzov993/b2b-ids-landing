import React, {useState} from "react";
import Vector from '../../public/assets/MainPage/Desctop/Vector.svg'


const ImagesSlider = () => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false)
    const [isHovered2, setIsHovered2] = useState<boolean>(false)
    const [isHovered3, setIsHovered3] = useState<boolean>(false)

    const handleHover1 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(true)
        setIsHovered2(false)
        setIsHovered3(false)

    }
    const handleHover2 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(true)
        setIsHovered3(false)

    }
    const handleHover3 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(true)

    }

    const onMouseLeave = () => {
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)

    }

    return (
        <div>



            <div className="hidden sm:flex  ml-[432px]">
                <div
                    className="hidden self-stretch  justify-start items-start sm:inline-flex">
                    <div
                        className="flex gap-2 sm:gap-8  ">
                        <div onMouseEnter={handleHover1} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[237px] hover:grayscale-0 bg-[url('/images/image1.jpg')]">

                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative ">
                                    {isHovered1 ? <div
                                            className="w-[445px] h-[480px] hover:bg-main_green  border-l border-[#e8eaed] flex-col justify-between items-start inline-flex">
                                            <div
                                                className="self-stretch h-[82px] px-2 flex-col justify-start items-start gap-3 flex">
                                                <div
                                                    className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                                    <div
                                                        className="text-white text-base font-normal font-['Arial']">01
                                                    </div>
                                                </div>
                                                <div
                                                    className="self-stretch text-black text-[32px] font-normal font-['Arial']">The
                                                    cost is
                                                    based on needs
                                                </div>
                                                <div className='mt-[170px]  '><img
                                                    src={Vector}/></div>
                                            </div>
                                        </div>
                                        :
                                        <div
                                            className="w-[445px] h-[480px] hover:bg-main_green  border-l border-[#e8eaed] flex-col justify-between items-start inline-flex">
                                            <div
                                                className="self-stretch h-[82px] px-2 flex-col justify-start items-start gap-3 flex">
                                                <div
                                                    className="h-[33px] px-2.5 py-[5px] bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                                    <div
                                                        className="text-white text-base font-normal font-['Arial']">01
                                                    </div>
                                                </div>
                                                <div
                                                    className="self-stretch text-black text-[32px] font-normal font-['Arial']">The
                                                    cost is
                                                    based on needs
                                                </div>
                                                <div className='mt-[170px]  '><img
                                                    src={Vector}/></div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>


                        <div onMouseEnter={handleHover2} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] hover:grayscale-0 bg-[url('/images/image2.jpg')]">
                            {isHovered2 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/02</div>
                            </div>}
                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">
                                    {isHovered2 ?
                                        <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                 animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  >
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  >
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div> :
                                        <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-['Raleway'] sm:leading-loose leading-relaxed">
                                            Оборудованные рабочие места
                                        </p>}


                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover3} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] hover:grayscale-0 bg-[url('/images/image3.jpg')]">
                            {isHovered3 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-310 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/03</div>
                            </div>}
                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">
                                    {isHovered3 ?
                                        <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                  animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  >
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  >
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div>:
                                        <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-['Raleway'] sm:leading-loose leading-relaxed">
                                            Большая комната отдыха
                                        </p>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesSlider;
