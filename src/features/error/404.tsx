import { Button } from "@/components/ui/button";
import { bgImages, images } from "@/constants/images";
import { englishText } from "@/constants/websiteText";

const PageNotFound = () => {
  return (
    <div
      className="flex w-full h-screen justify-center items-center"
      style={{ backgroundImage: `url(${bgImages.BGIMG2})` }}
    >
      <div className="w-full max-w-[1300px] h-full max-h-[800px] p-8 flex justify-between bg-opacity-0 gap-16 items-center max-md:flex-col">
        <div className="flex flex-col gap-8 h-fit md:w-[60%]">
          <div className="flex flex-col">
            <span className="md:text-[120px] max-md:text-[52px] text-primary font-bold">404</span>
            <span className="md:text-[52px] max-md:text-2xl text-secondary">{englishText.NOTFOUNDMESSAGE}</span>
            <p className="text-gray-400">{englishText.NOTFOUNDMESSAGEDESC}</p>
          </div>
          <Button className="w-fit p-8 font-bold text-lg">{englishText.NOTFOUNDTEXTBUTTON}</Button>
        </div>
        <div className="md:w-[40%]">
          <img
            src={images.ERRORPAGEIMG}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
