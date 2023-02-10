import { Carousel } from "flowbite-react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96 bg-gray-400">
      <Carousel>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-2/3 sm:w-1/6"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt="..."
          />
        </div>

        <div className="flex justify-center">
          <img className="w-3/4 sm:w-1/3" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="..." />
        </div>

        <div className="flex justify-center">
          <img className="w-3/4 sm:w-1/3" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt="..." />
        </div>

      </Carousel>
    </div>
  );
};
