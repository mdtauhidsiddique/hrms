import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/otp');
  };

  return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
//           </div>
//           <div className="flex items-center justify-between">
//             <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

<div>
    <div>
    <section className="login  text-gray-600 body-font">
      <div class="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-bold text-4xl sm:text-6xl lg:text-7xl  text-blue-900 text-center md:text-left ">Venture Consultancy Services</h1>
          <p class="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-left ">VCS share the portal for HR Manegement.</p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div class="relative mb-4">
            <input type="text"  name="email"  placeholder="Email address or phone number" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <input type="email"  name="password" placeholder="Password" class="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-900 " onClick={handleLogin} >Log In</button>
          <p class="text-sm text-blue-500 py-5 text-center">Forgotten password?</p>
          <hr className="my-5" />
          <button class="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 " >Create New Account</button>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-3 md:mt-0">
        <p class="text-sm text-gray-700 mt-3 text-center"><b>Create a Page</b> for a celebrity, band or business</p>
    
        </div>
    
      </div>
    </section>
       </div>
    
    
    <div class="container mx-auto px-6">
            <div class="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-blue-700 font-bold mb-2">
                      Responsive Facebook Login clone © 2021 Created by Sanu K Joseph
                    </p>
                </div>
            </div>
        </div>
    
    </div>
  );
};

export default LoginPage;
