import letsTalk from '../../../../public/assets/MainPage/Desctop/letsTalk.svg'
import arrow from '../../../../public/assets/MainPage/Mobile/arrow.svg'

const LetsTalk = () => {
    return (
        <div className='relative'>
            <div className="w-[328px] h-[68.56px] sm:w-[1400px] sm:h-[292px] sm:ml-[132px] sm:mt-[160px] sm:mb-[160px] ">
                <img src={letsTalk}/>
            </div>
            <div ><img className='hidden sm:w-[400px] sm:h-[400px] top-[-60px] left-[640px]  rotate-[180deg] absolute' src={arrow}/></div>
        </div>
    );
};

export default LetsTalk;