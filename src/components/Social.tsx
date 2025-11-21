import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Github, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    color: "hover:text-accent",
  },
];

const Social = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Kết Nối Với Tôi
        </h2>
        
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-lg">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Hãy kết nối và theo dõi tôi trên các mạng xã hội để cập nhật những nội dung mới nhất!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  variant="outline" 
                  className="w-full h-20 flex flex-col gap-2 hover:scale-105 transition-all"
                >
                  <social.icon className={`h-6 w-6 transition-colors ${social.color}`} />
                  <span className="text-sm font-medium">{social.name}</span>
                </Button>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Social;
