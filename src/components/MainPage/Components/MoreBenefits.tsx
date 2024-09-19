import {useState} from "react";
import  back1 from '../../../../public/assets/MainPage/Mobile/back1.svg'
import  notebook from '../../../../public/assets/MainPage/Mobile/notebook.png'
import  image1 from '../../../../public/assets/MainPage/Desctop/image1.png'
import  arrowBlack from '../../../../public/assets/MainPage/Desctop/arrowBlack.svg'
import  Rectangle1 from '../../../../public/assets/MainPage/Desctop/Rectangle1.png'
import  Rectangle2 from '../../../../public/assets/MainPage/Desctop/Rectangle2.png'
import  Rectangle3 from '../../../../public/assets/MainPage/Desctop/Rectangle3.png'
import  Rectangle4 from '../../../../public/assets/MainPage/Desctop/Rectangle4.png'
import style from '../Components/MoreBenefits.module.scss'


const MoreBenefits = () => {

    const initialData = [
        {
            id: 1,
            title:'Reliability',
            title2:'Augue ex',
            description:'Augue ex. Lacinia sed molestie libero, ultricies. Luctus dictum. Luctus mollis ornare velit molestie et efficitur nulla ex. Velit malesuad.',
            img:back1,
        },
        {
            id: 2,
            title:'Reliability',
            title2:'Augue ex',
            description:'Augue ex. Lacinia sed molestie libero, ultricies. Luctus dictum. Luctus mollis ornare velit molestie et efficitur nulla ex. Velit malesuad.',
            img:'',
        },
        {
            id: 3,
            title:'Reliability',
            title2:'Augue ex',
            description:'Augue ex. Lacinia sed molestie libero, ultricies. Luctus dictum. Luctus mollis ornare velit molestie et efficitur nulla ex. Velit malesuad.',
            img:'',
        },
        {
            id: 4,
            title:'Reliability',
            title2:'Augue ex',
            description:'Augue ex. Lacinia sed molestie libero, ultricies. Luctus dictum. Luctus mollis ornare velit molestie et efficitur nulla ex. Velit malesuad.',
            img:'',
        },

    ]
    const [cards, setCards] = useState(initialData);
    const touchStart = (id: number) : void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: true };
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: false };
            }
            return c;
        });

        setCards(updatedContent);
    };

    return (
        <div className='hidden sm:block'>
            <div className="h-[238px] ml-[100px] mt-[2500px] flex-col justify-start items-center gap-8 inline-flex">

                <div className="w-[1400px] h-[998px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[238px] flex-col justify-start items-center gap-8 flex">
                        <div
                            className="h-[33px] px-2.5 py-[5px] bg-[#4cffa9] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-base font-normal font-['Arial']">More benefits</div>
                        </div>
                        <div className="justify-start items-center gap-3.5 inline-flex">
                            <div
                                className="text-center text-black text-[64px] font-light font-['Oswald'] uppercase">Advantages
                            </div>
                            <div className="text-center text-black text-[64px] font-medium font-['Oswald'] uppercase">of
                                working with us
                            </div>
                        </div>
                        <div className="w-[460px] text-center text-black text-xl font-normal font-['Arial']">At our
                            company, we pride ourselves on delivering exceptional value through our core strength
                        </div>
                    </div>
                    <div className="self-stretch h-[348px] justify-start items-center gap-6 inline-flex">
                        <div className="h-[348px] flex-col justify-center items-center inline-flex">
                            <img className="w-[316px] h-[348px] rounded-[20px]"
                                 src={Rectangle1}/>
                        </div>

                        <div
                            className={style.block}>
                            <p
                                className={style.title}>Reliability
                            </p>
                            <div className={style.description}>
                                <div className="text-black text-base font-normal font-['Arial']">Reliability
                                </div>
                                <div className="text-black text-sm font-normal font-['Arial'] leading-snug"
                                >We pay great attention to product security
                                </div>
                            </div>
                        </div>
                        <div className="h-[348px] flex-col justify-center items-center inline-flex">
                            <img className="w-[316px] h-[348px] rounded-[20px]"
                                 src={Rectangle2}/>
                        </div>
                        <div
                            className={style.block2}>
                            <p
                                className={style.title}>Ease of Use
                            </p>
                            <div className={style.description}>
                                <div className="text-black text-base font-normal font-['Arial']">Ease of Use
                                </div>
                                <div className="text-black text-sm font-normal font-['Arial'] leading-snug"
                                >User-friendly interface
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[348px] justify-start items-center gap-6 inline-flex">
                        <div
                            className={style.block3}>
                            <p
                                className={style.title}>Wide Applicability
                            </p>
                            <div className={style.description}>
                                <div className="text-black text-base font-normal font-['Arial']">Wide Applicability
                                </div>
                                <div className="text-black text-sm font-normal font-['Arial'] leading-snug"
                                >Can be used by commercial organizations <br/> and individual entrepreneurs as a
                                    technical solution for interacting with payment systems
                                </div>
                            </div>
                        </div>
                        <div className="h-[348px] flex-col justify-center items-center inline-flex">
                            <img className="w-[316px] h-[348px] rounded-[20px]"
                                 src={Rectangle3}/>
                        </div>
                        <div
                            className={style.block4}>
                            <p
                                className={style.title}>Client-Centric Approach
                            </p>
                            <div className={style.description}>
                                <div className="text-black text-base font-normal font-['Arial']">Client-Centric Approach
                                </div>
                                <div className="text-black text-sm font-normal font-['Arial'] leading-snug"
                                >We guarantee the sustainability of <br/> our clients' business operations
                                </div>
                            </div>
                        </div>
                        <div className="h-[348px] flex-col justify-center items-center inline-flex">
                            <img className="w-[316px] h-[348px] rounded-[20px]"
                                 src={Rectangle4}/>
                        </div>
                    </div>
                </div>


                <div className='ml-[-220px] mt-[160px] relative'>
                    <span
                        className="text-black  text-9xl font-medium font-['Oswald'] uppercase">Only registration</span>
                    <span className="text-black text-9xl font-light font-['Oswald'] uppercase"> is <br/></span>
                    <div className="text-black text-9xl mt-8  font-light font-['Oswald'] uppercase"> nedeed</div>
                    <div className='absolute left-[220px] top-[190px]'><img src={image1}/></div>
                    <div
                        className="w-[196px] h-[78px] absolute left-[780px] top-[150px] px-4 bg-[#4cffa9]
                         text-black text-2xl font-medium font-['Oswald']
                           uppercase rounded-[20px] justify-center items-center gap-2 inline-flex">
                        <div >Let's go</div>
                        <div ><img src={arrowBlack}/></div>
                    </div>
                    <div
                        className="w-[460px] text-[#1b1b1b] absolute text-[32px] top-[570px] left-[870px] font-normal font-['Arial']">A
                        ready-to-use
                        online service, no special software installation actions are required from the user
                    </div>
                </div>
            </div>


            <div className='sm:hidden w-[360px]'>
                <div className="w-[360px] h-[527px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[213px] flex-col justify-start items-center gap-4 flex">
                        <div className="#4cffa9">
                            <div
                                className="text-black text-sm font-normal font-['Arial'] leading-snug p-2 rounded-lg bg-[#4cffa9]">More
                                benefits
                            </div>
                        </div>
                        <div className="w-[324px] justify-center items-center gap-3.5 ">
                            <div
                                className="text-center text-black text-[32px] font-light font-['Oswald'] uppercase">Advantages
                            </div>
                            <div className="text-center text-black text-[32px] font-medium font-['Oswald'] uppercase">of
                                working
                                with us
                            </div>

                        </div>
                        <div className="#1b1b1b">At our company, we pride ourselves on delivering exceptional value
                            through
                            our
                            core strength
                        </div>
                    </div>

                </div>
                <div className="w-full  justify-start  items-start inline-flex  overflow-y-hidden">
                    {cards.map(c => (
                        <div key={c.id} onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className={`w-[300px] h-[282px] p-[24px] bg-[#4cffa9] bg-[url(\`/assets/MainPage/Mobile/{c.img}\`)] bg-no-repeat
                         bg-cover rounded-[20px] flex-col justify-between items-start ml-2 inline-flex`}>
                            <div className="">
                                <div className="w-[267px]  justify-center items-center inline-flex"/>
                                <div
                                    className="self-stretch text-black text-xl font-normal font-['Arial'] mb-[30px]">{c.title}
                                </div>
                                <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
                                    <div
                                        className="self-stretch text-black text-base font-normal font-['Arial']">{c.title2}
                                    </div>
                                    <div
                                        className="self-stretch text-black text-sm font-normal font-['Arial'] leading-snug">{c.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" px-4 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch"><span
                        className="text-black text-[32px] font-medium font-['Oswald'] uppercase">Only registration</span><span
                        className="text-black text-[32px] font-light font-['Oswald'] uppercase"> is nedeed</span></div>
                    <div className="#4cffa9">
                        <div className="text-black text-lg font-medium font-['Oswald'] uppercase">Let's go</div>
                        <div className="w-8 h-8 relative"/>
                    </div>
                    <div className="w-[328px] h-[212.09px] relative">
                        <img className="w-[328px] h-[212.09px] left-0 top-0 absolute"
                             src={notebook}/>
                        <div className="#f4f4f4"/>
                    </div>
                    <div>A ready-to-use online service, no special software installation actions are
                        required from the user
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MoreBenefits;