import { useState, useEffect } from "react";
import { Code2, Database, Server, Cloud, Palette, Cpu } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiCplusplus,
  SiMysql,
  SiLinux,
  SiFigma,
  SiArduino,
  SiPhp,
  SiDjango,
  SiAngular,
  SiLaravel,
} from "@icons-pack/react-simple-icons";
import AOS from "aos";
import "aos/dist/aos.css";

// ========== CUSTOM ICONS (not available in the package) ==========

const JavaIcon = ({ size = 50, className = "" }) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    width={size}
    height={size}
    className={className}
    alt="Java"
  />
);

const CanvaIcon = ({ size = 50, className = "" }) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
    width={size}
    height={size}
    className={className}
    alt="Canva"
  />
);

const ConvexIcon = ({ size = 50, className = "" }) => (
  <img
    src="https://avatars.githubusercontent.com/u/81530787?s=200&v=4"
    width={size}
    height={size}
    className={className}
    alt="Convex DB"
  />
);

const RoboticsIcon = ({ size = 50, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"
      fill="currentColor"
    />
  </svg>
);

// ========== TECH STACK DATA ==========

const techCategories = {
  Frontend: [
    {
      name: "JavaScript",
      description: "Core programming language for web development",
      icon: SiJavascript,
    },
    {
      name: "React.js",
      description: "Building interactive UIs with React",
      icon: SiReact,
    },
    {
      name: "React Native",
      description: "Cross-platform mobile app development",
      icon: SiReact,
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      icon: SiTypescript,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: SiTailwindcss,
    },
    {
      name: "Angular",
      description: "Robust framework for building dynamic web applications",
      icon: SiAngular,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side",
      icon: SiNodedotjs,
    },
    {
      name: "Express",
      description: "Fast web framework for Node.js",
      icon: SiExpress,
    },
    {
      name: "Python",
      description: "Versatile programming language",
      icon: SiPython,
    },
    {
      name: "Java",
      description: "Enterprise-level application development",
      icon: JavaIcon,
    },
    {
      name: "PHP",
      description: "Server-side scripting language",
      icon: SiPhp,
    },
    {
      name: "Django",
      description: "High-level Python web framework",
      icon: SiDjango,
    },
    {
      name: "Laravel",
      description: "PHP web application framework",
      icon: SiLaravel,
    },
    {
      name: "REST APIs",
      description: "RESTful API design and development",
      icon: SiExpress,
    },
  ],
  Database: [
    {
      name: "PostgreSQL",
      description: "Powerful relational database",
      icon: SiPostgresql,
    },
    {
      name: "MySQL",
      description: "Popular open-source relational database",
      icon: SiMysql,
    },
    {
      name: "MongoDB",
      description: "NoSQL document database",
      icon: SiMongodb,
    },
    {
      name: "Convex DB",
      description: "Reactive backend-as-a-service platform",
      icon: ConvexIcon,
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript",
      icon: SiPrisma,
    },
  ],
  DevOps: [
    {
      name: "Docker",
      description: "Container platform for deployment",
      icon: SiDocker,
    },
    {
      name: "Linux",
      description: "Unix-like operating system administration",
      icon: SiLinux,
    },
    {
      name: "Git",
      description: "Version control system",
      icon: SiGit,
    },
    {
      name: "GitHub",
      description: "Code hosting and collaboration platform",
      icon: SiGithub,
    },
    {
      name: "CI/CD",
      description: "Continuous integration and deployment pipelines",
      icon: SiGithubactions,
    },
  ],
  Design: [
    {
      name: "Figma",
      description: "Collaborative interface design tool",
      icon: SiFigma,
    },
    {
      name: "Canva",
      description: "Graphic design and presentation platform",
      icon: CanvaIcon,
    },
  ],
  Others: [
    {
      name: "C/C++",
      description: "System programming and performance-critical applications",
      icon: SiCplusplus,
    },
    {
      name: "Arduino",
      description: "Open-source electronics platform",
      icon: SiArduino,
    },
    {
      name: "Robotics",
      description: "Robot design, construction, and programming",
      icon: RoboticsIcon,
    },
    {
      name: "AI/ML",
      description: "Artificial Intelligence and Machine Learning",
      icon: Cpu,
    },
  ],
};

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Design: Palette,
  Others: Cpu,
};

// ========== MAIN COMPONENT ==========

export const TechStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof techCategories>("Frontend");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="tech-stack" className="py-20 px-6 mt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that
            power my development journey. From frontend to backend, I leverage
            these tools to build scalable, efficient, and user-friendly
            applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {(
            Object.keys(techCategories) as Array<keyof typeof techCategories>
          ).map((category) => {
            const Icon = categoryIcons[category];
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 font-medium ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techCategories[activeCategory].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent size={48} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;