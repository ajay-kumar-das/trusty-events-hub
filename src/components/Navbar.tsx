
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600";
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Trust<span className="text-gray-800">Works</span></Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${isActive("/")} transition-colors`}>Home</Link>
          <Link to="/events" className={`${isActive("/events")} transition-colors`}>Events</Link>
          <Link to="/works" className={`${isActive("/works")} transition-colors`}>Our Works</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/admin" className={`${isActive("/admin")} transition-colors`}>Admin</Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={logout}
                className="flex items-center gap-1"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <LogIn size={16} />
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white border-t">
          <Link to="/" className={`block py-2 ${isActive("/")}`} onClick={toggleMenu}>Home</Link>
          <Link to="/events" className={`block py-2 ${isActive("/events")}`} onClick={toggleMenu}>Events</Link>
          <Link to="/works" className={`block py-2 ${isActive("/works")}`} onClick={toggleMenu}>Our Works</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/admin" className={`block py-2 ${isActive("/admin")}`} onClick={toggleMenu}>Admin</Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="flex items-center gap-1"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </>
          ) : (
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <LogIn size={16} />
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
