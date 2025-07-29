export interface ProjectInterface {
    id: number;
    name: string;
    img4by5: string;
    desc: string;
}

export const ProjectData: ProjectInterface[] = [
    {
        id: 1, 
        name: 'Value Retention', 
        desc: `By refining gold and processing gemstones locally, Niger aims to capture a greater 
                share of the value chain, leading to higher export prices and the growth of related 
                industries.`,
        img4by5: '/assets/img/4by5/03.jpg'
    },
    {
        id: 2, 
        name: 'Job Creation', 
        desc: `The project is expected to generate numerous direct and indirect jobs, particularly 
                in skilled labor and artisanal processing, contributing to vocational training and private 
                sector growth.`,
        img4by5: '/assets/img/4by5/02.jpg'
    },
    {
        id: 3, 
        name: 'Industrial Capacity Building', 
        desc: `It represents a strategic step towards developing Niger's industrial capabilities and transforming 
        it from an extractive economy to a value-driven one.`,
        img4by5: '/assets/img/4by5/04.jpg'
    },
    {
        id: 4, 
        name: 'Formalization and Revenue Enhancement', 
        desc: `The initiative seeks to formalize the largely artisanal gold mining sector, reduce smuggling, 
        and increase state revenues from gold, which has historically been lost to illicit networks.`,
        img4by5: '/assets/img/4by5/05.jpg'
    },
    {
        id: 5, 
        name: 'Diversification of Alliances', 
        desc: `Partnering with a Dubai-based firm also signals Niger's openness to new global alliances, 
        particularly with Gulf-based investors, potentially reducing reliance on traditional Western aid models.`,
        img4by5: '/assets/img/4by5/06.jpg'
    },
];