import Container from "../../../components/ui/Container";
import { FcGlobe, FcIdea, FcManager, FcReading } from "react-icons/fc";

const SubscriptionBox = () => {
  return (
    <div className=" bg-gray-100 p-4">
      {/* Facilities */}
      <Container>
        {" "}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:mb-0 lg:mr-8">
            <p className="text-2xl font-semibold p-4 ">
              <FcGlobe className="text-5xl " /> E-Learning <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold p-4 ">
              <FcReading className="text-5xl " /> Tuition <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold p-4 ">
              <FcIdea className="text-5xl " /> Technology <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold p-4 ">
              <FcManager className="text-5xl " /> Alumni <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
          </div>
          {/* Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Sign up for updates
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscriptionBox;
