import type { PortfolioData } from "../models/portfolio";
import { truncate } from "./functions/truncate"; 

export const projects: PortfolioData[] = [
    {
        title: "Cendekia UM",
        description: truncate("Educational platform designed for the academic community, offering tools and resources to enhance learning experiences. It may serve as a digital space for students and faculty of Universitas Negeri Malang (UM), providing easy access to important materials and updates."),
        image: "https://i.ibb.co.com/ZK5dcqy/Cendekia-UM.png",
        link: "https://cendekiaum.vercel.app",
        label: "Landing Page"
    },
    {
        title: "Warisan Kita",  
        description: truncate("An innovative platform that incorporates artificial intelligence (AI) technology to digitize, preserve, and promote traditional arts and culture. With a focus on preserving cultural heritage that is increasingly threatened by globalization, Warisan Kita provides technology-based solutions to collect, analyze, and distribute traditional artworks to a wider audience, while ensuring their sustainability for future generations."),
        image: "https://i.ibb.co.com/7vYf3jY/Screenshot-2024-12-26-182744.png",
        link: "https://warisankita.vercel.app",
        label: "Landing Page"
    },
    {
        title: "View Point",  
        description: truncate("An innovative platform that incorporates artificial intelligence (AI) technology to digitize, preserve, and promote traditional arts and culture. With a focus on preserving cultural heritage that is increasingly threatened by globalization, Warisan Kita provides technology-based solutions to collect, analyze, and distribute traditional artworks to a wider audience, while ensuring their sustainability for future generations."),
        image: "https://i.ibb.co.com/bWLfWBm/Screenshot-2025-01-05-160456.png",
        link: "https://view-point-dune.vercel.app",
        label: "Landing Page"
    },
];