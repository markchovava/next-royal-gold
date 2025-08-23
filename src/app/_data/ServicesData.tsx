import Center from "../_components/icons/Center";
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
            title: "Gold Buying", 
            desc: "", 
            icon: <GoldBars css="fill-amber-400" />,
        },
        {
            id: 2, 
            title: "Refinery", 
            desc: "", 
            icon: <TelescopeTestTube css="fill-amber-400" />,
        },
        {
            id: 3, 
            title: "Value Addition", 
            desc: "", 
            icon: <Leaves css="fill-amber-400" />,
        },
        {
            id: 4, 
            title: "Welcome Center", 
            desc: "", 
            icon: <Center css="fill-amber-400" />,
        },
    ]
}

