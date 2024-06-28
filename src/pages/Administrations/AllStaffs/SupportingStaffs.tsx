import Cover from "../../../components/shared/Cover";
import Container from "../../../components/ui/Container";
import parallaxImg from "../../../assets/cityBg.jpg";

const SupportingStaffs = () => {
  return (
    <div>
      <Cover image={parallaxImg} text="Supporting Staffs" />
      <Container>
        <h1>This is Supporting Staffs component.</h1>
      </Container>
    </div>
  );
};

export default SupportingStaffs;
