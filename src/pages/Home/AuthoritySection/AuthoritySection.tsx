import { Fade, Slide } from "react-awesome-reveal";
import AuthorityCard from "./AuthorityCard";
import Container from "../../../components/ui/Container";

const AuthoritySection = () => {
  return (
    <Container className="text-center my-10 ">
      {" "}
      <section className="mb-10">
        <Slide className="text-2xl bold">Welcome to TGAHSc</Slide>
        <Fade className="font-displayTwo text-sm font-semibold">
          Some of our teacher and some words from them..
        </Fade>
      </section>
      {/* Test cards */}
      <AuthorityCard></AuthorityCard>
    </Container>
  );
};

export default AuthoritySection;
