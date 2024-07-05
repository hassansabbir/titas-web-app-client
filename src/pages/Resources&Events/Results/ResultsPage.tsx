import Cover from "../../../components/shared/Cover";
import ParallaxBG from "../../../assets/cityBg.jpg";
import Container from "../../../components/ui/Container";

const ResultsPage = () => {
  return (
    <div>
      <Cover image={ParallaxBG} text="Results" />
      <Container>
        <h1 className="text-4xl font-bold text-center my-10">Result Archive</h1>
      </Container>
    </div>
  );
};

export default ResultsPage;
