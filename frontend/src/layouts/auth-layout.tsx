import { Outlet } from "react-router-dom";
import loginBg from "../assets/login-section-background.png";

export default function AuthLayout() {
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

            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <h5>This is Footer</h5>
      </div>
    </>
  );
}
