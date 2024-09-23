import Techno from "./Technologies.module.scss";


const OurHrPolitics = () => {



    return (
        <div className=" fc gap-8 justify-start items-start w-[1400px]">
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden sm:overflow-y-scroll">

                <div className='hidden sm:flex'>
                    <div className={Techno.sections}>
                        <p className={Techno.stack}>
                            Stack 01
                        </p>
                        <div className="self-stretch  flex-col justify-start items-start gap-[9px] flex">
                            <div
                                className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">Java
                                / Kotlin
                            </div>
                            <div className="self-stretch text-black text-base font-normal font-['Arial']">(back-end)
                            </div>
                        </div>
                    </div>


                    <div className={` w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] flex-col justify-start 
                    items-start inline-flex ml-2 overflow-x-auto hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                         data-aos="fade-down"
                         data-aos-delay="350"
                         data-aos-duration="1000">
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]"
                        >
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div
                                    className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']">Реферальный
                                </div>
                            </div>
                            <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div
                                    className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']">бонус
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                            >Порекомендуй компании талантливого кандидата и получи премию
                            </div>
                            <div
                                className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                            >

                            </div>
                        </div>
                    </div>

                    <div className={` w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] 
                    flex-col justify-start items-start inline-flex ml-2 overflow-x-auto hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                         data-aos="fade-down"
                         data-aos-delay="450"
                         data-aos-duration="1000">
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div
                                    className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']">Кафетерий
                                </div>
                            </div>
                            <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div
                                    className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']">бенефитов
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                            >Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией
                            </div>
                            <div className={` p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex`}>
                                <div
                                    className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] 
                    flex-col justify-start items-start inline-flex ml-2 overflow-x-auto hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                         data-aos="fade-down"
                         data-aos-delay="550"
                         data-aos-duration="1000">
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']">Vel
                                    accumsan
                                </div>
                            </div>
                            <div className="px-2 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']"
                                >Ornare amet, tortor
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                            >In est. Dictum non consectetur consectetur elit. Non sit e.
                            </div>
                            <div className={` p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex`}>
                                <div
                                    className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                >

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default OurHrPolitics;
