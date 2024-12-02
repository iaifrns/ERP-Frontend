import { images } from "@/constants/images";
import { englishText } from "@/constants/websiteText";
import InputBox from "./components/InputBox";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";

const Register = () => {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => navigate(paths.LOGIN);
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="login-container">
        <div className="flex w-full items-center justify-center">
          <div className="md:w-[80%] max-md:w-full flex flex-col gap-4">
            <img src={images.LOGO} alt={images.LOGO} className="w-[100px]" />
            <p className="text-lg font-semibold">
              {englishText.REGISTER.TITLE}
            </p>
            <InputBox
              label={englishText.REGISTER.LABEL1}
              placeholder={englishText.REGISTER.LABEL1.toLowerCase()}
            />
            <InputBox
              label={englishText.REGISTER.LABEL2}
              placeholder={englishText.REGISTER.LABEL2.toLowerCase()}
            />
            <InputBox
              label={englishText.REGISTER.LABEL3}
              placeholder={englishText.REGISTER.LABEL3.toLowerCase()}
            />
            <InputBox
              label={englishText.REGISTER.LABEL4}
              placeholder={englishText.REGISTER.LABEL4.toLowerCase()}
            />
            <Button className="w-full">
              {englishText.REGISTER.BUTTONTEXT}
            </Button>
            <span className="w-full">
              {englishText.REGISTER.QUESTION}{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleNavigateToLogin}
              >
                {englishText.REGISTER.LOGIN}
              </span>
            </span>
          </div>
        </div>
        <div className="w-full">
          <img
            src={images.REGISTER}
            alt={images.REGISTER}
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
