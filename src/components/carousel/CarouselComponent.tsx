import { Carousel } from "flowbite-react";

type sprites = {
  images: {
    back_default: string;
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
      home: {
        front_default: string
      }
    };
  };
};

export const CarouselComponent = ({ images }: sprites) => {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96 bg-gray-400">
      <Carousel>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={images.other.dream_world.front_default}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={images.other["official-artwork"].front_default}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={images.other.home.front_default}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img className="w-3/4 sm:w-1/3" src={images.front_default} alt="..." />
        </div>

        <div className="flex justify-center">
          <img className="w-3/4 sm:w-1/3" src={images.back_default} alt="..." />
        </div>

      </Carousel>
    </div>
  );
};
