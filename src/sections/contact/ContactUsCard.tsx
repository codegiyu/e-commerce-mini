import CallUs from "./CallUs";

export default function ContactUsCard() {
  return (
    <section className="ml-6 w-[340px] h-[457px] rounded-[4px] shadow-custom-shadow">
      <div className="w-[270px] h-[366px] pt-10 ml-[35px]">
        <CallUs
          title="Call To Us"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
          }
        >
          <div className="flex flex-col gap-4 mt-6">
            <h1 className="font-normal text-[14px] leading-5 text-[#000000]">
              We are available 24/7, 7 days a week.
            </h1>
            <span className="font-normal text-[14px] leading-5 text-[#000000]">
              Phone: +8801611112222
            </span>
          </div>
        </CallUs>
        <div className="border border-b-2 opacity-50 w-[270px] mx-auto my-8"></div>
        <CallUs
          title="Write To US"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          }
        >
          <div className="flex flex-col gap-4 mt-6 text-[#000000]">
            <h1 className="font-normal text-[14px] leading-5">
              Fill out our form and we will contact you within 24 hours.
            </h1>
            <span className="font-normal text-[14px] leading-5">
              Emails: Customer@exclusive.com
            </span>
            <span className="font-normal text-[14px] leading-5">
              Emails: support@exclusive.com
            </span>
          </div>
        </CallUs>
      </div>
    </section>
  );
}
