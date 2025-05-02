
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon?: React.ReactNode;
}

const FeatureCard = ({
  title,
  description,
  imageUrl,
  link,
  icon,
}: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="flex items-center gap-2 text-xl text-agri-green-600">
          {icon && <div className="text-agri-green-500">{icon}</div>}
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full border-agri-green-500 text-agri-green-600 hover:bg-agri-green-50">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
