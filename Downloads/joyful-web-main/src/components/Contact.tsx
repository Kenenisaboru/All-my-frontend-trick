import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle, 
  Clock,
  MessageSquare,
  User
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@nexus.com",
      link: "mailto:hello@nexus.com",
      description: "We respond within 24 hours",
      badge: "Fast Response",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890",
      description: "Mon-Fri, 9AM-6PM EST",
      badge: "Available",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Haramaya University",
      description: "Center of Excellence, SAt, 403",
      badge: "Visit Us",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "Average response time",
      badge: "Guaranteed",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real application, you would:
    // 1. Validate form data
    // 2. Send to your backend API
    // 3. Handle response
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <Toaster richColors position="top-right" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/20 bg-primary/5">
            <MessageSquare className="w-3 h-3 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? Have questions about our services?
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  Contact Information
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="group p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-background/50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">{item.title}</p>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="text-foreground hover:text-primary transition-colors font-medium block"
                            >
                              {item.details}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.details}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-xl font-display font-semibold mb-6">
                  Frequently Asked
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4 py-1">
                    <p className="font-medium">What's your response time?</p>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-1">
                    <p className="font-medium">Do you offer consultations?</p>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer free 30-minute consultations for new clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass border-none shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold">
                    Send us a message
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>
                {isSubmitted && (
                  <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Sent
                  </Badge>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="bg-background/70 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="bg-background/70 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="kenenisa@gmail.com"
                      required
                      className="bg-background/70 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 0983701428"
                      className="bg-background/70 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this regarding?"
                    required
                    className="bg-background/70 border-border/50 focus:border-primary h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={6}
                    required
                    className="bg-background/70 border-border/50 focus:border-primary resize-none min-h-[150px]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-muted-foreground">
                    * Required fields
                  </p>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="px-8 min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Currently accepting new projects
            </span>
            <span>•</span>
            <span>Support available Monday - Friday</span>
            <span>•</span>
            <span>Enterprise solutions available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;