import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars  = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="px-12">
      <Hero />
      <section>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Better Mobiles
            </span>{" "}
            Faster, More Style.
          </h1>
          <p className="text-sm font-normal text-gray-500 lg:text-md dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <SearchBar/>
          <div>
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div>
              {allCars?.map((car) => <CarCard car = {car} />)}
            </div>
          </section>
        ) : (
          <section>
            the data is empty
          </section>
        ) }
      </section>
    </main>
  );
}
