import { useForm, Controller, FieldValues } from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center font-displayThree items-center">
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        {/* Left side with the image and welcome text */}
        <section
          style={{
            backgroundImage: `url(${signUpBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="shadow-2xl h-1/2 hidden md:h-screen w-full md:w-1/2 md:flex items-center justify-center"
        >
          <div className="bg-black bg-opacity-40 p-10 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none h-full w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-center">
              Welcome to Titas Gas Adarsha High School
            </h1>
            <p className="text-xl mt-5 text-center">
              Join Titas Gas Adarsha High School today! Create an account to
              access a wealth of resources, stay updated with school news, and
              manage your academic journey. Our easy and secure registration
              process ensures your information is protected. Sign up now to
              become part of our vibrant educational community.
            </p>
          </div>
        </section>
        {/* Right side with the form */}
        <section className="bg-blue-50 p-5 md:p-10 h-1/2 md:h-screen w-full md:w-1/2 shadow-2xl rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none flex items-center justify-center">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold text-center mb-5">
              Sign up Now!
            </h1>
            <Form
              onFinish={handleSubmit(onSubmit)}
              className="border-2 p-8 rounded-lg shadow-lg flex flex-col items-center"
              name="basic"
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                validateStatus={errors.fullName ? "error" : ""}
                help={errors.fullName ? String(errors.fullName.message) : ""}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Please input your full name!" }}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                validateStatus={errors.phoneNumber ? "error" : ""}
                help={
                  errors.phoneNumber ? String(errors.phoneNumber.message) : ""
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: "Please input your phone number!",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Phone number must be numeric!",
                    },
                  }}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>

              <Form.Item
                label="Username"
                validateStatus={errors.username ? "error" : ""}
                help={errors.username ? String(errors.username.message) : ""}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Please input your username!" }}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                validateStatus={errors.password ? "error" : ""}
                help={errors.password ? String(errors.password.message) : ""}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Please input your password!" }}
                  render={({ field }) => <Input.Password {...field} />}
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                validateStatus={errors.confirmPassword ? "error" : ""}
                help={
                  errors.confirmPassword
                    ? String(errors.confirmPassword.message)
                    : ""
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: "Please confirm your password!",
                    validate: (value) =>
                      value === watch("password") ||
                      "The two passwords do not match!",
                  }}
                  render={({ field }) => <Input.Password {...field} />}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <div className="text-center">
                Already have an account?
                <span className="text-blue-700 font-semibold underline">
                  <Link to={"/login"}> Login Here</Link>
                </span>
              </div>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
