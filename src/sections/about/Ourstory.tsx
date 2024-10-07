import OurstoryImg from '@/assets/images/OurstoryImg.png';

export const Ourstory = () => {
  return (
    <section className="w-full h-fit flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">
      <div className="w-[90%] md:w-[50%] max-w-[525px] h-fit flex flex-col gap-10 text-black mx-auto p-4 md:p-6 lg:p-8">
        <h3 className="font-inter font-semibold text-[30px] md:text-[42px] lg:text-[48px]">
          Our Story
        </h3>
        <div className="flex flex-col gap-4 text-sm md:text-sm lg:text-base">
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics and fashion.
          </p>
        </div>
      </div>
      <div className="w-full h-full md:w-1/2">
        <img
          src={OurstoryImg}
          className="w-full h-full object-cover"
          alt="Our Story"
        />
      </div>
    </section>
  );
};
