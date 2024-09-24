import {ConfigType} from "./OurBonuses.tsx";


export type ModuleTextType = {
    config: ConfigType

}


 const ModuleText = ({config}:ModuleTextType) => {
    return (
        <div className="self-stretch h-[448px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-[165px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch"><span
                    className="text-black text-[64px] font-medium font-['Oswald'] uppercase">{config.title1} </span><span
                    className="text-black text-[64px] font-light font-['Oswald'] uppercase">{config.title2}</span>
                </div>
                <div className="w-[460px] text-black text-xl font-normal font-['Arial']">{config.description}
                </div>
            </div>
            <div
                className="self-stretch text-black text-[32px] font-medium font-['Oswald'] uppercase">{config.title3}
            </div>

            <div className="self-stretch h-[122px] flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative rounded-[20px] border-4 border-[#7e7e7e]"/>
                    </div>
                    <div
                        className="grow shrink basis-0 text-black text-xl font-normal font-['Arial']">{config.textLine1}
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative rounded-[20px] border-4 border-[#7e7e7e]"/>
                    </div>
                    <div
                        className="grow shrink basis-0 text-[#1b1b1b] text-xl font-normal font-['Arial']">{config.textLine2}
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative rounded-[20px] border-4 border-[#7e7e7e]"/>
                    </div>
                    <div
                        className="grow shrink basis-0 text-black text-xl font-normal font-['Arial']">{config.textLine3}
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative rounded-[20px] border-4 border-[#7e7e7e]"/>
                    </div>
                    <div
                        className="grow shrink basis-0 text-black text-xl font-normal font-['Arial']">{config.textLine4}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleText;
