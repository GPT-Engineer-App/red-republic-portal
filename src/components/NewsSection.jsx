import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsSection = () => {
  const news = [
    { title: "Record Grain Harvest Exceeds Targets", content: "Our glorious farmers have surpassed all expectations in this year's harvest." },
    { title: "New Factory Opens in Eastern District", content: "The people's industry grows stronger with the inauguration of our latest manufacturing plant." },
    { title: "International Workers' Day Celebration", content: "Millions gather to commemorate the achievements of the proletariat in our annual parade." },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <Card key={index} className="bg-red-800">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
