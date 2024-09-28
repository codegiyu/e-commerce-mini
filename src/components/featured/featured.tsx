import LadyImg from "@/assets/images/woman-on-hat.png";
import PS5Img from "@/assets/images/ps5-slim.png";
import SpeakersImg from "@/assets/images/speakers.png";
import PerfumeImg from "@/assets/images/perfume.png";
import { Header } from "../header/header";

function Featured() {
  return (
    <main className="mx-auto w-[90%] md:max-w-[1170px]">
      <Header label="featured" title="New Arrival" />
      <section className="my-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <aside className="relative col-span-1 min-h-[300px] bg-black text-white sm:min-h-min lg:col-span-2 lg:row-start-1 lg:row-end-3">
          <img className="h-full w-full" src={PS5Img} alt="ps5 slim" />

          <div className="absolute bottom-5 left-3 w-[70%]">
            <h4 className="text-2xl font-semibold">PlayStation 5</h4>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="relative col-span-1 min-h-[300px] bg-black text-white sm:min-h-min lg:col-span-2 lg:row-span-1">
          <img className="h-full w-full" src={LadyImg} alt="woman-on-hat" />

          <div className="absolute bottom-5 left-3 w-[70%]">
            <h4 className="text-2xl font-semibold">Women's Collection</h4>
            <p>Featured woman collections that give you another vibe.</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="min-h-[300px ] relative bg-black text-white sm:min-h-min lg:col-start-3 lg:col-end-3">
          <img className="h-full w-full" src={SpeakersImg} alt="speakers" />
          <div className="absolute bottom-5 left-3 w-[70%]">
            <h4 className="text-2xl font-semibold">Speakers</h4>
            <p>Amazon wireless apeakers</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
        <aside className="min-h-[300px ] relative bg-black text-white sm:min-h-min lg:col-start-4 lg:-col-end-1">
          <img className="h-full w-full" src={PerfumeImg} alt="perfume" />
          <div className="absolute bottom-5 left-3 w-[70%]">
            <h4 className="text-2xl font-semibold">Perfume</h4>
            <p>Gucci Intense OUD EDP</p>
            <a
              href="#"
              className="mt-2 inline-block cursor-pointer underline underline-offset-8"
            >
              Shop Now
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Featured;
