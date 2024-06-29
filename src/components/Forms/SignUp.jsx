import React, { useEffect, useState } from 'react';
import { signUp, isUserValid } from '../../../lib/pocket';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dname, setDname] = useState('');
  const [fssai, setFssai] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z]).{8,25}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFssai = (fssai) => {
    const fssaiRegex = /^\d{14}$/;
    return fssaiRegex.test(fssai);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address.');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage('Password must be 8-25 characters long and include at least one uppercase letter.');
      return;
    }
    if (!validateFssai(fssai)) {
      setErrorMessage('FSSAI number must be 14 digits long.');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMessage('Phone number must be 10 digits long.');
      return;
    }
    try {
      await signUp(username, email, password, dname, fssai, location,phone);
      history('/login');
    } catch (error) {
      console.error("Signup failed:", error);
      setErrorMessage("Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    if (isUserValid) {
      history('/');
    }
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-10 mb-20 md:m-0 px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500 sm:hidden">
          Already a member?{' '}
          <a onClick={() => { history('/login') }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login to your account
          </a>
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignup} className="space-y-6" action="#" method="POST">
            {errorMessage && (
              <div className="text-red-500 text-sm">
                {errorMessage}
              </div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setUsername(e.target.value); }}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setEmail(e.target.value); }}
                  id="floating_email"
                  name="floating_email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setPassword(e.target.value); }}
                  id="floating_password"
                  name="floating_password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_first_name" className="block text-sm font-medium leading-6 text-gray-900">
                Dairy Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setDname(e.target.value); }}
                  id="floating_first_name"
                  name="floating_first_name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_fssai" className="block text-sm font-medium leading-6 text-gray-900">
                FSSAI
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setFssai(e.target.value); }}
                  id="floating_fssai"
                  name="floating_fssai"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setPhone(e.target.value); }}
                  id="floating_phone"
                  name="floating_phone"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="floating_company" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => { setLocation(e.target.value); }}
                  id="floating_company"
                  name="floating_company"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500 hidden sm:block">
            Already a member?{' '}
            <a onClick={() => { history('/login') }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login to your account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
