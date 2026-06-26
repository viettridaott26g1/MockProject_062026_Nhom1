import { useState, type FormEvent } from "react";
import { login } from "../services/auth-service";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email: email, password: password });
  }

  return (
    <>
      <div
        id="form-section"
        className=" bg-[rgb(255,255,255)] text-[#1a2261] font-bold p-[36px] w-[660px]  rounded-[26px] shadow-2xl"
      >
        <div id="form" className="">
          <form action="" method="get" onClick={handleSubmit}>
            <div></div>
            <div className="select-none">Email</div>
            <div className="h-[46px] mt-[10px]">
              <input
                type="email"
                placeholder="Enter your Email"
                required
                minLength={11}
                maxLength={255}
                className="bg-gray-100 font-semibold w-full h-full pl-[12px] rounded-[6px] "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-[12px] select-none">Password</div>
            <div className="h-[46px] mt-[10px]">
              <input
                type="password"
                placeholder="Enter your Password"
                required
                minLength={5}
                maxLength={255}
                className="bg-gray-100 font-semibold w-full h-full pl-[12px] rounded-[6px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-[12px] h-[46px] text-white">
              <input
                type="submit"
                value="Login"
                className="w-full h-full rounded-3xl cursor-pointer
                                bg-[#4452d6]
                                hover:scale-95
                                hover:bg-[#222faa]
                                active:scale-90
                                active:bg-[#26275f]
                                transition-all
                                duration-150
                                ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
