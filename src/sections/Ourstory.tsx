import OurstoryImg from '@/assets/images/OurstoryImg.png';

export const Ourstory = () => {
    return (
      <section className="w-full h-fit flex items-center justify-between border-2 border-primary">
        <div className="max-w-[525px] h-fit flex flex-col gap-10 text-black mx-auto p-4">
          <h3 className="font-inter font-semibold text-[54px]">Our story</h3>
          <div className="flex flex-col gap-6 font-normal text-base">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive
              has 10,500 sallers and 300 brands and serves 3 millioons customers
              across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className=''>
            <img src={OurstoryImg} />
        </div>
      </section>
    );
  };
  