import Droplet from "../_components/icons/Droplet";
import { GoldBars } from "../_components/icons/GoldBars";
import Leaves from "../_components/icons/Leaves";
import TelescopeTestTube from "../_components/icons/TelescopeTestTube";
import TestTube from "../_components/icons/TestTube";



export const ServicesData = {
    title: "What we do?", 
    slug: "what-we-do",
    data:[
        {
            id: 1, 
            title: "Refinery", 
            desc: "Chemical and electrolytic refining of gold alloys to obtain purities over 99.99%", 
            icon: <TestTube css="fill-amber-400" />,
        },
        {
            id: 2, 
            title: "Melting", 
            desc: "Melting of refined metals in the form of ingots and grains using induction furnaces.", 
            icon: <Droplet css="fill-amber-400" />,
        },
        {
            id: 3, 
            title: "Bar Production", 
            desc: "Production of minted bars, coins and medals (rolling, cutting, minting).", 
            icon: <GoldBars css="fill-amber-400" />,
        },
        {
            id: 4, 
            title: "Storage & Waste Treatment", 
            desc: "Treatment of spent liquid solutions through neutralization and waste recycling.", 
            icon: <Leaves css="fill-amber-400" />,
        },
        {
            id: 5, 
            title: "Analysis Laboratory", 
            desc: "Different types of analysis to get most accurate results for our customers.", 
            icon: <TelescopeTestTube css="fill-amber-400" />,
        },
    ]
}

