import { Loading } from "@/components/Loading/loading";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

interface FormEvaluteProps {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: any;
  setEvalute?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEvaluteBlog: React.FC<FormEvaluteProps> = ({
  setFlag,
  data,
  setEvalute,
}) => {
  const { isLoading, sendRequest } = useFetch();

  const handleEvalute = async (report: any) => {
    setEvalute(false);

    try {
      // Assuming sendRequest returns a promise
      const response = await sendRequest({
        type: REQUEST_TYPE.ADMIN_EVALUTE_BLOG,
        slug: report.report_id,
        data: report,
      });

      setEvalute(true);
    } catch (error) {
      setEvalute(false);

      // Handle any errors that occurred during the request
      console.error("Error:", error);
    }
    setFlag.off();
  };

  return (
    <div className="relative">
      <div className="flex flex-col max-w-xl  gap-2 p-6 rounded-md shadow-md bg-gray-800 text-gray-100">
        <div className="flex justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current shrink-0 text-violet-400"
            >
              <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
              <rect width="32" height="136" x="240" y="112"></rect>
              <rect width="32" height="32" x="240" y="280"></rect>
            </svg>
            Necessitatibus dolores quasi quae?
          </h2>
          <div>
            <svg
              onClick={() => {
                setFlag.off();
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 hover:bg-gray-900 p-0.5 rounded-md cursor-pointer"
            >
              <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
          </div>
        </div>
        <p className="flex-1 text-gray-400">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
        <div className="flex flex-col justify-between gap-3 mt-6 sm:flex-row">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <button
                onClick={() => {
                  handleEvalute({
                    report_id: data?.id,
                    value: false,
                  });
                }}
                disabled={isLoading ? true : false}
                className="px-6 py-2 rounded-sm shadow-sm bg-red-500 hover:brightness-150 text-white "
              >
                Reject
              </button>
              <button
                onClick={() => {
                  handleEvalute({ report_id: data?.id, value: true });
                }}
                disabled={isLoading ? true : false}
                className="px-6 py-2 rounded-sm shadow-sm bg-violet-400 hover:brightness-150 text-gray-900"
              >
                Accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
