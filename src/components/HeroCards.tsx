import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const HeroCards = () => {
  const images = [
    "src/assets/Desktop - Dashboard.png",
    "src/assets/Desktop - Settings Semantic rules 2.png",
    "src/assets/Desktop - Search results - List Vue - More Details - Selected Item.png",
    "src/assets/Desktop - Chat.png",
    "src/assets/Desktop - Login Page - SaaS.png"
  ];

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[300px] h-[600px]">
      {/* Testimonial */}
      <Carousel orientation="vertical" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
        <CarouselContent className="mr-10 w-[700px] h-[700px]">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pt-20 w-full h-full">
            <div className="p-1">
                  <img
                    src={image}
                    alt={`Feature ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </Carousel>
    </div>
  );
};