import { useState, useEffect } from "react";
import { 
  Mail, 
  Heart, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast, Toaster } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  const footerLinks = {
    Product: [
      { name: "Features", icon: Zap, description: "Explore powerful tools" },
      { name: "Pricing", description: "Flexible plans for all sizes" },
      { name: "Integrations", description: "Connect with 100+ apps" },
      { name: "Changelog", description: "Latest updates & releases" },
      { name: "Roadmap", description: "See what's coming next" },
      { name: "API", description: "Developer resources" },
    ],
    Company: [
      { name: "About", description: "Our story & mission" },
      { name: "Blog", icon: ArrowUpRight, isNew: true },
      { name: "Careers", description: "Join our team", isHiring: true },
      { name: "Press", description: "Media kit & news" },
      { name: "Partners", description: "Become a partner" },
      { name: "Contact", description: "Get in touch" },
    ],
    Resources: [
      { name: "Documentation", description: "Guides & tutorials" },
      { name: "Help Center", description: "24/7 support" },
      { name: "Community", description: "Forum & discussions" },
      { name: "Templates", icon: Sparkles, isNew: true },
      { name: "Academy", description: "Free courses" },
      { name: "Events", description: "Webinars & meetups" },
    ],
    Legal: [
      { name: "Privacy", icon: Shield, description: "GDPR compliant" },
      { name: "Terms", description: "Terms of service" },
      { name: "Security", description: "Security overview" },
      { name: "Cookies", description: "Cookie policy" },
      { name: "Compliance", description: "Certifications" },
      { name: "DPA", description: "Data processing" },
    ],
  };

  const socialPlatforms = [
    { name: "Twitter", url: "#", followers: "15K" },
    { name: "LinkedIn", url: "#", followers: "8K" },
    { name: "GitHub", url: "#", stars: "2.5K" },
    { name: "Discord", url: "#", members: "5K" },
    { name: "YouTube", url: "#", subscribers: "10K" },
  ];

  const trustBadges = [
    { text: "SOC 2 Compliant", color: "bg-emerald-500/10 text-emerald-600" },
    { text: "GDPR Ready", color: "bg-blue-500/10 text-blue-600" },
    { text: "99.9% Uptime", color: "bg-amber-500/10 text-amber-600" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success("You've been subscribed to our newsletter!");
      setEmail("");
      
      // Reset subscription state after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Toaster richColors position="bottom-right" />
      
      {/* Newsletter Section */}
      <div className="border-t border-border/50 bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/20 bg-primary/5">
                <Mail className="w-3 h-3 mr-2" />
                Stay Updated
              </Badge>
              <h3 className="text-3xl font-display font-bold mb-4">
                Join 10,000+ teams already using Nexus
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get the latest product updates, industry insights, and exclusive content 
                delivered straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/70 border-border/50 h-12"
                    disabled={isSubscribed}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubscribed}
                  className="min-w-[140px]"
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                By subscribing, you agree to our Privacy Policy. No spam, unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="border-t border-border/50 py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-6 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <a href="#" className="text-2xl font-display font-bold inline-block">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Nexus
                  </span>
                  <Badge className="ml-3 bg-primary/10 text-primary border-none text-xs">
                    Pro
                  </Badge>
                </a>
                <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
                  Empowering teams to build faster and scale smarter with our 
                  all-in-one platform. Trusted by forward-thinking companies worldwide.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span 
                    key={badge.text}
                    className={`text-xs px-3 py-1.5 rounded-full border ${badge.color} border-transparent`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* App Download */}
              <div className="pt-4">
                <p className="text-sm font-medium mb-3">Download mobile app</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    App Store
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Google Play
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display font-semibold mb-6 text-lg flex items-center gap-2">
                  {category}
                  {category === "Product" && (
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-center gap-2">
                          {link.icon && <link.icon className="w-3 h-3 opacity-70" />}
                          <span>{link.name}</span>
                          {link.isNew && (
                            <Badge variant="outline" className="ml-2 text-xs border-primary/20 bg-primary/5">
                              New
                            </Badge>
                          )}
                          {link.isHiring && (
                            <Badge variant="default" className="ml-2 text-xs bg-green-500/10 text-green-600 border-green-500/20">
                              Hiring
                            </Badge>
                          )}
                        </div>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      {link.description && (
                        <p className="text-xs text-muted-foreground mt-1 ml-5">
                          {link.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-12">
            {/* Global Presence */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Serving teams in 150+ countries
                </span>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center gap-6">
                {socialPlatforms.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <span className="text-sm">{social.name}</span>
                    {social.followers && (
                      <Badge variant="outline" className="text-xs border-border/30 group-hover:border-primary/30">
                        {social.followers}
                      </Badge>
                    )}
                    {social.stars && (
                      <Badge variant="outline" className="text-xs border-border/30 group-hover:border-primary/30">
                        ⭐ {social.stars}
                      </Badge>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 text-sm">
                <p className="text-muted-foreground">
                  © {year} Nexus Technologies. All rights reserved.
                </p>
                <div className="hidden md:flex items-center gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Status
                  </a>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Sitemap
                  </a>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Do Not Sell
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Globe className="w-3 h-3 mr-2" />
                  English
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Heart className="w-3 h-3 mr-2" />
                  Made with love
                </Button>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="flex md:hidden flex-wrap gap-4 mt-6 pt-6 border-t border-border/50">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Status
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Sitemap
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Do Not Sell
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;