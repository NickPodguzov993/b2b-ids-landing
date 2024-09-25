import {useEffect, useState} from "react";

import ModuleText from "./ModuleText.tsx";



type SuperObjType = {
    [key: string]: ConfigType
}

export type ConfigType = {
    title1: string,
    title2?: string,
    title3: string,
    description: string
    textLine1: string
    textLine2: string
    textLine3?: string
    textLine4?: string
    textLine5?: string
    textLine6?: string
}


const OurBonuses = () => {


     const superObj: SuperObjType
        = {
        '01': {
            title1:'Billing ',
            title2: 'module',
            title3: 'Billing allows you to:',
            description: 'The Billing module is the primary tool for managing the financial aspects of your products ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',

        },
        '02': {
            title1:'Basic  ',
            title2: 'module',
            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',

        },
        '03': {
            title1:'Localizer  ',
            title2: 'module',
            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',
        },
        '04': {
            title1:'Access Management ',

            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',
        },

    }



    const superObj2 = [
        { id: '01',
            title1:'Billing ',
            title2: 'module',
            title3: 'Billing allows you to:',
            description: 'The Billing module is the primary tool for managing the financial aspects of your products ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',

        },
         {id: '02',
        title1:'Basic  ',
            title2: 'module',
            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',

    },
        {id: '03',
            title1:'Localizer  ',
            title2: 'module',
            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',
        },
        {id: '04',
            title1:'Access Management ',
            title2: 'Management',
            title3: 'Basic allows you to view and edit:',
            description: 'The Basic module – organize your workspace through an intuitive user interface ',
            textLine1: 'Access a list of available payment methods',
            textLine2: 'Choose a convenient payment system and currency',
            textLine3: 'Create a transaction for funding and withdrawing funds',
            textLine4: 'Choose a convenient payment system and currency',
        },

    ]

    const [index, setIndex] = useState<string>('01')
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

        if (isClicked) {
            setIsClicked(false)
        }
    }, [isClicked])



    const handleClick = (key: string) => {
        setIndex(key)
        setIsClicked(true)
    }





    return (
        <div className="">
            <div className=" absolute top-[-170px] left-[350px] border rounded-2xl  w-[600px]  justify-start items-start inline-flex flex-col overflow-y-hidden">


                <div className="flex flex-row  px-4  ">
                    {superObj2.map((c) => {

                                return (


                                    <div key={c.id}>


                                        <div onClick={() => handleClick(c.id)}
                                             className={`px-8 py-4  rounded-[20px] justify-center items-center gap-2.5 flex 
                                             ${index === c.id  ? "bg-main_green " : "bg-white "}`}>
                                            <button
                                                className="text-black text-base font-normal font-['Arial']">{c.title1}
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                    )
                    }

                </div>
            </div>
            <ModuleText config={superObj[index]} />

        </div>


    );
};

export default OurBonuses;
