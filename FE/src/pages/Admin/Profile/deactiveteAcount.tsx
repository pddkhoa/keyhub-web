import { Label } from "@/components/ui/label";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import User from "@/types/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "rizzui";
interface DeactivateProps {
  data: User;
  index: number;
}
export const DeactiveteAcount: React.FC<DeactivateProps> = ({
  data,
  index,
}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  const { isLoading, sendRequest } = useFetch();

  const handleDeactiveAccount = async (report: any) => {
    await sendRequest({ type: REQUEST_TYPE.ADMIN_DELETE_USER, data: report });
    navigate(0);
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLUSER,
      slug: index?.toString(),
    });
  };
  return (
    <div className="p-8 mb-12  flex justify-center text-center">
      <div className="flex flex-col gap-8">
        <Label className="text-white text-2xl font-bold">
          Deactivate Account
        </Label>
        <div className="flex items-center text-white">
          <input
            id="link-checkbox"
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium ">
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        {isLoading ? (
          <Button
            className={`bg-red-700 text-white w-full opacity-50 cursor-not-allowed
          }`}
            disabled
          >
            Please wait...
          </Button>
        ) : (
          <Button
            className={`bg-red-700 text-white w-full ${
              !isCheckboxChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isCheckboxChecked}
            onClick={() => {
              handleDeactiveAccount({ user_id: data?.id, value: 2 });
            }}
          >
            Deactivate Account
          </Button>
        )}
      </div>
    </div>
  );
};
