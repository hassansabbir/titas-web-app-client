import { Card } from "antd";
import { CgDetailsMore } from "react-icons/cg";

const { Meta } = Card;

type cardProps = {
  image: string;
  name: string;
  shortDetails: string;
};
const CardComponent = ({ image, name, shortDetails }: cardProps) => (
  <Card
    className="shadow-xl rounded-3xl w-full"
    cover={
      <img
        className="h-[300px] object-cover object-top"
        alt="example"
        src={image}
      />
    }
    actions={[
      <CgDetailsMore
        className="mx-auto text-3xl"
        key="ellipsis"
        title="More Details"
      />,
    ]}
  >
    <Meta title={name} description={shortDetails} />
  </Card>
);

export default CardComponent;
