import { FcGlobe, FcIdea, FcManager, FcReading } from "react-icons/fc";
import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";
import useScrollGrow from "../../../hooks/ScrollGrowHook";

const SubscriptionBox = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div style={style} ref={componentRef} className="text-black py-20 ">
      {/* Facilities */}
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:mb-0 lg:mr-8">
            <p className="text-2xl font-semibold">
              <FcGlobe className="text-5xl " /> E-Learning <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold">
              <FcReading className="text-5xl " /> Tuition <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold">
              <FcIdea className="text-5xl " /> Technology <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
            <p className="text-2xl font-semibold">
              <FcManager className="text-5xl " /> Alumni <br />
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quos dicta in dolor soluta beatae vel at maiores corrupti
                voluptates.
              </span>
            </p>
          </div>
          {/* Box */}
          <>
            <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#F2F4FF,#F2F4FF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.100/.48)_80%,_theme(colors.blue.900)_86%,_theme(colors.blue.900)_90%,_theme(colors.blue.900)_94%,_theme(colors.slate.100/.48))_border-box] rounded-2xl border-2 border-transparent animate-border p-8 shadow-lg">
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
          </>
        </div>
      </Container>
    </motion.div>
  );
};

export default SubscriptionBox;
