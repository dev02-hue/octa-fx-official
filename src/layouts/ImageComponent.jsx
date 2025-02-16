import { assets } from "../assets/assets";

const ImageComponent = () => {
  return (
    <div className="md:w-1/2 w-full flex justify-center">
      {" "}
      <img className="w-[90%]" src={assets.download1} alt="" />
    </div>
  );
};

export default ImageComponent;
