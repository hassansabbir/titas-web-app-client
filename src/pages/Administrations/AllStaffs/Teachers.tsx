import Cover from "../../../components/shared/Cover";
import parallaxImg from "../../../assets/cityBg.jpg";
import Container from "../../../components/ui/Container";

const Teachers = () => {
  return (
    <div>
      <Cover image={parallaxImg} text="Our Honorable Teachers" />
      <Container>
        <h1>This is Teachers component.</h1>
      </Container>
    </div>
  );
};

export default Teachers;
