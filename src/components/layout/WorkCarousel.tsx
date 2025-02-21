'use client'

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import StyleVibe from "../../../public/styleVibe.png";
import StyleVibe2 from "../../../public/stylevibe2.png";
import StyleVibe3 from "../../../public/stylevibe3.png";
import StyleVibe4 from "../../../public/stylevibe4.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const projectImages = [
  { id: 1, images: [StyleVibe, StyleVibe2, StyleVibe3, StyleVibe4] },
];

function WorkCarousel() {
  const plugin = useRef(
    Autoplay({ 
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <div className=" border-gray-600">
      <Carousel
        // plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        orientation="horizontal"
        className="w-full h-full"
      >
        <CarouselContent 
          className="h-full transition-all duration-300 ease-in-out"
        >
          {projectImages[0].images.map((item, index) => (
            <CarouselItem
              key={index}
              className="h-full w-full flex-shrink-0 bg-transparent 
                transition-opacity duration-500 ease-in-out 
                opacity-50 
                data-[active=true]:opacity-100"
            >
              <div className="h-full">
                <Card className="h-full bg-transparent border-none">
                  <CardContent className="flex items-center justify-center p-6 h-full">
                    <div className="relative w-full h-[300px]">
                      <Image 
                        src={item} 
                        alt="carousel" 
                        fill
                        className="object-contain rounded-md 
                          transition-opacity duration-500 ease-in-out"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default WorkCarousel;