import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <div className="">
                <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-1000">
                    Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <span className="text-gray-500 sm:text-sm"></span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="block rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="example@gmail.com"
                    />
                </div>
            </div>
            
            <div className="mt-4">
                <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-1000">
                    Password
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <span className="text-gray-500 sm:text-sm"></span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="********"
                    />
                </div>
            </div>
        </div>
    );
}
