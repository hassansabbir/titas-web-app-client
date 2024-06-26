import { FaGraduationCap } from "react-icons/fa6";
import image from "../../../assets/SliderImages/imageFour.jpg";
import { TbCertificate } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

const LandingParallax = () => {
  return (
    <div className="relative h-64 sm:h-96 lg:h-96 overflow-hidden">
      <div
        className="absolute w-full h-full bg-fixed bg-cover bg-bottom"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white grid gap-10 lg:gap-36 lg:grid-cols-4 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <FaGraduationCap className="size-16" />
            <p className="text-5xl font-bold">13289</p>
            <p className="text-xl">Success Stories</p>
          </div>
          <div className="flex flex-col items-center">
            <TbCertificate className="size-16" />
            <p className="text-5xl font-bold">678</p>
            <p className="text-xl">Trusted Tutors</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="size-16" />
            <p className="text-5xl font-bold">347</p>
            <p className="text-xl">SCheduled Events</p>
          </div>
          <div className="flex flex-col items-center">
            <MdDevices className="size-16" />
            <p className="text-5xl font-bold">1912</p>
            <p className="text-xl">Available Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingParallax;
