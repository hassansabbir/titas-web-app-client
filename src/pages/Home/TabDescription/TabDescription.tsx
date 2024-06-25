import { Button, Tabs } from "antd";
import Container from "../../../components/ui/Container";
import tabIMG from "../../../assets/randomImg1.png";

const TabDescription = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: <span className="text-2xl border px-10">Description</span>,
      children: (
        <div className="mt-10">
          <p>
            At Titas Gas Adarsha High School, we are dedicated to fostering a
            stimulating and inclusive learning environment. Our commitment to
            academic excellence and personal growth prepares students for
            success in a rapidly changing world.
          </p>
          <Button className="py-5" type="primary">
            Learn More
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="text-2xl border px-10">Syllabus</span>,
      children: (
        <div className="mt-10">
          <p>
            {" "}
            Our comprehensive syllabus at Titas Gas Adarsha High School is
            designed to challenge and inspire students. Covering a wide range of
            subjects, it ensures a balanced and well-rounded education that
            meets national standards and encourages intellectual curiosity.
          </p>
          <Button className="py-5" type="primary">
            Learn More
          </Button>
        </div>
      ),
    },
    {
      key: "3",
      label: <span className="text-2xl border px-10">Teachers</span>,
      children: (
        <div className="mt-10">
          <p>
            The teachers at Titas Gas Adarsha High School are passionate,
            experienced, and dedicated to their students' success. They bring a
            wealth of knowledge and a nurturing approach to the classroom,
            ensuring each student receives the support and guidance they need to
            thrive
          </p>
          <Button className="py-5" type="primary">
            Learn More
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 px-10 py-28 mt-10 h-[700px]">
      <Container>
        <div className="md:flex gap-10">
          <Tabs
            className="text-xl w-1/2"
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
          <div className="w-1/2">
            <img className="rounded-b-2xl" src={tabIMG} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabDescription;
