import { useForm, Controller, FieldValues } from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex font-displayThree justify-center items-center">
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        {/* Left side with the image */}
        <section
          style={{
            backgroundImage: `url(${signUpBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" shadow-2xl h-1/2 md:h-screen w-full md:w-1/2"
        />
        {/* Right side with the form */}
        <section className="bg-blue-50 p-5 md:p-10 h-1/2 md:h-screen w-full md:w-1/2 shadow-2xl rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none flex items-center justify-center">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold mb-5 text-center">Login Now!</h1>
            <Form
              onFinish={handleSubmit(onSubmit)}
              className="border-2 p-8 rounded-lg shadow-lg flex flex-col items-center"
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
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
                {errors.username && (
                  <p className="text-red-500">Please input your username!</p>
                )}
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
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
                {errors.password && (
                  <p className="text-red-500">Please input your password!</p>
                )}
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Controller
                  name="remember"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    >
                      Remember me
                    </Checkbox>
                  )}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }} className="w-full text-center">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <div className="mt-10 text-center">
                  Don't have an account?{" "}
                  <span className="text-blue-700 font-semibold underline">
                    <Link to={"/sign-up"}> Register Now</Link>
                  </span>
                </div>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
