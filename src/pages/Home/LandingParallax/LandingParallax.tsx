import { FaGraduationCap } from "react-icons/fa6";
import image from "../../../assets/SliderImages/imageFour.jpg";
import { TbCertificate } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

const LandingParallax = () => {
  return (
    <>
      <div className="relative bg-gray-800 h-screen sm:h-96 lg:h-96 overflow-hidden">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          {/* Features */}
          <div className="text-white grid gap-4 md:gap-10 lg:gap-36 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaGraduationCap className="text-5xl mb-2" />
              <p className="text-3xl font-bold">13289</p>
              <p className="text-lg">Success Stories</p>
            </div>
            <div className="flex flex-col items-center">
              <TbCertificate className="text-5xl mb-2" />
              <p className="text-3xl font-bold">678</p>
              <p className="text-lg">Trusted Tutors</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCalendarAlt className="text-5xl mb-2" />
              <p className="text-3xl font-bold">347</p>
              <p className="text-lg">Scheduled Events</p>
            </div>
            <div className="flex flex-col items-center">
              <MdDevices className="text-5xl mb-2" />
              <p className="text-3xl font-bold">1912</p>
              <p className="text-lg">Available Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingParallax;
