import React from "react";

export const Footer = () => {
  // fixed bottom-0
  return (
    <div className="w-[100vw] bg-[#f8f8f8] rounded-lg mt-10 ">
      <div className="max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
          <span className="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-blue-800">
            MAVEN
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline me-4 md:me-6">
                terms
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="/refund" className="ml-1 hover:underline">
            Maven
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
