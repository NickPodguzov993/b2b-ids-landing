import About from "./Components/About.tsx";
import MoreBenefits from "./Components/MoreBenefits.tsx";
import Tools from "./Components/Tools.tsx";
import Products from "./Components/Products.tsx";
import Technologies from "./Components/Technologies.tsx";
import TrustUs from "./Components/TrustUs.tsx";
import Reviews from "./Components/Reviews.tsx";
import PayOnly from "./Components/PayOnly.tsx";
import FAQ from "./Components/FAQ.tsx";
import LetsTalk from "./Components/LetsTalk.tsx";


const MainPage = () => {


    return (
        <div
            className='overflow-y-hidden w-full sm:pt-[150.5px] pt-[120px] flex flex-col justify-start items-center sm:gap-40 sm:gap-[120px]
            animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-linear animate-normal'>
            <About/>
            <MoreBenefits/>
            <Tools/>
            <Products/>
            <Technologies/>
            <TrustUs/>
            <Reviews/>
            <PayOnly/>
            <FAQ/>
            <LetsTalk/>
        </div>

    );
};

export default MainPage;
