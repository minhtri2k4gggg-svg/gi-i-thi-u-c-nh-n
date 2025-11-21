import { Card } from "@/components/ui/card";
import { Code2, Palette, Lightbulb, Heart } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Phát triển Web",
    description: "Xây dựng các ứng dụng web hiện đại và responsive",
  },
  {
    icon: Palette,
    title: "Thiết kế",
    description: "Tạo ra những giao diện đẹp mắt và thân thiện",
  },
  {
    icon: Lightbulb,
    title: "Sáng tạo",
    description: "Luôn tìm kiếm những ý tưởng mới và độc đáo",
  },
  {
    icon: Heart,
    title: "Đam mê",
    description: "Yêu thích công việc và không ngừng học hỏi",
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Kỹ Năng & Sở Thích
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all group cursor-pointer border-2 hover:border-primary/50"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
