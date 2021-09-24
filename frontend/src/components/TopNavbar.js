import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const TopNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 mb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center w-full">
              {/* Logo */}
              <NavLink to="/" className="flex-shrink-0">
                <svg
                  width="198"
                  height="43"
                  viewBox="0 0 198 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M86.7 32H81.57L72.99 19.01V32H67.86V10.94H72.99L81.57 23.99V10.94H86.7V32ZM106.199 23.36C106.199 23.84 106.169 24.34 106.109 24.86H94.4986C94.5786 25.9 94.9086 26.7 95.4886 27.26C96.0886 27.8 96.8186 28.07 97.6786 28.07C98.9586 28.07 99.8486 27.53 100.349 26.45H105.809C105.529 27.55 105.019 28.54 104.279 29.42C103.559 30.3 102.649 30.99 101.549 31.49C100.449 31.99 99.2186 32.24 97.8586 32.24C96.2186 32.24 94.7586 31.89 93.4786 31.19C92.1986 30.49 91.1986 29.49 90.4786 28.19C89.7586 26.89 89.3986 25.37 89.3986 23.63C89.3986 21.89 89.7486 20.37 90.4486 19.07C91.1686 17.77 92.1686 16.77 93.4486 16.07C94.7286 15.37 96.1986 15.02 97.8586 15.02C99.4786 15.02 100.919 15.36 102.179 16.04C103.439 16.72 104.419 17.69 105.119 18.95C105.839 20.21 106.199 21.68 106.199 23.36ZM100.949 22.01C100.949 21.13 100.649 20.43 100.049 19.91C99.4486 19.39 98.6986 19.13 97.7986 19.13C96.9386 19.13 96.2086 19.38 95.6086 19.88C95.0286 20.38 94.6686 21.09 94.5286 22.01H100.949ZM114.035 17.63C114.535 16.85 115.225 16.22 116.105 15.74C116.985 15.26 118.015 15.02 119.195 15.02C120.575 15.02 121.825 15.37 122.945 16.07C124.065 16.77 124.945 17.77 125.585 19.07C126.245 20.37 126.575 21.88 126.575 23.6C126.575 25.32 126.245 26.84 125.585 28.16C124.945 29.46 124.065 30.47 122.945 31.19C121.825 31.89 120.575 32.24 119.195 32.24C118.035 32.24 117.005 32 116.105 31.52C115.225 31.04 114.535 30.42 114.035 29.66V39.98H108.905V15.26H114.035V17.63ZM121.355 23.6C121.355 22.32 120.995 21.32 120.275 20.6C119.575 19.86 118.705 19.49 117.665 19.49C116.645 19.49 115.775 19.86 115.055 20.6C114.355 21.34 114.005 22.35 114.005 23.63C114.005 24.91 114.355 25.92 115.055 26.66C115.775 27.4 116.645 27.77 117.665 27.77C118.685 27.77 119.555 27.4 120.275 26.66C120.995 25.9 121.355 24.88 121.355 23.6ZM138.596 27.65V32H135.986C134.126 32 132.676 31.55 131.636 30.65C130.596 29.73 130.076 28.24 130.076 26.18V19.52H128.036V15.26H130.076V11.18H135.206V15.26H138.566V19.52H135.206V26.24C135.206 26.74 135.326 27.1 135.566 27.32C135.806 27.54 136.206 27.65 136.766 27.65H138.596ZM157.984 15.26V32H152.854V29.72C152.334 30.46 151.624 31.06 150.724 31.52C149.844 31.96 148.864 32.18 147.784 32.18C146.504 32.18 145.374 31.9 144.394 31.34C143.414 30.76 142.654 29.93 142.114 28.85C141.574 27.77 141.304 26.5 141.304 25.04V15.26H146.404V24.35C146.404 25.47 146.694 26.34 147.274 26.96C147.854 27.58 148.634 27.89 149.614 27.89C150.614 27.89 151.404 27.58 151.984 26.96C152.564 26.34 152.854 25.47 152.854 24.35V15.26H157.984ZM171.869 15.08C173.829 15.08 175.389 15.72 176.549 17C177.729 18.26 178.319 20 178.319 22.22V32H173.219V22.91C173.219 21.79 172.929 20.92 172.349 20.3C171.769 19.68 170.989 19.37 170.009 19.37C169.029 19.37 168.249 19.68 167.669 20.3C167.089 20.92 166.799 21.79 166.799 22.91V32H161.669V15.26H166.799V17.48C167.319 16.74 168.019 16.16 168.899 15.74C169.779 15.3 170.769 15.08 171.869 15.08ZM197.663 23.36C197.663 23.84 197.633 24.34 197.573 24.86H185.963C186.043 25.9 186.373 26.7 186.953 27.26C187.553 27.8 188.283 28.07 189.143 28.07C190.423 28.07 191.313 27.53 191.813 26.45H197.273C196.993 27.55 196.483 28.54 195.743 29.42C195.023 30.3 194.113 30.99 193.013 31.49C191.913 31.99 190.683 32.24 189.323 32.24C187.683 32.24 186.223 31.89 184.943 31.19C183.663 30.49 182.663 29.49 181.943 28.19C181.223 26.89 180.863 25.37 180.863 23.63C180.863 21.89 181.213 20.37 181.913 19.07C182.633 17.77 183.633 16.77 184.913 16.07C186.193 15.37 187.663 15.02 189.323 15.02C190.943 15.02 192.383 15.36 193.643 16.04C194.903 16.72 195.883 17.69 196.583 18.95C197.303 20.21 197.663 21.68 197.663 23.36ZM192.413 22.01C192.413 21.13 192.113 20.43 191.513 19.91C190.913 19.39 190.163 19.13 189.263 19.13C188.403 19.13 187.673 19.38 187.073 19.88C186.493 20.38 186.133 21.09 185.993 22.01H192.413Z"
                    fill="#173A56"
                  />
                  <circle cx="21.5" cy="21.5" r="21.5" fill="#3751FF" />
                  <path
                    d="M14.7812 13.4375C14.7812 12.6954 15.3829 12.0938 16.125 12.0938H21.4872C24.4733 12.0938 26.7854 12.9128 28.4235 14.551C30.0787 16.1892 30.9062 18.4967 30.9062 21.4736C30.9062 24.4681 30.0787 26.7932 28.4235 28.449C26.7854 30.0872 24.4733 30.9062 21.4872 30.9062H16.125C15.3829 30.9062 14.7812 30.3046 14.7812 29.5625V13.4375Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="14.7812"
                      y1="12.0937"
                      x2="30.9063"
                      y2="30.9062"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.7" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </NavLink>

              {/* Desktop navbar */}
              <div className="hidden md:block ml-auto">
                <div className="ml-auto flex items-baseline space-x-4">
                  <NavLink
                    to="/dapp"
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-gray-800"
                  >
                    Product
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-gray-800"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/docs"
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-gray-800"
                  >
                    Docs
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Mobile navbar with button to open menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={"md:hidden" + (navbarOpen ? " flex justify-end" : " hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/dapp"
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-gray-800"
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-gray-800"
            >
              About
            </NavLink>
            <NavLink
              to="/docs"
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-gray-800"
            >
              Docs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
