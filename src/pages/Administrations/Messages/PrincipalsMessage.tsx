import Cover from "../../../components/shared/Cover";
import parallaxBG from "../../../assets/cityBg.jpg";
import sanaSir from "../../../assets/sanaSir.jpg";
import Container from "../../../components/ui/Container";
import PageWrapper from "../../../components/ui/PageWrapper";

const PrincipalsMessage = () => {
  return (
    <div className="pt-16">
      <Cover image={parallaxBG} text="Principal's Message" />
      <PageWrapper><Container className="my-10">
        <h1 className="text-4xl font-bold text-center">Messages</h1>
        <div className="flex flex-col items-center justify-center my-10">
          <img
            className="text-center rounded-2xl size-96"
            src={sanaSir}
            alt=""
          />
          <div className="text-center text-2xl my-5">
            <h1 className="text-3xl font-bold">MD Sana Ullah</h1>
            <p>Principal</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            commodi ea nihil unde, saepe in facere obcaecati accusantium
            doloribus nobis similique repudiandae, ipsa mollitia sit nesciunt.
            Optio impedit perspiciatis commodi? Ducimus ea nobis, voluptates
            sapiente ut nemo perferendis asperiores dolores.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            et laborum placeat explicabo, perferendis vero voluptatem
            dignissimos. Quas nostrum qui doloribus dolor provident nobis dolore
            corporis beatae aut accusantium? Aliquid illum, eveniet ex fugiat
            omnis corrupti dignissimos maxime voluptate est officia dolor
            adipisci culpa tempora temporibus, libero, nulla laborum sapiente!
            Officiis eum atque necessitatibus exercitationem cupiditate aut
            labore nulla minima.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            commodi ea nihil unde, saepe in facere obcaecati accusantium
            doloribus nobis similique repudiandae, ipsa mollitia sit nesciunt.
            Optio impedit perspiciatis commodi? Ducimus ea nobis, voluptates
            sapiente ut nemo perferendis asperiores dolores.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            et laborum placeat explicabo, perferendis vero voluptatem
            dignissimos. Quas nostrum qui doloribus dolor provident nobis dolore
            corporis beatae aut accusantium? Aliquid illum, eveniet ex fugiat
            omnis corrupti dignissimos maxime voluptate est officia dolor
            adipisci culpa tempora temporibus, libero, nulla laborum sapiente!
            Officiis eum atque necessitatibus exercitationem cupiditate aut
            labore nulla minima.
          </p>
        </div>
      </Container></PageWrapper>
    </div>
  );
};

export default PrincipalsMessage;
