import { Input } from "../ui/input";
import { Label } from "../ui/label";
import User from "@/types/user";

interface EditAccountProps {
    data: User;
}

export const EditAccount: React.FC<EditAccountProps> = ({ data }) => {
    return (
        <div>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2 py-4">
                    <div className="relative px-2">
                        <Label
                            htmlFor="email"
                            className="text-md text-title-foreground"
                        >
                            Email
                        </Label>
                        <Input
                            className="w-full text-sm px-4 py-3  rounded-lg"
                            value={data?.email}
                            disabled
                        />
                    </div>
                    <div className="relative px-2">
                        <Label
                            htmlFor="email"
                            className="text-md text-title-foreground"
                        >
                            Username
                        </Label>
                        <Input
                            className="w-full text-sm px-4 py-3  rounded-lg"
                            value={data?.username}
                            disabled
                        />
                    </div>
                </div>
            </div>
            {/* <div className="px-5 py-2 border-t flex justify-end items-center gap-2">
        <button
          type="button"
          className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
        >
          Close
        </button>
        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            type="submit"
            // disabled={formik.isSubmitting || !formik.isValid}
          >
            Save
          </Button>
        )}
      </div> */}
        </div>
    );
};
