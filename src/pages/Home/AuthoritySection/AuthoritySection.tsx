import CardComponent from "../../../components/shared/CardComponent";
import Container from "../../../components/ui/Container";
import teacher1 from "../../../assets/TeacherImages/amzadSir.jpg";

const AuthoritySection = () => {
  return (
    <div className="py-14">
      <Container>
        <h1 className="text-4xl underline-offset-4 font-displayThree font-light text-center">
          Welcome to TGAHSc
        </h1>
        <p></p>
        <div className="flex gap-10 px-10 md:gap-20 my-10 flex-col md:flex-row justify-between items-center">
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
