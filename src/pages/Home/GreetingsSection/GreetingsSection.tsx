import schoolIMG from "../../../assets/titasSchool.jpg";
import Container from "../../../components/ui/Container";
import IndexPage from "./GreetingCard";

const GreetingsSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <div className="md:flex md:gap-20 flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              <span className="border-b-4 border-blue-700">Welcome</span>
            </h1>
            <p className="py-2 md:py-5 w-full md:w-11/12">
              Welcome to Titas Gas Adarsha High School, where academic
              excellence meets holistic development. Join us in nurturing future
              leaders in a vibrant and supportive community.
            </p>
            <IndexPage />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl font-bold">
              <span className="border-b-4 border-blue-700">Latest News</span>
            </h1>
            <p className="py-2 md:py-5">
              Stay updated with the latest news and events at Titas Gas Adarsha
              High School. From academic achievements to exciting
              extracurricular activities, there's always something happening!
            </p>
            <div className="md:flex items-center mt-5 gap-5">
              <img
                src={schoolIMG}
                className="md:w-36 md:h-36 rounded-lg shadow-lg object-cover"
                alt=""
              />
              <div>
                <h1 className="text-2xl mt-2 font-bold">
                  Helping Students Is The Key
                </h1>
                <p className="my-2">
                  Helping students is the key to success at Titas Gas Adarsha
                  High School, where dedicated support empowers every student to
                  thrive.
                </p>
                <p className="py-2">July 20, 2023</p>
              </div>
            </div>
            <div className="md:flex items-center mt-6 gap-5">
              <img
                src={schoolIMG}
                className="md:w-36 md:h-36 mt-2 rounded-lg shadow-lg object-cover"
                alt=""
              />
              <div>
                <h1 className="text-2xl mt-2 font-bold">
                  Helping Students Is The Key
                </h1>
                <p className="my-2">
                  Helping students is the key to success at Titas Gas Adarsha
                  High School, where dedicated support empowers every student to
                  thrive.
                </p>
                <p className="py-2">July 20, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GreetingsSection;
