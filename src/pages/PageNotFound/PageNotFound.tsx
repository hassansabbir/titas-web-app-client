import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-10 h-screen items-center justify-center">
        <h1 className="uppercase text-center text-4xl font-bold text-red-600">
          The page you are trying to reach does not exist. <br /> Please try
          again.
        </h1>
        <Button
          className="px-10 py-5"
          onClick={() => {
            navigate(-1);
          }}
          type="primary"
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

export default PageNotFound;
