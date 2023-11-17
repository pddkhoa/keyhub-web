import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
  const { isLoading, sendRequest } = useFetch();

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState<string>();
  const emailRegister = useSelector((state: RootState) => state.auth.email);

  useEffect(() => {
    if (!emailRegister) {
      navigate("/login", { replace: true });
      return;
    }
    setEmail(emailRegister);
  }, [location, navigate, emailRegister]);

  const handleInputChange = (e: any, index: number) => {
    // console.log(e.target.nextSibling);

    const newValue = e.target.value;
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };
  const combinedValue = inputValues.join("");
  const report = {
    email: email,
    token: combinedValue,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    sendRequest({
      type: REQUEST_TYPE.CHECK_OTP,
      data: report,
      // slug: report.email,
    });
    // checkOtp(report, dispatch, navigate);
  };
  return (
    <div className="relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
      <div className="relative h-screen   sm:flex sm:flex-row  justify-center bg-transparent ">
        <div className="flex justify-center self-center z-10">
          <div className="relative bg-card brightness-150 border-2 border-border px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl text-title">
                  <p>Email Verification</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>We have sent a code to your email</p>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-16 ">
                    <div className="flex flex-row items-center justify-between w-full space-x-5">
                      {inputValues.map((value, index) => (
                        <div key={index} className="w-16 h-16">
                          <Input
                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl"
                            type="text"
                            value={value}
                            maxLength={1}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col space-y-5">
                      <div>
                        {isLoading ? (
                          <Button className="w-full" disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  border-none text-white text-sm shadow-sm"
                          >
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
