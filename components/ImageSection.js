const ImageSection = () => {
  return (
    <div className="flex justify-center items-center col-span-1">
      <div className="flex justify-center items-center flex-shrink w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <div className="box absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0 md:left-1/2 md:-translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default ImageSection;
