import { createAxios } from "@/api/createInstance";
import { CardCategories } from "@/components/Card/cardCategories";
import { Nodata } from "@/components/ui/nodata";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import CategoryType from "@/types/categories";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Categories = () => {
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { body } = await ClientServices.getCategories(
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setCategories(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="container  min-h-0 mx-auto w-10/12 py-20">
      <div className="mb-4">
        <div className="flex relative flex-col rounded-xl items-center p-6 pb-10 mb-16 text-center bg-center bg-cover bg-gradient-to-tr from-[rgb(7,16,45)] to-[rgb(58,60,84)]">
          <div className="flex relative z-1 flex-col items-center">
            <div className="p-1.5 rounded-full bg-hover brightness-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                className="w-12 h-12 "
                id="book"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="2"
                    x2="12"
                    y1="12"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#16b0e2"></stop>
                    <stop offset="1" stop-color="#6e5af0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="12"
                    x2="22"
                    y1="12.005"
                    y2="12.005"
                    xlinkHref="#a"
                  ></linearGradient>
                  <linearGradient
                    id="c"
                    x1="4.75"
                    x2="8.5"
                    y1="8.496"
                    y2="8.496"
                    xlinkHref="#a"
                  ></linearGradient>
                  <linearGradient
                    id="d"
                    x1="4.75"
                    x2="9.25"
                    y1="11.496"
                    y2="11.496"
                    xlinkHref="#a"
                  ></linearGradient>
                </defs>
                <g data-name="1">
                  <path
                    fill="url(#a)"
                    d="M12,5.3v16.03a1.009,1.009,0,0,1-.49-.11l-.04-.02a25.693,25.693,0,0,0-7.44-2.44l-.29-.04A2.055,2.055,0,0,1,2,16.744V4.664a1.967,1.967,0,0,1,2.16-1.99,18.757,18.757,0,0,1,7.06,2.34l.25.15A1.048,1.048,0,0,0,12,5.3Z"
                    opacity=".4"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M22,4.674v12.07a2.055,2.055,0,0,1-1.74,1.98l-.33.04a25.461,25.461,0,0,0-7.46,2.46.885.885,0,0,1-.47.11V5.3a1.048,1.048,0,0,0,.53-.14l.17-.11a18.851,18.851,0,0,1,7.07-2.37h.06A1.97,1.97,0,0,1,22,4.674Z"
                  ></path>
                  <path
                    fill="url(#c)"
                    d="M7.75,9.246H5.5a.75.75,0,0,1,0-1.5H7.75a.75.75,0,1,1,0,1.5Z"
                  ></path>
                  <path
                    fill="url(#d)"
                    d="M8.5,12.246h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <span className="text-2xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-100">
                The security first platform
              </span>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 ">
                Simplify your security with authentication services
              </span>
            </div>
          </div>
          <div className="absolute right-0  bottom-0 left-0  z-0  bg-gradient-to-b w-12 to-transparent  from-gray-900 via-gray-900 filter blur-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {categories && categories.length > 0 ? (
          categories.map((item) => <CardCategories key={item.id} data={item} />)
        ) : (
          <div className="col-span-3">
            <Nodata />
          </div>
        )}
      </div>
    </div>
  );
};
