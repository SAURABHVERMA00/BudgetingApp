import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const Error = () => {
  const navigate=useNavigate();
  return (
    <div className="error">
      <h1>Uh oh ! We have got a problem . </h1>
      <p>There was problem creating your account.</p>
      <div className="flex-md  flex justify-center items-center">
        <div className="flex justify-center items-center">
        <button className="btn btn--dark" onClick={()=> navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go back</span>
        </button>
        </div>
        <div>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} className="text-white" />
          <span className="text-white">Go home</span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
