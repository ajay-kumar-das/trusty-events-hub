
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkCardProps {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  image: string;
}

const WorkCard = ({ id, title, category, year, description, impact, image }: WorkCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="bg-blue-50">{category}</Badge>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-gray-700">{description}</p>
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-blue-700 mb-1">Impact</h4>
          <p className="text-gray-700">{impact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
