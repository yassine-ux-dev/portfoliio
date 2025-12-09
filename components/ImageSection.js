const ImageSection = () => {
  return (
    <div className="flex justify-center items-center col-span-1 w-full">
      <div className="flex justify-center items-center flex-shrink w-full h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative">
        <div className="box absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0 md:left-1/2 md:-translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default ImageSection;
