
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero = ({
  title,
  subtitle,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-b from-agri-green-50 to-white">
      <div className="agri-container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agri-green-600 mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link to={primaryButtonLink}>
                  <Button size="lg" className="bg-agri-green-500 hover:bg-agri-green-600">
                    {primaryButtonText}
                  </Button>
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink}>
                  <Button variant="outline" size="lg" className="border-agri-green-500 text-agri-green-500">
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={imageUrl}
              alt="Agricultural landscape"
              className="rounded-lg shadow-lg max-h-[500px] object-cover animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
