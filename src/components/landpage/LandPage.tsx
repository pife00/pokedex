import gengar from "../../assets/gengar.png";

export const LandPage = () => {
  return (
    <>
      <div className=" bg-white grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="sm:ml-20 lg:mt-0 lg:col-span-6 lg:flex">
          <img src={gengar} alt="" className=" " />
        </div>
        <div className="mr-auto place-self-center lg:col-span-5">
          <h3 className="font-bold text-4xl mb-6">Discovering Pokémon</h3>
          <p>
            Welcome to the world of Pokémon! These beloved creatures have
            captured the hearts of people all around the world for over two
            decades. From video games to trading cards, Pokémon have inspired a
            vast multimedia franchise{" "}
          </p>
        </div>
      </div>
    </>
  );
};
