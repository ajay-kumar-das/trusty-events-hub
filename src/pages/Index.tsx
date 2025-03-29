
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import WorkCard from "@/components/WorkCard";
import { events, works, posts } from "@/utils/mockData";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Only display featured items
  const featuredEvents = events.slice(0, 3);
  const featuredWorks = works.slice(0, 3);
  const latestPost = posts[0]; // Just display the latest post

  // Add simple animation
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                TrustWorks is dedicated to improving our community through sustainable initiatives, educational programs, and collaborative projects. We believe in the power of trust, transparency, and impactful work to create lasting positive change.
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Events */}
        <section className={`py-16 bg-gray-50 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <Link to="/events">
                <Button variant="ghost" className="flex items-center gap-1 text-blue-600">
                  <span>View All</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Works */}
        <section className={`py-16 bg-white transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Our Latest Works</h2>
              <Link to="/works">
                <Button variant="ghost" className="flex items-center gap-1 text-blue-600">
                  <span>View All</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorks.map(work => (
                <WorkCard key={work.id} {...work} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest News/Blog */}
        <section className={`py-16 bg-gray-50 transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Latest News</h2>
            
            <div className="max-w-3xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{latestPost.title}</h3>
                <div className="text-sm text-gray-500 mb-4">
                  Posted on {new Date(latestPost.date).toLocaleDateString()} by {latestPost.author}
                </div>
                <p className="text-gray-700 mb-4">{latestPost.summary}</p>
                <Button variant="outline">Read More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
