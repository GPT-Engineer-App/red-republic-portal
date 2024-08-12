import { Hammer, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-red-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Hammer className="mr-2" />
          <Star className="mr-2" />
          <h1 className="text-2xl font-bold">People's White House</h1>
        </div>
        <nav>
          <Button variant="ghost" className="text-white mr-2">Home</Button>
          <Button variant="ghost" className="text-white mr-2">The Party</Button>
          <Button variant="ghost" className="text-white mr-2">Five-Year Plan</Button>
          <Button variant="ghost" className="text-white">Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
