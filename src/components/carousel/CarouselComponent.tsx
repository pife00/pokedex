import { Carousel } from "flowbite-react"

type sprites = {
    images: {
        back_default: string | undefined,
        front_default: string | undefined,
        front_dream_world: string | undefined
        front_official_art: string | undefined
    }
} & typeof defaultProps

const defaultProps = {
    Images: {
        back_default: '',
        front_default: '',
    }
}

export const CarouselComponent = ({ images }: sprites) => {

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-gray-400">
            <Carousel >
                <img
                    src={images.back_default}
                    alt="..."
                />

                <img className="w-1/6"
                    src={images.front_default}
                    alt="..."
                />
                <img className="w-1/6"
                    src={images.front_dream_world}
                    alt="..."
                />


                <img className="items-center"
                    src={images.front_official_art}
                    alt="..."
                />

            </Carousel>
        </div>
    )
}

CarouselComponent.defaultProps = defaultProps