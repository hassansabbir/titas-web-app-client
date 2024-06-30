import { useForm, Controller, FieldValues } from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Checkbox, Form, Input } from "antd";

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
              Welcome back to Titas Gas Adarsha High School's portal! Log in to
              access your personalized dashboard, view important announcements,
              and manage your academic records. Our secure login system ensures
              your data remains protected. Enter your credentials to continue
              your journey with us.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-10 h-[750px] lg:w-[500px] shadow-2xl rounded-r-3xl">
          <h1 className="text-4xl font-bold text-center mb-5">Login Now!</h1>
          <Form
            onFinish={handleSubmit(onSubmit)}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="Username" name="username">
              <Controller
                name="username"
                control={control}
                rules={{ required: "Please input your username!" }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.username && <p style={{ color: "red" }}>{"nooooo"}</p>}
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Please input your password!" }}
                render={({ field }) => <Input.Password {...field} />}
              />
              {errors.password && <p style={{ color: "red" }}>{"yeeeeee"}</p>}
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
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

export default Login;
