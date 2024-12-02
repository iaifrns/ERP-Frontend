import { bgImages, images } from "@/constants/images";
import { englishText } from "@/constants/websiteText";
import InputBox from "./components/InputBox";
import CheckBoxSection from "./components/CheckBoxSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigateToRegister = () => navigate(paths.REGISTER);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="login-container">
        <div
          className="flex w-full h-full p-8 bg-cover flex-col items-center md:gap-16 max-md:gap-4"
          style={{ backgroundImage: `url(${bgImages.BGIMG1})` }}
        >
          <img src={images.LOGO} alt={images.LOGO} className="logo-css" />
          <img
            src={images.LOGINIMG}
            alt={images.LOGINIMG}
            className="md:w-[350px] max-md:w-[200px]"
          />
        </div>
        <div className="w-full p-8 flex justify-center items-center">
          <div className="md:w-[80%] max-md:w-full flex flex-col gap-4 h-fit">
            <p className="small-title">{englishText.LOGIN.TITLE}</p>
            <p className="desc-text">{englishText.LOGIN.DESC}</p>
            <InputBox
              label={englishText.LOGIN.LABEL1}
              placeholder="demo@gmail.com"
              type={englishText.LOGIN.LABEL1}
            />
            <InputBox label={englishText.LOGIN.LABEL2} placeholder="****" />
            <CheckBoxSection label={englishText.LOGIN.CHECKBOXTEXT} />
            <Button>{englishText.LOGIN.SIGNIN}</Button>
            <Button variant={"outline"} onClick={handleNavigateToRegister}>
              {englishText.LOGIN.SIGNUP}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
