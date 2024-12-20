import type { TeamMember } from "../models/team";

export const team: TeamMember[] = [
    {
        name: "Riovaldo Alfiyan Fahmi Rahman",
        role: "Front-End Developer",
        image: "../src/assets/img/Team/Riovaldo.png", // Perbaiki path gambar
        description: "The only way to learn a new programming language is by writing programs in it.",
        links: {
            github: "https://github.com/ckckckcz",
            linkedin: "https://linkedin.com/in/riovaldorahman",
            website: "https://bentokaito.vercel.app",
        },
    },
    {
        name: "Rizal Abrar Fahmi",
        role: "Front-End Developer",
        image: "../src/assets/img/Team/Rizal.png",
        description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
        links: {
            github: "https://github.com/Maeeveee",
            linkedin: "https://www.linkedin.com/in/rizal-abrar-838337289",
            website: "javascript:void(0)", // Hindari penggunaan void(0) jika tidak diperlukan
        },
    },
    {
        name: "Vidi Joshubzky Saviola",
        role: "UI/UX Designer",
        image: "../src/assets/img/Team/Vidi.png",
        description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
        links: {
            github: "https://github.com/TMTPST",
            linkedin: "https://www.linkedin.com/in/vidi-joshubzky-saviola-7b05b5288/",
            website: "javascript:void(0)",
        },
    },
];
