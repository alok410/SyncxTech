import { Target, Eye, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Cutting-edge solutions for modern challenges",
  },
  {
    icon: Eye,
    title: "Qualities",
    description: "Excellence in every line of code",
  },
  {
    icon: Users,
    title: "Collaborations",
    description: "Working together for success",
  },
  {
    icon: Award,
    title: "Trust",
    description: "Government-approved and certified",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SyncX Technologies
              </span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to <span className="font-semibold text-foreground">SyncX</span>, where
                innovation meets productivity, and seamless solutions empower your business to
                thrive in the digital landscape.
              </p>

              <p>
                At SyncX, we're committed to providing tailored solutions to unlock the full
                potential of modern technology and enhance your business through cloud
                transformation, web and app development, AI solutions, data science, and creative
                design.
              </p>

              <div className="bg-card border-l-4 border-primary p-4 rounded-r-lg">
                <h3 className="font-bold text-foreground mb-2">Who We Are</h3>
                <p>
                  At SyncX, we are a team of passionate professionals dedicated to transforming
                  the way businesses harness the power of technology. With expertise in web
                  development, mobile apps, AI & ML, Microsoft Power Platform, Power BI, and
                  intelligent integration, we bring a comprehensive suite of services to drive
                  your success.
                </p>
              </div>

              <div className="bg-card border-l-4 border-accent p-4 rounded-r-lg">
                <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
                <p>
                  Our mission is to empower organizations by providing cutting-edge solutions that
                  enhance collaboration, security, and efficiency. We believe that technology
                  should be an enabler, simplifying complex processes and unlocking new
                  possibilities for businesses of all sizes.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> India
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> +91 87804 88532 / +91
                88490 78514
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                alokpatel41001@gmail.com / krishapatel4774@gmail.com
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-4 group-hover:animate-float">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
