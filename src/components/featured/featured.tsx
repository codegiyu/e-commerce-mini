import LadyImg from "@/assets/images/woman-on-hat.png";
import PS5Img from "@/assets/images/ps5-slim.png";
import SpeakersImg from "@/assets/images/speakers.png";
import PerfumeImg from "@/assets/images/perfume.png";
import { Header } from "../header/header";

function Featured() {
  return (
    <section className="container-main font-inter">
      <Header label="featured" title="New Arrival" />
      <div className="my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,300px)] lg:gap-8">
        <aside className="relative col-span-1 aspect-square w-full bg-black text-white md:aspect-auto lg:col-span-2 lg:row-start-1 lg:row-end-3">
          <img className="h-full w-full" src={PS5Img} alt="ps5 slim" />

          <div className="absolute bottom-5 left-3 lg:w-[70%]">
            <h4 className="text-2xl font-semibold">PlayStation 5</h4>
            <p className="py-2 lg:py-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="relative col-span-1 aspect-square w-full bg-black text-white md:aspect-auto lg:col-span-2 lg:row-span-1">
          <img className="h-full w-full" src={LadyImg} alt="woman-on-hat" />

          <div className="absolute bottom-5 left-3 lg:w-[70%]">
            <h4 className="text-2xl font-semibold">Women's Collection</h4>
            <p className="py-2 lg:py-4">
              Featured woman collections that give you another vibe.
            </p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="relative aspect-square w-full bg-black text-white md:aspect-auto lg:col-start-3 lg:col-end-3">
          <img className="h-full w-full" src={SpeakersImg} alt="speakers" />
          <div className="absolute bottom-5 left-3 lg:w-[70%]">
            <h4 className="text-2xl font-semibold">Speakers</h4>
            <p className="py-2 lg:py-4">Amazon wireless apeakers</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="relative aspect-square w-full bg-black text-white md:aspect-auto lg:col-start-4 lg:-col-end-1">
          <img className="h-full w-full" src={PerfumeImg} alt="perfume" />
          <div className="absolute bottom-5 left-3 lg:w-[70%]">
            <h4 className="text-2xl font-semibold">Perfume</h4>
            <p className="py-2 lg:py-4">Gucci Intense OUD EDP</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Featured;
