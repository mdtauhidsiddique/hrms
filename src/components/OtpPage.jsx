import React from "react";
import { useNavigate } from "react-router-dom";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpPage = () => {
  const navigate = useNavigate();

  const handleOtp = () => {
    navigate("/dashboard");
  };

  return (
    //     <div classNameName="flex items-center justify-center min-h-screen bg-gray-100">
    //       <div classNameName="w-full max-w-md">
    //         <form classNameName="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //           <div classNameName="mb-4">
    //             <label
    //               classNameName="block text-gray-700 text-sm font-bold mb-2"
    //               htmlFor="otp"
    //             >
    //               OTP
    //             </label>
    //             {/* <input classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp" type="text" placeholder="Enter OTP" /> */}
    //             <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
    //               <InputOTPGroup>
    //                 <InputOTPSlot index={0} />
    //                 <InputOTPSlot index={1} />
    //                 <InputOTPSlot index={2} />
    //                 <InputOTPSlot index={3} />
    //                 <InputOTPSlot index={4} />
    //                 <InputOTPSlot index={5} />
    //               </InputOTPGroup>
    //             </InputOTP>
    //           </div>
    //           <div classNameName="flex items-center justify-between">
    //             <button
    //               onClick={handleOtp}
    //               classNameName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //               type="button"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    <div className="otpPage relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email ba**@dipainhouse.com</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleOtp}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-center mx-auto w-full ">
                  <InputOTP 
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  >
                    <InputOTPGroup className="space-x-3">
                      <InputOTPSlot className="w-12 h-12 border-2"  index={0} />
                      <InputOTPSlot className="w-12 h-12 border-2"  index={1} />
                      <InputOTPSlot className="w-12 h-12 border-2"  index={2} />
                      <InputOTPSlot className="w-12 h-12 border-2"  index={3} />
                      
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-blue-900 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
