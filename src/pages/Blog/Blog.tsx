// import SimpleParallax from "simple-parallax-js";
import secondImage from "../../assets/SliderImages/imageFive.jpg";
import Cover from "../../components/shared/Cover";

const Blog = () => {
  return (
    <>
      {/* Another option which also is good!*/}
      <Cover image={secondImage} text={"Welcome to our blog "}></Cover>

      {/* blog words */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-3xl font-bold mb-2">Subheading 1</h2>
          <p className="text-lg mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className="text-3xl font-bold mb-2">Subheading 2</h2>
          <p className="text-lg mb-4">
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius, turpis et commodo pharetra, est eros bibendum elit, nec
            luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
            euismod gravida.
          </p>
          <h2 className="text-3xl font-bold mb-2">Subheading 3</h2>
          <p className="text-lg mb-4">
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
            wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
            sagittis tempus lacus enim ac dui.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
