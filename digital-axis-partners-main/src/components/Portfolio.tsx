import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce solution with payment integration and admin dashboard",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Web Development",
  },
  {
    title: "Healthcare Mobile App",
    description: "Cross-platform healthcare app with appointment booking and telemedicine features",
    technologies: ["Flutter", "Firebase", "REST API"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "Mobile App",
  },
  {
    title: "AI Chatbot System",
    description: "Intelligent customer support chatbot with natural language processing",
    technologies: ["Python", "TensorFlow", "NLP", "React"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    category: "AI/ML",
  },
  {
    title: "Business Analytics Dashboard",
    description: "Interactive Power BI dashboard for real-time business intelligence",
    technologies: ["Power BI", "DAX", "SQL Server"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Data Science",
  },
  {
    title: "CRM Automation System",
    description: "Custom Power Platform solution for sales and customer relationship management",
    technologies: ["Power Apps", "Power Automate", "Dataverse"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Power Platform",
  },
  {
    title: "Enterprise Integration Hub",
    description: "Microservices architecture with API gateway and intelligent routing",
    technologies: ["Node.js", "Docker", "Kubernetes", "APIs"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Integration",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through successful project deliveries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary">{project.category}</Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 hover:bg-accent/10 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">Want to see more projects?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
            asChild
          >
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
