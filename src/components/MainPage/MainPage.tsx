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
        <div>
            <About/>
            <MoreBenefits/>
            <Tools/>
            <Products/>
            <Technologies/>
            <TrustUs/>
            <Reviews/>
            <PayOnly/>
            <div className=' sm:hidden bg-[#e8eaed]'>
                <FAQ/>
            </div>
            <FAQ/>
            <LetsTalk/>

        </div>

    );
};

export default MainPage;
