import React from 'react'
import { BsEye, BsEyeSlash } from "react-icons/Bs";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle as GoogleLogo } from "react-icons/Fc";
import { useAuth } from '../contexts/AuthContext';
import SpinnerSvg from './SpinnerSvg';


function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState();
  const [loading, setloading] = useState(false);
  const [password, setPassword] = useState();
  const { REGISTER } = useAuth();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setError('')
      setloading(true)
      await REGISTER(email, password);
      navigate('/writeAI');

    } catch (error) {

      if (error.message === "Firebase: Error (auth/email-already-in-use).") {//check on the exact firebase error message and correct
        setError("Email already exists, login instead");//confirm if this or statement is correct
        setloading(false);
        return;
      } else {
         setError('something went wrong. please try again')
      }
    } finally {
      setloading(false);
    }

  }

  return (
    <div className="min-h-screen  flex flex-col justify-center sm:py-12">
      {loading &&(<SpinnerSvg/>)}
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
           <h1 className="font-bold text-center text-2xl mb-5">Create your account</h1> 
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-2 py-7">
              <form onSubmit={handleRegister}>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={e => (setEmail(e.target.value))}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />

                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={e => (setPassword(e.target.value))}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                  type="submit"
                  className="transition duration-200  bg-[#10a37f] hover:bg-[#078d6c] focus:shadow-md text-white font-semibold rounded-lg px-6 py-3 block w-full text-center"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="py-5">
              <div className="flex justify-center">
                <Link to={'/login'}  className="text-blue-500 hover:text-blue-600 text-sm font-semibold">Already have an account? Login</Link>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-center">
                <button className="flex items-center transition duration-200 bg-white hover:bg-gray-100 focus:bg-gray-200 border border-gray-300 rounded-lg font-semibold px-4 py-2">
                  <GoogleLogo className="w-5 h-5 mr-2" />
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
     

    </div>
  )
}

export default Register