import { Link } from "react-router-dom";

function FormLink({ children, to }) {
  return (
    <div className=" flex items-center justify-center font-[14px] gap-1">
      <p>Already signed up? </p>
      <Link className=" text-blue-500" to={to}>
        {children}
      </Link>
    </div>
  );
}

export default FormLink;