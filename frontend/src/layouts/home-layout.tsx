import type { FormEvent } from "react";
import loginBg from "../assets/login-section-background.png";

export default function HomeLayout() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("dslkajfl;sdjfk");
  }
  return (
    <>
      <div>
        <h5>This is Header</h5>
      </div>
      <div id="login-section" className="box-border w-full ">
        <div
          className="w-full h-screen bg-center bg-cover"
          style={{
            backgroundImage: `url(${loginBg})`,
          }}
        >
          <div className="  h-full flex flex-row flex-wrap justify-evenly items-center">
            <div
              id="text-title"
              className=" w-[660px] h-[760px] flex items-end"
            >
              <div className=" bottom-0 m-[36px] bg-transparent text-white bg-gradient-to-l from-black/60 to-transparent">
                <div className="mb-[12px] w-full h-[46px]">
                  <button
                    className="
    border-2 border-solid rounded-4xl
    h-full w-[86px] text-[20px]
    hover:cursor-pointer
    hover:scale-125
    transition-all
    duration-300
  "
                    onClick={() => {
                      console.log("Quote");
                    }}
                  >
                    <p className="select-none"></p>Quote
                  </button>
                </div>
                <div className="text-[76px] leading-[80px] font-bold mb-[12px] select-none">
                  Let's Find The Right Care Together
                </div>
                <div className="text-[18px] select-none">
                  Share your needs with us, and we'll provide a tailored care
                  plan.
                </div>
              </div>
            </div>
            <div
              id="form-section"
              className=" bg-[rgb(255,255,255)] text-[#1a2261] font-bold p-[36px] w-[660px]  rounded-[26px] shadow-2xl"
            >
              <div id="form" className="">
                <form action="" method="get" onSubmit={handleSubmit}>
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
          </div>
        </div>
      </div>
      <div>
        <h5>This is Footer</h5>
      </div>
    </>
  );
}
