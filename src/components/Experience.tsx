import { Briefcase } from "lucide-react";

const experienceItems = [
    {
        period: "Sep 2025 – Dec 2025",
        title: "Software Developer Intern",
        company: "Africa Quantitative Sciences (AQS), Kigali, Rwanda",
        description:
            "Contributing to full-stack web and mobile applications using PUG templates, Node.js, React Native, and mongodb databases. Focused on responsive UI development, API integration, and performance optimization while supporting Docker-based workflows and CI/CD practices.",
    },
    {
        period: "Jan 2026 – Mar 2026",
        title: "Full-Stack Developer",
        company: "Delight Music and Studio Center, Ruyenzi, Kamonyi",
        description:
            "Played a key role in full-stack web development using React, Node.js, and modern databases with RBAC for managers, producers and artists. Focused on responsive UI development, API integration, and performance optimization while supporting Docker-based workflows and CI/CD practices.",
    },
    {
        period: "Mar 2026 – May 2026",
        title: "Software Engineering Trainer",
        company: "Bright Vision Training Center, Gahogo, Muhanga",
        description:
            "Built custom web and cross-platform mobile apps for clients using React and React Native. Integrated third-party APIs (payments, real-time data) and delivered responsive, production-ready solutions with clean code and smooth deployments.",
    },
    {
        period: "Feb 2023 – Apr 2025",
        title: "Junior Developer Mentor",
        company: "Brainiacs / Rwanda Coding Academy, Nyabihu",
        description:
            "Mentored 20+ junior developers in backend fundamentals, REST API design, version control and production code quality standards.Designed and delivered modular learning tracks covering backend systems, API architecture and frontend integration",
    },
    {
        period: "2025",
        title: "RCS Visitations Mobile App",
        company: "Self-Employed, Kigali, Rwanda",
        description:
            "I developed a personal Mobile app for RWANDA CORRECTIONAL SERVICE visitation management. Built with Expo SDK 54, React Native, Nodejs, Express, TypeScript, and Prisma/PostgreSQL backend.",
    },
    {
        period: "2024",
        title: "Full-Stack Developer – Event Connect Hackathon Project",
        company: "Hackathon, Kigali, Rwanda",
        description:
            "Contributed to the project development and pitching for an online platform for managing the creation and organization of events. Event attenders can register and pay to attend events through a secure payment system.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-secondary/20">
            <div className="container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional Experience</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Over 5+ years of hands-on experience in software development, from internships to full-time roles, focusing on innovative solutions and collaborative projects.
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