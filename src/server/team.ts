export interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
    links: {
        github?: string;
        linkedin?: string;
        website?: string;
    };
}
export const team: TeamMember[] = [
    {
        name: "Riovaldo Alfiyan Fahmi Rahman",
        role: "Front-End Developer",
        image: "../src/assets/img/Team/Riovaldo.png",
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
            linkedin: "https://www.linkedin.com/in/rizal-abrar-838337289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            website: "javascript:void(0)",
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