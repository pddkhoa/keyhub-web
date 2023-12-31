import CategoryType from "@/types/categories";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ClientServices from "@/services/client/client";
import User from "@/types/user";
import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import { ModalListUser } from "../Modal/modalUser";
import useAuth from "@/hooks/useAuth";
import { Loading } from "../Loading/loading";

interface CardCategoriesProps {
    data: CategoryType;
}

export const CardCategories: React.FC<CardCategoriesProps> = ({ data }) => {
    const { axiosJWT, accessToken } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [userFollowing, setUserFollowing] = useState<User[]>([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayCreate, setDisplayCreate] = useBoolean(false);
    const [following, setFollowing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { body } = await ClientServices.getUserFollowByCategories(
                    data.id,
                    accessToken,
                    axiosJWT
                );

                if (body?.success) {
                    setIsLoading(false);

                    setUserFollowing(body.result);
                    console.log(body.message);
                } else {
                    setIsLoading(false);

                    console.error(body?.message);
                }
            } catch (error) {
                setIsLoading(false);

                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Gọi hàm fetchData khi 'following' thay đổi
    }, [following]);

    const firstThreeUsers = userFollowing.slice(0, 3);
    const userFollowingLength = userFollowing.length - 3;

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-md rounded-sm  shadow-md bg-gray-900 text-gray-100 dark:bg-white/90 dark:text-black">
            <img
                src={data.avatar.toString()}
                alt=""
                className="object-cover object-center w-full h-60 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-5">
                <div className="space-y-2 h-15">
                    <div
                        onClick={() => {
                            setDisplayCreate.on(), setDisplayModal(true);
                        }}
                        className="flex  w-2/5 border h-12 rounded-lg hover:brightness-150  p-1.5   -space-x-1.5 cursor-pointer"
                    >
                        {userFollowing && firstThreeUsers.length > 0
                            ? firstThreeUsers.map((item) => (
                                  <img
                                      key={item.id}
                                      alt=""
                                      className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700"
                                      src={item.avatar?.toString()}
                                  />
                              ))
                            : null}

                        {userFollowingLength > 0 ? (
                            <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full dark:bg-gray-900 text-gray-100 border-gray-700">
                                {" "}
                                +{userFollowingLength}
                            </span>
                        ) : null}
                    </div>
                    <p className="text-xl font-semibold tracki">{data.name}</p>
                </div>
                <Link to={`/categories/${data.id}`} className="w-full">
                    <Button
                        type="button"
                        variant={"gradient"}
                        className="rounded-sm w-full"
                    >
                        Read more
                    </Button>
                </Link>
            </div>

            <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
                {displayModal ? (
                    <ModalListUser
                        setFlag={setDisplayCreate}
                        data={userFollowing}
                        setFollowing={setFollowing}
                    />
                ) : null}
            </Modal>
        </div>
    );
};
