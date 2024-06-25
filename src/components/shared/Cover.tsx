interface CoverProps {
  image: string;
  text: string;
}
const Cover: React.FC<CoverProps> = ({ image, text }) => {
  return (
    <div className="relative h-64 sm:h-72 lg:h-96 overflow-hidden">
      <div
        className="absolute w-full h-full bg-fixed bg-cover bg-bottom"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
