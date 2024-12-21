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
];