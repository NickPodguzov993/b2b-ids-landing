import About from "./Components/About.tsx";


const MainPage = () => {


    return (
        <div
            className='overflow-y-hidden w-full sm:pt-[150.5px] pt-[120px] flex flex-col justify-start items-center sm:gap-40 sm:gap-[120px]
            animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-linear animate-normal'>
            <About/>
        </div>

    );
};

export default MainPage;
