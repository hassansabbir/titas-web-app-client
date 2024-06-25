// src/Footer.tsx
import React from "react";
import {
  AiFillFacebook,
  AiFillPhone,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-white">
              {" "}
              <h1>Titas</h1>
            </a>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Educate</h3>
            <ul className="mt-4 space-y-5">
              <p>
                Providing Life Changing Experiences Through Education. Class
                That Fit Your Busy Life. Closer to Home
              </p>
              <p className="flex items-center gap-2">
                <AiFillPhone />
                +88013242352345
              </p>
              <p className="flex items-center gap-2">
                <AiTwotoneMail />
                titas@gmail.com
              </p>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Latest News</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:text-white ">
                  Admissions <br />
                  <span className="text-xs text-blue-500">by Sana Sir</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Continuing Educating <br />
                  <span className="text-xs text-blue-500">by Arafat Sir</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Current Students <br />
                  <span className="text-xs text-blue-500">
                    by Mahmuda Ma'am
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Alumnies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Results
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2020 Titas School, Inc. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 ">
              <form className="flex rounded-full">
                <input
                  type="email"
                  className="px-4 py-2 w-full md:w-auto  border-gray-700 bg-gray-800 text-gray-400 focus:outline-none focus:border-gray-600"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4 text-gray-400">
            <a href="#" className="hover:text-white text-2xl">
              <AiFillFacebook />
            </a>
            <a href="#" className="hover:text-white text-2xl">
              <AiFillTwitterCircle />
            </a>
            <a href="#" className="hover:text-white text-2xl">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
