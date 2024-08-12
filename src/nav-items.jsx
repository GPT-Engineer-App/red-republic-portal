import { Home, Users, BarChart2, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "The Party",
    to: "/party",
    icon: <Users className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual component when created
  },
  {
    title: "Five-Year Plan",
    to: "/plan",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual component when created
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual component when created
  },
];
