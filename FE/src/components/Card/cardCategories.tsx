import CategoryType from "@/types/categories";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClientServices from "@/services/client/client";
import { el } from "date-fns/locale";
import { showToast } from "@/hooks/useToast";

interface CardCategoriesProps {
  data: CategoryType;
}

export const CardCategories: React.FC<CardCategoriesProps> = ({ data }) => {
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
  const [loading, setLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(data.checkFollowCategory);

  const handleFollow = async (id: number) => {
    if (!isFollowing) {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        showToast(body?.message, "success");
        setIsFollowing(true);
      } else {
        console.log(body?.message);

        showToast("error", "error");
      }
    } else {
      // Nếu đã follow, thực hiện unfollow (tương tự)
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        showToast(body?.message, "success");
        setIsFollowing(false);
      } else {
        console.log(body?.message);
        showToast("error", "error");
      }
    }
  };

  useEffect(() => {
    console.log(data);
  }, [isFollowing]);

  return (
    <article className="overflow-hidden relative h-full flex flex-col p-0.5  rounded-2xl  bg-gradient-to-r from-blue-500 via-violet-500 to-purple-900 shadow-2">
      <div className="h-24 rounded-2xl bg-card">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src={data.banner}
          alt="Banner image for source"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 -mt-7 bg-card rounded-2xl ">
        <div className="flex justify-between rounded-2xl items-end mb-3">
          <img
            className="-mt-14 w-24 h-24 rounded-full z-10 object-cover"
            src={data.avatar}
          />
          <button
            type="button"
            className="flex flex-row-reverse items-center p-1 pl-3 hover:bg-theme-hover active:bg-theme-active rounded-xl border border-theme-divider-secondary"
            aria-label="Members list"
          >
            <span
              className="mr-1 ml-2 min-w-[1rem] text-title-foreground"
              aria-label="squad-members-count"
            >
              {data.sumUser}
            </span>
            <div className="object-cover w-8 h-8 rounded-xl -ml-2 relative overflow-hidden">
              <svg
                className=" w-full h-full rounded-full bg-gray-100 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex flex-col flex-1 justify-between ">
          <div className="flex-auto mb-5">
            <a href="https://app.daily.dev/squads/projectboard">
              <div className="font-bold text-title">{data.name}</div>
              <div className="text-title-foreground lowercase">
                @{data.name}
              </div>
            </a>
            <div className="mt-1 line-clamp-5 text-title-foreground multi-truncate">
              {data.description}
            </div>
          </div>
          <div
            className="flex justify-between"
            aria-label="You are not allowed to join the Squad"
          >
            <Link to={`/categories/${data.id}`} state={{ data: data }}>
              <Button>Join Squad</Button>
            </Link>
            {isFollowing ? (
              <Button onClick={() => handleFollow(data.id)}>UnFollow</Button>
            ) : (
              <>
                <Button onClick={() => handleFollow(data.id)}>Follow</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
