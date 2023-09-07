import { useState, useEffect } from "react";
import User from "../../types/user";
import api from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";
import { IconButton } from "../../components/Button/button";

const Home = () => {
  const refresh = useRefreshToken();
  const [user, setUser] = useState<User[]>();
  const { auth } = useAuth();

  useEffect(() => {
    // console.log(auth.refreshToken);
  }, [auth]);

  return (
    <>
      <div className="w-full">
        <div className="flex bg-white" style={{ height: 600 }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Build Your New <span className="text-indigo-600">Idea</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <IconButton>
                <span onClick={() => refresh()}>RefreshToken</span>
              </IconButton>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
              }}
            >
              <div className="h-full bg-black opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
