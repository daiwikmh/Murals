import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface KoalaCard {
  id: number;
  name: string;
  skill: string;
  imageUrl: string;
}

const Features: KoalaCard[] = [
  {
    id: 1,
    name: "Agent K",
    skill: "Infiltration",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd1c6946cd673361a62adc3cbfad66cdaa9fd9?placeholderIfAbsent=true",
  },
  {
    id: 2,
    name: "Commander Eucalyptus",
    skill: "Strategy",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd1c6946cd673361a62adc3cbfad66cdaa9fd9?placeholderIfAbsent=true",
  },
  {
    id: 3,
    name: "Shadow Paws",
    skill: "Stealth",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd1c6946cd673361a62adc3cbfad66cdaa9fd9?placeholderIfAbsent=true",
  },
  {
    id: 4,
    name: "Tech Whiskers",
    skill: "Hacking",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd1c6946cd673361a62adc3cbfad66cdaa9fd9?placeholderIfAbsent=true",
  },
];

const KoalaGallery: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(2);

  const handleLoadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 2, Features.length));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Meet Our{" "}
          <span className="text-[rgba(21,217,137,1)]">Elite Agents</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Features.slice(0, visibleCards).map((koala) => (
            <Card
              key={koala.id}
              className="bg-[rgba(12,26,17,0.7)] border-[rgba(21,217,137,0.3)] overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <img
                      src={koala.imageUrl}
                      alt={koala.name}
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {koala.name}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-[rgba(21,217,137,1)] text-black text-xs font-semibold px-2 py-1 rounded">
                        {koala.skill}
                      </span>
                    </div>
                    <p className="text-[rgba(193,204,199,1)] text-sm">
                      A highly trained koala agent specializing in{" "}
                      {koala.skill.toLowerCase()}, protecting the world one
                      mission at a time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleCards < Features.length && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              className="bg-[rgba(21,217,137,1)] hover:bg-[rgba(21,217,137,0.8)] text-white"
            >
              Load More Agents
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default KoalaGallery;