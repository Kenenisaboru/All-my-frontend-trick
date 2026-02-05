import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    content: "Nexus has completely transformed how our team collaborates. The AI features are incredibly intuitive and have saved us countless hours.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder at LaunchPad",
    content: "The best investment we've made this year. Our productivity increased by 40% within the first month of using Nexus.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Lead at Innovate",
    content: "I've tried dozens of platforms, but nothing comes close to the seamless experience Nexus provides. It's simply game-changing.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Loved by{" "}
            <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the growing community of teams achieving more with Nexus.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-10">
              "{testimonials[activeIndex].content}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-display font-semibold text-lg">{testimonials[activeIndex].name}</p>
              <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
