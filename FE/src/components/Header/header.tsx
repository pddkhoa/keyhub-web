import { Link } from "react-router-dom";
import { SearchBar } from "../Search/search";
import { RootStateToken } from "../../types/token";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);

  return (
    <>
      <nav className="bg-white  mx-auto">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="w-1/3 ml-12">
            <SearchBar />
          </div>
          <div className="flex flex-col md:flex-row md:block -mx-2">
            {!data.token ? (
              <>
                <Link
                  to={"/register"}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Register
                </Link>
                <Link
                  to={"/login"}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Login
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
