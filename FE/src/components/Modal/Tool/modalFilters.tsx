import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type ModalFiltersProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  tabs: string;
};

export const ModalFilters: React.FC<ModalFiltersProps> = ({
  setFlag,
  tabs,
}) => {
  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0 border rounded shadow bg-modal brightness-110">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b">
          <h1 className="text-lg grow text-title">Filter {tabs}</h1>
          <button
            className="block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors"
            onClick={setFlag.off}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="px-8 grow overflow-y-auto">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <div>
                  <Label htmlFor="email" className="text-sm text-title">
                    Filter 1
                  </Label>
                  <Select name="gender">
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Option1</SelectItem>
                      <SelectItem value="Femnale">Option2</SelectItem>
                      <SelectItem value="Other">Option3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="px-5 py-2 border-t">
          <button
            type="button"
            className="px-5 py-1.5  float-right text-base font-medium rounded text-white bg-blue-700 hover:bg-indigo-500 transition-colors duration-200"
          >
            Save
          </button>
          <button
            type="button"
            onClick={setFlag.off}
            className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
