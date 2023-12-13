import { Switch } from "../ui/switch";

export const EditPrivacy = () => {
  return (
    <div>
      <div className="flex flex-auto w-full  gap-8 px-12">
        <div className="text-gray-400 mt-2 w-1/4">Notify me when</div>
        <div className="flex flex-col gap-8 py-4 w-full">
          <div className="items-top flex justify-between items-center space-x-2 w-full">
            {/* <Checkbox id="terms1" /> */}
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            <Switch />
          </div>
          <div className="items-top flex justify-between items-center space-x-2 w-full">
            {/* <Checkbox id="terms1" /> */}
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            <Switch />
          </div>{" "}
          <div className="items-top flex justify-between items-center space-x-2 w-full">
            {/* <Checkbox id="terms1" /> */}
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};
