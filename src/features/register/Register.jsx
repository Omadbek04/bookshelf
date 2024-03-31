import { useState } from "react";
import { bookBg } from "../../assets";
import Button from "../../ui/FormButton";
import FormLink from "../../ui/FormLink";
import BookBackgroungImage from "../../ui/BookBackgroungImage";

function Register() {
  const [name, setName] = useState("");
  const [pvd, setPvd] = useState("");
  const [pvd2, setPvd2] = useState("");
  const [email, setEmail] = useState("");
  const navigate= useNavigate()

  const reset = () => {
    setName("");
    setEmail("");
    setPvd("");
    setPvd2("");
  };

  const handlerUser = (e) => {
    e.preventDefault();
    if (pvd2 != pvd) {
      alert("Tasdiqlash parolingiz xato");
    }
    reset();
  };
  
  return (
    <BookBackgroungImage>
      <form className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-form-bg py-[48px] px-[28px] rounded-[12px] w-[430px] flex flex-col gap-[12px]">
        <h2 className=" text-[36px] font-semibold text-center mb-9">Sign up</h2>
        <label className=" flex flex-col gap-1">
          <span className=" text-[14px] font-medium">Username</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="outline-none focus:outline-none border border-inputBorder  shadow-inputShadow
                   py-2 pl-3 w-full rounded-md"
          />
        </label>
        <label className=" flex flex-col gap-1">
          <span className=" text-[14px] font-medium">Email</span>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="outline-none focus:outline-none border border-inputBorder  shadow-inputShadow
                   py-2 pl-3 w-full rounded-md"
          />
        </label>
        <label className=" flex flex-col gap-1 focus:text-red-500">
          <span className={`text-[14px] font-medium `}>Password</span>
          <input
            required
            type="password"
            value={pvd}
            onChange={(e) => setPvd(e.target.value)}
            placeholder="Enter your password"
            className={`
      outline-none focus:outline-none border  rounded-md py-2 pl-3 w-full  shadow-inputShadow 
      ${pvd.length >= 8 ? "border-inputBorder" : "focus:border-red-500"} 
      `}
          />
        </label>
        <label className=" flex flex-col gap-1 focus:text-red-500">
          <span className={`text-[14px] font-medium `}>Confirm password</span>
          <input
            required
            type="password"
            value={pvd2}
            onChange={(e) => setPvd2(e.target.value)}
            placeholder="Enter your confirm password"
            className={`
    outline-none focus:outline-none border  rounded-md py-2 pl-3 w-full  shadow-inputShadow 
    ${pvd2 != pvd ? "border-inputBorder" : "focus:border-red-500"} 
    `}
          />
        </label>
        <Button onClick={handlerUser}>Submit</Button>
        <FormLink to={"/login"}> Go to sign up.</FormLink>
      </form>
    </BookBackgroungImage>
  );
}

export default Register;
