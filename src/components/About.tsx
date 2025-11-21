import { Card } from "@/components/ui/card";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Về Tôi
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img 
                  src={avatarPlaceholder} 
                  alt="Profile" 
                  className="w-48 h-48 rounded-full shadow-lg ring-4 ring-primary/20"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Chào mừng đến với trang của tôi!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Tôi là một người đam mê công nghệ và sáng tạo. Với niềm đam mê phát triển 
                  và học hỏi không ngừng, tôi luôn tìm kiếm những thử thách mới để phát triển 
                  bản thân.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tôi yêu thích việc kết nối với mọi người và chia sẻ những ý tưởng sáng tạo. 
                  Hãy kết nối với tôi qua các mạng xã hội bên dưới!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
