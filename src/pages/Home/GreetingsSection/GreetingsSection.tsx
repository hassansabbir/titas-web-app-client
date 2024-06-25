import schoolIMG from "../../../assets/titasSchool.jpg";
import Container from "../../../components/ui/Container";

const GreetingsSection = () => {
  return (
    <div className="bg-gray-100 px-10 py-28 h-[800px]">
      <Container>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              <span className="border-b-4 border-blue-700">Wel</span>come
            </h1>
            <p className="py-2 md:py-5 w-11/12">
              Welcome to Titas Gas Adarsha High School, where academic
              excellence meets holistic development. Join us in nurturing future
              leaders in a vibrant and supportive community.
            </p>
            <img
              className="md:w-11/12 md:h-[320px] mt-10 rounded-xl shadow-xl"
              src={schoolIMG}
              alt=""
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl font-bold">
              <span className="border-b-4 border-blue-700">Lat</span>est News
            </h1>
            <p className="py-2 md:py-5">
              Stay updated with the latest news and events at Titas Gas Adarsha
              High School. From academic achievements to exciting
              extracurricular activities, there's always something happening!
            </p>
            <div className="md:flex items-center mt-5 gap-5">
              <img
                src={schoolIMG}
                className="md:size-36 rounded-lg shadow-lg object-cover"
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
                className="md:size-36 mt-2 rounded-lg shadow-lg object-cover"
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
