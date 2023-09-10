import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { verifyAccount } from "@/redux/apiRequest";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const VerifySignUp = () => {
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e: any, index: number) => {
    const newValue = e.target.value;
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };
  const combinedValue = inputValues.join("");

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      verifyAccount(combinedValue, dispatch, navigate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full  top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-pink-950 bottom-0 leading-5 h-full overflow-auto">
      <div className="relative h-screen   sm:flex sm:flex-row  justify-center bg-transparent ">
        <div className="flex justify-center self-center z-10">
          <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>Email Verification</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>We have sent a code to your email</p>
                </div>
              </div>
              <div>
                <form method="post">
                  <div className="flex flex-col space-y-16 ">
                    <div className="flex flex-row items-center justify-between w-full space-x-5">
                      {inputValues.map((value, index) => (
                        <div key={index} className="w-16 h-16">
                          <Input
                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
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
                        <Button
                          type="button"
                          onClick={handleSubmit}
                          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  border-none text-white text-sm shadow-sm"
                        >
                          Submit
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't recieve code?</p>{" "}
                        <a
                          className="flex flex-row items-center text-blue-600"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Resend
                        </a>
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
