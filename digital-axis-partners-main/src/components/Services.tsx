import {
  Code2,
  Smartphone,
  Palette,
  Brain,
  Database,
  BarChart3,
  Cloud,
  Workflow,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web solutions using MERN, .NET, Django, Next.js, and Angular",
    technologies: ["React", "Node.js", "MongoDB", ".NET", "Django", "Next.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps with Flutter and Firebase",
    technologies: ["Flutter", "Firebase", "iOS", "Android"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    technologies: ["Figma", "Adobe XD", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Intelligent chatbots, predictive models, and AI-powered automation",
    technologies: ["OpenAI", "TensorFlow", "NLP", "Computer Vision"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Transform data into actionable insights with advanced analytics",
    technologies: ["Python", "Pandas", "Machine Learning", "Analytics"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Power BI Solutions",
    description: "Interactive dashboards and business intelligence reporting",
    technologies: ["Power BI", "DAX", "Data Visualization"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "Microsoft Power Platform",
    description: "Custom business apps with Power Apps, Automate, and Virtual Agents",
    technologies: ["Power Apps", "Power Automate", "Power Pages"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "Intelligent Integration",
    description: "Seamless system integration and workflow automation",
    technologies: ["APIs", "Webhooks", "Cloud Integration", "Automation"],
    color: "from-rose-500 to-pink-500",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:animate-float`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href="#contact">Get Quote</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
