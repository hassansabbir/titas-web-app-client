import { useForm, Controller, FieldValues } from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Form, Input } from "antd";

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
    <div
      style={{
        backgroundImage: `url(${signUpBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="sign-up-page"
    >
      <div className="lg:flex justify-center p-5 lg:p-32 items-center">
        <div
          style={{
            backgroundImage: `url(${signUpBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="rounded-l-3xl shadow-2xl h-[750px] lg:w-[500px]"
        >
          <div className="bg-black flex flex-col justify-around p-10 pt-20 bg-opacity-40 text-white h-full w-full">
            <h1 className="text-5xl font-bold text-center">
              Welcome to Titas Gas Adarsha High School
            </h1>
            <p className="text-xl mt-5 text-justify">
              Join Titas Gas Adarsha High School today! Create an account to
              access a wealth of resources, stay updated with school news, and
              manage your academic journey. Our easy and secure registration
              process ensures your information is protected. Sign up now to
              become part of our vibrant educational community.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-10 h-[750px] lg:w-[500px] shadow-2xl rounded-r-3xl">
          <h1 className="text-4xl font-bold text-center mb-5">Sign up Now!</h1>
          <Form
            onFinish={handleSubmit(onSubmit)}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              validateStatus={errors.fullName ? "error" : ""}
              help={errors.fullName ? String(errors.fullName.message) : ""}
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
