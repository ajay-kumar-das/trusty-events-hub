
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events, works, posts } from "@/utils/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const [activeTab, setActiveTab] = useState("events");

  // Mock function to demonstrate functionality
  const handleAdd = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to add new content will be available in the next update.",
    });
  };

  const handleEdit = (id: number, type: string) => {
    toast({
      title: "Edit Feature Coming Soon",
      description: `Edit functionality for ${type} will be available in the next update.`,
    });
  };

  const handleDelete = (id: number, type: string) => {
    toast({
      title: "Delete Feature Coming Soon",
      description: `Delete functionality for ${type} will be available in the next update.`,
    });
  };

  const handleView = (id: number, type: string) => {
    toast({
      title: "View Details",
      description: `Viewing details for ${type} ID: ${id}`,
    });
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Signed in as Admin</span>
            </div>
          </div>
          
          <Tabs 
            defaultValue="events" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="works">Works</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            
            {/* Events Tab */}
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Events</CardTitle>
                      <CardDescription>Create, update or delete upcoming events.</CardDescription>
                    </div>
                    <Button onClick={handleAdd} className="flex items-center gap-1">
                      <PlusCircle size={16} />
                      <span>Add Event</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 text-left text-sm font-medium text-gray-500">ID</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Title</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Date</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Location</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map(event => (
                          <tr key={event.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 text-sm">{event.id}</td>
                            <td className="py-3 text-sm font-medium">{event.title}</td>
                            <td className="py-3 text-sm">{new Date(event.date).toLocaleDateString()}</td>
                            <td className="py-3 text-sm">{event.location}</td>
                            <td className="py-3 text-sm space-x-2 flex">
                              <Button variant="ghost" size="sm" onClick={() => handleView(event.id, "event")}>
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleEdit(event.id, "event")}>
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete(event.id, "event")}>
                                <Trash size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Works Tab */}
            <TabsContent value="works">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Works</CardTitle>
                      <CardDescription>Add or update projects and initiatives.</CardDescription>
                    </div>
                    <Button onClick={handleAdd} className="flex items-center gap-1">
                      <PlusCircle size={16} />
                      <span>Add Work</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 text-left text-sm font-medium text-gray-500">ID</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Title</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Category</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Year</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {works.map(work => (
                          <tr key={work.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 text-sm">{work.id}</td>
                            <td className="py-3 text-sm font-medium">{work.title}</td>
                            <td className="py-3 text-sm">{work.category}</td>
                            <td className="py-3 text-sm">{work.year}</td>
                            <td className="py-3 text-sm space-x-2 flex">
                              <Button variant="ghost" size="sm" onClick={() => handleView(work.id, "work")}>
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleEdit(work.id, "work")}>
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete(work.id, "work")}>
                                <Trash size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Posts Tab */}
            <TabsContent value="posts">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Posts</CardTitle>
                      <CardDescription>Create and edit news or blog posts.</CardDescription>
                    </div>
                    <Button onClick={handleAdd} className="flex items-center gap-1">
                      <PlusCircle size={16} />
                      <span>Add Post</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 text-left text-sm font-medium text-gray-500">ID</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Title</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Date</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Author</th>
                          <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map(post => (
                          <tr key={post.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 text-sm">{post.id}</td>
                            <td className="py-3 text-sm font-medium">{post.title}</td>
                            <td className="py-3 text-sm">{new Date(post.date).toLocaleDateString()}</td>
                            <td className="py-3 text-sm">{post.author}</td>
                            <td className="py-3 text-sm space-x-2 flex">
                              <Button variant="ghost" size="sm" onClick={() => handleView(post.id, "post")}>
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleEdit(post.id, "post")}>
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete(post.id, "post")}>
                                <Trash size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
