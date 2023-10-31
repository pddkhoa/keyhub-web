import CategoryType from "@/types/categories";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserAvatar } from "../Avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClientServices from "@/services/client/client";
import User from "@/types/user";
import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import { ModalListUser } from "../Modal/modalUser";

interface CardCategoriesProps {
  data: CategoryType;
}

export const CardCategories: React.FC<CardCategoriesProps> = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
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

  return (
    <div className="card  text-gray-300 w-96 hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 rounded-2xl overflow-hidden relative">
      <div className="px-8 py-6 flex flex-col text-left gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="h-16 w-16 round-full">
            <UserAvatar size={65} data={data.avatar} />
          </div>
          <div
            onClick={() => {
              setDisplayCreate.on(), setDisplayModal(true);
            }}
            className="p-1 w-1/3  border h-fit rounded-lg hover:brightness-150"
          >
            <div className="flex -space-x-3">
              {userFollowing && firstThreeUsers.length > 0
                ? firstThreeUsers.map((item) => (
                    <img
                      key={item.id}
                      className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700 opacity-90"
                      src={item.avatar}
                    />
                  ))
                : null}

              {userFollowingLength > 0 ? (
                <span className="flex items-center justify-center w-8 h-8  font-semibold border-2 border-border brightness-200 rounded-full dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                  +{userFollowingLength}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="uppercase font-bold text-xl">{data.name}</div>
        <div className="text-gray-300 uppercase tracking-widest h-12">
          {data.description}
        </div>
        <div className="flex justify-end w-full">
          <Link
            to={`/categories/${data.id}`}
            state={{ data: data }}
            className="w-full"
          >
            <Button className="inline-flex w-full justify-center items-center whitespace-nowrap rounded-lg bg-transparent hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150">
              <svg
                className="fill-slate-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={14}
              >
                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
              </svg>
              Join Squad
            </Button>
          </Link>
        </div>
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
      <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
    </div>
  );
};
