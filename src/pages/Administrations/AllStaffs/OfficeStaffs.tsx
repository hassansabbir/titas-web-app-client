import Cover from "../../../components/shared/Cover";
import Container from "../../../components/ui/Container";
import parallaxImg from "../../../assets/cityBg.jpg";

const OfficeStaffs = () => {
  return (
    <div>
      <Cover image={parallaxImg} text="Office Staffs" />
      <Container>
        <h1>This is Office Staffs component.</h1>
      </Container>
    </div>
  );
};

export default OfficeStaffs;
