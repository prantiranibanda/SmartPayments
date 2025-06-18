'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Login() {
  const [hidepassword, setHidepassword] = useState(true);

  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', user);
      if (response.data.success) {
				const fetchedUser = response.data.user;
        // Store user in localStorage
        if (typeof window !== 'undefined' && fetchedUser) {
          localStorage.setItem('fetchedUser', JSON.stringify(fetchedUser));
        }
        toast.success(response.data.mssg);
        router.prefetch('/home');
        router.push('/home');
        setTimeout(() => {
          router.push('/home');
        }, 10);
      } else {
        toast.error(response.data.mssg);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUser({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4.5rem)] bg-emerald-50">
      <div className="md:w-2/8 bg-white p-10 rounded border border-emerald-300 shadow-lg space-y-5">
        <div className="font-bold border-b border-black pb-3 text-center text-emerald-300 text-2xl">
          Login
        </div>
        <div className=" space-y-4 text-lg font-light">
          <div className="space-y-1.5">
            <div>Email :</div>
            <input
              type="email"
              placeholder="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="w-full rounded-[0.2rem] border border-gray-300 bg-white/10 px-3 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <div>Password :</div>
            <div className="flex h-full items-center justify-center">
              <input
                type={hidepassword ? 'password' : 'text'}
                placeholder="password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                className="w-full rounded-l-[0.2rem] border-l border-t border-b border-gray-300 bg-white/10 px-3 py-2 text-sm focus:outline-none"
              />
              <div className="cursor-pointer rounded-r-[0.2rem] border-r border-t border-b border-gray-300 bg-white/10 px-3 py-2">
                {hidepassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-zinc-400"
                    onClick={() => setHidepassword(!hidepassword)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-zinc-400"
                    onClick={() => setHidepassword(!hidepassword)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onLogin}
          className="py-2 rounded font-bold text-white flex justify-center items-center bg-emerald-300 w-full hover:bg-emerald-400 transition-colors"
        >
          Login
        </button>
        <div className="text-sm font-light">
          Don&#39;t have an account?{' '}
          <Link
            className="underline underline-offset-2 text-blue-400"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
