
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Making a Difference in Our Community
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            We're dedicated to creating positive change through impactful projects, meaningful events, and community engagement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/works">Our Works</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-600">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
