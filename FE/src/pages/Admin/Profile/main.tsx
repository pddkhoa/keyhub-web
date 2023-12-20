import { Label } from "@/components/ui/label";
import { useLocation, useParams } from "react-router-dom";
import { SettingUser } from "./accountDetail";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const MainProfile = () => {
    const location = useLocation();

    const user = useSelector((state: RootState) => state?.user?.user);

    const { id } = useParams();
    // Access the state passed through navigation
    const index = location.state?.indexPage;

    const { isLoading, sendRequest } = useFetch();

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.GET_USER_ID, slug: id });
    }, [id]);

    return (
        <div className="container pl-24 h-full ">
            <div className="bg-gray-800 rounded-md h-fit mt-20 shadow-2xl ">
                <div className="flex flex-col p-6 py-4 gap-8">
                    <Label className="text-white text-2xl font-bold">
                        Account Detail
                    </Label>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : user ? (
                    <SettingUser data={user} index={index} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default MainProfile;
