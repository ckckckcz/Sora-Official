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
