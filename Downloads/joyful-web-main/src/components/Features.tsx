import { Zap, Shield, BarChart3, Users, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your team moving at the speed of innovation.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance certifications to protect your data.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Gain insights with live dashboards and customizable reporting tools.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflows and communication tools for distributed teams.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our CDN and multi-region infrastructure.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent automation that learns and adapts to your workflow.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Everything you need to{" "}
            <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to streamline your workflow and accelerate growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-8 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(var(--primary)/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
