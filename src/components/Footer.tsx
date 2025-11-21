import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Tạo với <Heart className="h-4 w-4 text-primary fill-primary" /> bởi [Tên của bạn] © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
