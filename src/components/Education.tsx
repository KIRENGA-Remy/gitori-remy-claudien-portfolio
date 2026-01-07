import { GraduationCap } from "lucide-react";

const educationItems = [
    {
        year: "2022 - 2025",
        degree: "High School Diploma - Software Programming & Embedded Systems",
        institution: "Rwanda Coding Academy",
        description:
            "Specialized boarding high school focused on software programming, embedded systems, robotics, and emerging technologies such as AI and cybersecurity. Developed strong skills in coding, algorithms, data structures, full-stack development, and capstone projects involving real-world automated systems and hardware-software integration. Graduated with honors as part of Rwanda's initiative to build a new generation of tech talent.",
    },
    {
        year: "2019 - 2022",
        degree: "Ordinary Level Education (O-Level)",
        institution: "Ecole Secondaire Mubuga",
        description:
            "Completed lower secondary education with a strong foundation in core subjects including mathematics, sciences, languages, and introductory computer studies. Built essential academic skills and discipline while exploring early interests in technology and problem-solving during this transitional phase of secondary schooling.",
    },
    {
        year: "2013 - 2019",
        degree: "Nursery & Primary Basic Education (P1–P6)",
        institution: "Nyamirama Adventiste Elayo School (N.A.E.S)",
        description:
            "Received foundational education in a faith-based Adventist school environment, covering literacy, numeracy, basic sciences, social studies, and moral/religious instruction. Developed early curiosity in mathematics and logical thinking, laying the groundwork for future self-taught coding and technical exploration.",
    },
];
export const Education = () => {
    return (
        <section id="education" className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Education</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My academic journey has equipped me with a strong foundation in software programming, embedded systems, and problem-solving skills, shaping me into the developer I am today.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {educationItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex mb-12 last:mb-0"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-mirror="true"
                        >
                            <div className="flex flex-col items-center mr-6 sm:mr-8">
                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                {index < educationItems.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-border mt-2" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-primary font-medium mb-1">{item.year}</p>
                                <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                                <p className="text-muted-foreground mb-2">{item.institution}</p>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};