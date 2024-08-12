import { useState } from 'react';
import { Hammer, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Index = () => {
  const [showPropaganda, setShowPropaganda] = useState(false);

  return (
    <div className="min-h-screen bg-red-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to the People's White House</h1>
          <p className="text-xl">United in our struggle for equality and workers' rights</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-red-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hammer className="mr-2" /> Latest Decrees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Nationalization of all major industries</li>
                <li>Implementation of universal basic income</li>
                <li>Mandatory worker representation on all corporate boards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2" /> Achievements of the Revolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>100% employment rate achieved</li>
                <li>Free education and healthcare for all citizens</li>
                <li>Elimination of homelessness through public housing initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowPropaganda(!showPropaganda)}
          >
            {showPropaganda ? "Hide Party Message" : "Show Party Message"}
          </Button>
          {showPropaganda && (
            <Card className="mt-4 bg-yellow-600 text-black">
              <CardHeader>
                <CardTitle>Message from the Party</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comrades! Our glorious revolution continues to bring prosperity and equality to all. Stay vigilant against the forces of capitalism and imperialism. Together, we build a brighter future!</p>
              </CardContent>
              <CardFooter>
                <CardDescription>- The Central Committee</CardDescription>
              </CardFooter>
            </Card>
          )}
        </section>

        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
