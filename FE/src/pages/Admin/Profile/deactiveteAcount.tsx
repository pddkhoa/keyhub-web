import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "rizzui";

export const DeactiveteAcount = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  return (
    <div className="p-8 mb-12">
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

        <Button
          className={`bg-red-700 text-white w-1/3 ${
            !isCheckboxChecked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isCheckboxChecked}
        >
          Deactivate Account
        </Button>
      </div>
    </div>
  );
};
