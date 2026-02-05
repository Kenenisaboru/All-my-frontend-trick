import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  Clock,
  TrendingUp,
  Lock,
  Cpu,
  Infinity as Infinite
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your team moving at the speed of innovation.",
    stats: "99.9% uptime",
    latency: "50ms response time",
    details: [
      "Edge computing for global low latency",
      "SSD-powered infrastructure",
      "Automatic performance optimization",
      "Real-time monitoring dashboard"
    ],
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-500/10",
    iconBg: "bg-amber-500/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance certifications to protect your data.",
    stats: "256-bit encryption",
    compliance: "GDPR, HIPAA, SOC2",
    details: [
      "Zero-trust security model",
      "Multi-factor authentication",
      "Regular security audits",
      "Data sovereignty controls"
    ],
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-500/10",
    iconBg: "bg-emerald-500/20"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Gain insights with live dashboards and customizable reporting tools.",
    stats: "Real-time processing",
    updates: "100ms refresh rate",
    details: [
      "Custom dashboard builder",
      "Predictive analytics engine",
      "Export to multiple formats",
      "Collaborative reporting"
    ],
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconBg: "bg-blue-500/20"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflows and communication tools for distributed teams.",
    stats: "Unlimited members",
    integrations: "50+ tools",
    details: [
      "Role-based permissions",
      "Real-time collaboration",
      "Video conferencing",
      "Task management suite"
    ],
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-500/10",
    iconBg: "bg-purple-500/20"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our CDN and multi-region infrastructure.",
    stats: "15 global regions",
    coverage: "200+ countries",
    details: [
      "Automatic failover",
      "Geo-redundant storage",
      "Localized content delivery",
      "Regional compliance"
    ],
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-500/10",
    iconBg: "bg-indigo-500/20"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent automation that learns and adapts to your workflow.",
    stats: "95% accuracy",
    automation: "70% time saved",
    details: [
      "Predictive suggestions",
      "Natural language processing",
      "Automated workflows",
      "Smart resource allocation"
    ],
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10",
    iconBg: "bg-pink-500/20"
  },
];

const performanceMetrics = [
  { label: "Response Time", value: 50, unit: "ms", max: 100, improvement: 40 },
  { label: "Uptime SLA", value: 99.9, unit: "%", max: 100, improvement: 99.5 },
  { label: "Data Accuracy", value: 95, unit: "%", max: 100, improvement: 88 },
  { label: "User Satisfaction", value: 98, unit: "%", max: 100, improvement: 92 },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5">
              <Cpu className="w-3 h-3 mr-2" />
              Powerful Features
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5">
              <TrendingUp className="w-3 h-3 mr-2" />
              Enterprise Ready
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive suite of powerful features designed to streamline your workflow, 
            accelerate growth, and drive measurable results.
          </p>
        </div>

        {/* Performance Metrics */}
        <Card className="mb-16 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </span>
                    <span className="text-lg font-bold">
                      {metric.value}
                      <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
                    </span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Industry avg: {metric.improvement}{metric.unit}
                    </span>
                    <span className="text-green-500 font-medium">
                      +{(metric.value - metric.improvement).toFixed(1)}{metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Tabs */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">All Features</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security & Scale</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => setActiveFeature(index)}
              className={`group cursor-pointer transition-all duration-500 ${
                activeFeature === index ? 'scale-[1.02]' : ''
              }`}
            >
              <Card 
                className={`h-full border-border/50 overflow-hidden transition-all duration-500 ${
                  activeFeature === index 
                    ? 'ring-2 ring-primary/30 shadow-2xl shadow-primary/10' 
                    : hoveredFeature === index 
                    ? 'ring-1 ring-primary/20 shadow-lg shadow-primary/5' 
                    : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                      <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                    <Badge variant="outline" className={feature.bgColor}>
                      {feature.stats}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <div className="space-y-3 mb-6">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {feature.latency || feature.compliance || feature.updates || feature.coverage || feature.automation}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn transition-all duration-300 hover:translate-x-1"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enterprise Capabilities */}
        <Card className="border-border/50 bg-gradient-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <Lock className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Enterprise Grade</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">
                  Built for the most demanding environments
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Trusted by Fortune 500 companies and startups alike. Our platform 
                  scales with your business, ensuring reliability at any stage.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Infinite className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Unlimited Scale</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Handle millions of requests without performance degradation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Compliant</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Meets all major industry compliance and security standards
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-background/50 border-border/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Global Regions</div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">256-bit</div>
                    <div className="text-sm text-muted-foreground">Encryption</div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-display font-semibold mb-6">
            Ready to experience the power?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;