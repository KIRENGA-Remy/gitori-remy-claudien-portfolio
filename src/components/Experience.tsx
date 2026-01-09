import { Briefcase } from "lucide-react";

const experienceItems = [
    {
        period: "2025 - Present",
        title: "Software Developer Intern",
        company: "Mulinga Labs, Kigali, Rwanda",
        description:
            "Contributing to full-stack web and mobile applications using React, Node.js, and modern databases. Focused on responsive UI development, API integration, and performance optimization while supporting Docker-based workflows and CI/CD practices.",
    },
    {
        period: "2024 - 2025",
        title: "Freelance Developer",
        company: "Self-Employed, Kigali, Rwanda",
        description:
            "Built custom web and cross-platform mobile apps for clients using React and React Native. Integrated third-party APIs (payments, real-time data) and delivered responsive, production-ready solutions with clean code and smooth deployments.",
    },
    {
        period: "2025",
        title: "Team Leader & Frontend Developer – JamiBook Project",
        company: "Kigali, Rwanda",
        description:
            "Led frontend development and team coordination for JamiBook, a real-time asset and organization information platform. Designed mobile-first UI for better accessibility, mentored team members, and ensured seamless backend integration to launch on time with all core features.",
    },
    {
        period: "2024",
        title: "Frontend Developer – Fastinfo Hackathon Project",
        company: "Hackathon, Kigali, Rwanda",
        description:
            "Developed the frontend for an online platform delivering real-time asset and organization information. Implemented intuitive UI features for improved navigation and user experience, collaborated with backend developers for smooth integration, and successfully launched within the hackathon timeframe.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-secondary/20">
            <div className="container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional Experience</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Over 4+ years of hands-on experience in software development, from internships to full-time roles, focusing on innovative solutions and collaborative projects.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experienceItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex mb-12 last:mb-0"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-mirror="true"
                        >
                            <div className="flex flex-col items-center mr-6 sm:mr-8">
                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                {index < experienceItems.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-border mt-2" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-primary font-medium mb-1">{item.period}</p>
                                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                <p className="text-muted-foreground mb-2">{item.company}</p>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};