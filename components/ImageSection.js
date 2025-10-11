import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="flex justify-center items-center col-span-1">
      <div className="flex justify-center items-center flex-shrink w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
          src="/Photo.webp"
          alt="Yassine Ben Charrada"
          priority
          className="box absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0 md:left-1/2 md:-translate-x-1/2"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default ImageSection;
