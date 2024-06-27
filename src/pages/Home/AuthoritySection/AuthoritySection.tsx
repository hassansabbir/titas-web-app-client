import CardComponent from "../../../components/shared/CardComponent";
import Container from "../../../components/ui/Container";
import teacher1 from "../../../assets/TeacherImages/amzadSir.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const AuthoritySection = () => {
  return (
    <div className="py-14 text-center">
      <Container>
        <Slide className="text-2xl bold">Welcome to TGAHSc</Slide>
        <Fade className="font-displayTwo text-sm font-semibold">
          Some of our teacher and some words from them..
        </Fade>
        <p></p>
        <div className="flex gap-10 md:gap-20 my-10 flex-col md:flex-row justify-between items-center">
          <CardComponent
            image={teacher1}
            shortDetails="Hi i am the head teacher of our school titas gas adarsha high school."
            name="Amzad Takku"
          ></CardComponent>
          <CardComponent
            image={teacher1}
            shortDetails="Hi i am the head teacher of our school titas gas adarsha high school."
            name="Amzad Takku"
          ></CardComponent>
          <CardComponent
            image={teacher1}
            shortDetails="Hi i am the head teacher of our school titas gas adarsha high school."
            name="Amzad Takku"
          ></CardComponent>
        </div>
      </Container>
    </div>
  );
};

export default AuthoritySection;
