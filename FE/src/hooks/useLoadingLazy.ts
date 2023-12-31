import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLoadingLazy = <T>(
    pageNum = 1,
    fetchDataFunction: any,
    isHideBlog?: boolean,
    isBookmark?: boolean,
    unBookmark?: boolean
) => {
    const [result, setResult] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.login);
    const axiosJWT = createAxios(user, dispatch, loginSuccess);
    const accessToken = user?.data.token;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const isFollowing = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        const fetchData = async () => {
            setTimeout(async () => {
                const { body } = await fetchDataFunction(
                    pageNum,
                    accessToken,
                    axiosJWT
                );

                if (body?.success) {
                    if (body.result) {
                        if (pageNum === 1) {
                            setResult(body.result);
                        } else {
                            setResult((prev: T[]) => [...prev, ...body.result]);
                        }
                        setIsLoading(false);
                        setHasNextPage(Boolean(body?.result.length));
                    } else {
                        setIsLoading(false);
                        setHasNextPage(false);
                    }
                } else {
                    console.log(body?.message);
                    setIsLoading(false);
                }
            }, 1000);
        };
        fetchData();
    }, [pageNum, isHideBlog, isBookmark, unBookmark]); // Include isHide in the dependency array

    return { isLoading, result, isError, hasNextPage };
};

export default useLoadingLazy;
