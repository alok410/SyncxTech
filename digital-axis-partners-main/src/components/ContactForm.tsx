import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI & ML Solutions",
  "Data Science",
  "Power BI Solutions",
  "Microsoft Power Platform",
  "Intelligent Integration",
  "Other",
];

const technologies = [
  "MERN Stack (React, Node, Express, MongoDB)",
  ".NET",
  "Python & Django",
  "Next.js",
  "Angular",
  "Flutter",
  "Firebase",
  "AI/ML",
  "Power BI",
  "Power Platform",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  technology: string;
  purpose: string;
};

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "",
    technology: "",
    purpose: "",
  });

  // Base URL for your backend. Set in frontend/.env as REACT_APP_API_URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


  const validate = (data: FormState) => {
    // basic required-field validation
    return (
      data.name.trim() &&
      data.email.trim() &&
      data.phone.trim() &&
      data.projectType.trim() &&
      data.technology.trim() &&
      data.purpose.trim()
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate(formData)) {
      toast({
        title: "Please fill all required fields",
        description: "Name, Email, Phone, Project Type, Technology and Details are required.",
      });
      return;
    }
    console.log(formData);
    
    setIsSubmitting(true);

    try {
      const res = await fetch(`https://syncxtech.onrender.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        // show helpful message from server if provided
        throw new Error(body?.error || body?.message || `Request failed (${res.status})`);
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        projectType: "",
        technology: "",
        purpose: "",
      });
    } catch (err: any) {
      console.error("Contact submit error:", err);
      toast({
        title: "Failed to send message",
        description: err.message || "Network error — please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 87804 88532</p>
                    <p className="text-muted-foreground">+91 88490 78514</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">alokpatel41001@gmail.com</p>
                    <p className="text-muted-foreground">krishapatel4774@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Government-Approved Company</h4>
              <p className="text-sm text-muted-foreground">
                SyncX Technologies is a legally registered and government-approved IT consulting
                company, ensuring professional and trustworthy service delivery.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Your Company"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <Select
                  required
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="technology">Technology *</Label>
                <Select
                  required
                  value={formData.technology}
                  onValueChange={(value) => setFormData({ ...formData, technology: value })}
                >
                  <SelectTrigger className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]">
                    <SelectValue placeholder="Select technology" />
                  </SelectTrigger>
                  <SelectContent>
                    {technologies.map((tech) => (
                      <SelectItem key={tech} value={tech}>
                        {tech}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Project Details *</Label>
              <Textarea
                id="purpose"
                required
                placeholder="Tell us about your project requirements..."
                rows={5}
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] group"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
