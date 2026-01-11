import Image from "next/image";

export default function Slider() {
  const companies = [
    { src: "/apple.svg", alt: "Apple", width: 35, height: 40 },
    { src: "/Uber.svg", alt: "Uber", width: 120, height: 40 },
    { src: "/Shopify.svg", alt: "Shopify", width: 160, height: 40 },
    { src: "/Salesforce.svg", alt: "Salesforce", width: 60, height: 40 },
    { src: "/Peloton.svg", alt: "Peloton", width: 146, height: 40 },
    { src: "/Blizzard.svg", alt: "Blizzard", width: 130, height: 40 },
    { src: "/google.svg", alt: "Google", width: 117, height: 40 },
    { src: "/meta.svg", alt: "Meta", width: 130, height: 40 },
    { src: "/tesla.svg", alt: "Tesla", width: 130, height: 40 },
    { src: "/Amazon.svg", alt: "Amazon", width: 100, height: 40 },
  ];

  return (
    <div className="w-full py-[120px]">
      <div className="px-0">
        <h2 className="text-xl font-bold text-center mb-12">
          Our students are getting hired by top companies. We can help you too.
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#F7F7F7] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#F7F7F7] to-transparent z-10" />

          {/* Infinite scrolling container */}
          <div className="flex animate-scroll ">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={company.width}
                  height={company.height}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={company.width}
                  height={company.height}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}