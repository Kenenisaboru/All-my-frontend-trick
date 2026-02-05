import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Star, TrendingUp, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const metrics = [
    { value: "99.9%", label: "Uptime", icon: Zap, color: "text-green-500" },
    { value: "2.5x", label: "Faster", icon: TrendingUp, color: "text-blue-500" },
    { value: "10K+", label: "Teams", icon: Star, color: "text-amber-500" },
  ];

  const achievements = [
    "Named after Kenenisa Boru - symbolizing speed and excellence in innovation",
    "2024 Product of the Year - Tech Excellence Awards",
    "Trusted by Fortune 500 companies worldwide",
    "Industry-leading 99.9% customer satisfaction"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Kenenisa Boru Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, "-100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-primary/15 via-primary/5 to-transparent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />

      {/* Kenenisa Boru Signature Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--primary))_49%,hsl(var(--primary))_51%,transparent_52%)] bg-[length:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_48%,hsl(var(--primary))_49%,hsl(var(--primary))_51%,transparent_52%)] bg-[length:80px_80px]" />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background/50 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="glass px-4 py-2 border-primary/20 animate-fade-in">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Inspired by Kenenisa Boru
                </Badge>
                <Badge className="bg-gradient-to-r from-primary to-primary/80 border-none text-white px-4 py-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Product of the Year 2024
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="block"
                >
                  Build at
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    <TypeAnimation
                      sequence={[
                        'Kenenisa Speed',
                        2000,
                        'Lightning Speed',
                        2000,
                        'Champions Speed',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="font-bold"
                    />
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>
              </h1>

              {/* Subheadline with Rotating Features */}
              <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-12">
                <TypeAnimation
                  sequence={[
                    'The platform that empowers champions',
                    2000,
                    'Built for speed and excellence',
                    2000,
                    'Inspired by world-class performance',
                    2000,
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="leading-relaxed"
                />
              </div>

              {/* Kenenisa Boru Legacy Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass rounded-2xl p-6 mb-8 border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">
                      "Like Kenenisa Boru breaks records, we break barriers in innovation"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Our platform embodies the same dedication to speed, excellence, and record-breaking performance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  variant="hero" 
                  size="xl"
                  className="group px-8 h-14 text-base"
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl"
                  className="group px-8 h-14 text-base"
                >
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Kenenisa Demo
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Metrics & Stats */}
            <div className="space-y-8">
              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-3xl font-bold mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-2xl p-8 border border-border/50"
              >
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Our Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass rounded-2xl p-8 border border-border/50"
              >
                <p className="text-sm text-muted-foreground mb-4 text-center">Trusted by champions worldwide</p>
                <div className="grid grid-cols-3 gap-4">
                  {["Google", "Microsoft", "Airbnb", "Spotify", "Slack", "Tesla"].map((company, index) => (
                    <div
                      key={company}
                      className="h-12 rounded-lg bg-background/50 flex items-center justify-center group hover:bg-background/80 transition-colors"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-lg font-display font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 glass rounded-2xl p-8 border border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Elite Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground animate-pulse">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;