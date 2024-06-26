import CardComponent from "../../../components/shared/CardComponent";
import Container from "../../../components/ui/Container";
import teacher1 from "../../../assets/TeacherImages/amzadSir.jpg";

const AuthoritySection = () => {
  return (
    <div className="md:h-[660px] h-[1650px]">
      <Container>
        <h1 className="text-4xl underline-offset-4 font-displayThree font-light text-center py-10">
          Welcome to TGAHSc
        </h1>
        <p></p>
        <div className="flex flex-col md:flex-row justify-between items-center">
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
