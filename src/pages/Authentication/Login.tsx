import { useEffect } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useUser } from "../../Context/useUser";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { dispatch } = useUser();
  const { state } = useUser();

  useEffect(() => {
    if (state.user) {
      if (state.user?.role === "student") {
        navigate("/dashboard/student-profile");
      } else if (state.user?.role === "admin") {
        navigate("/dashboard/admin-profile");
      } else if (state.user?.role === "superAdmin") {
        navigate("/dashboard/superAdmin-profile");
      }

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login Successful.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [state.user, navigate]);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      const response = await axios.get(`/api/user/${data.student_id}`, data);
      console.log(response.data);
      if (data.password === response?.data?.data?.password) {
        console.log("Password matched");

        dispatch({ type: "LOGIN", payload: response?.data?.data });
      } else {
        Swal.fire({
          title: "Error",
          text: "The password didn't match.",
          icon: "error",
          confirmButtonText: "Done",
        });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <>
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
          <section className="bg-blue-50  p-5 md:p-10 h-1/2 md:h-screen w-full md:w-1/2 shadow-2xl rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none flex items-center justify-center">
            <div className="max-w-md w-full ">
              <h1 className="text-4xl font-bold mb-5 text-center">
                Login Now!
              </h1>
              <Form
                onFinish={handleSubmit(onSubmit)}
                className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#F2F4FF,#F2F4FF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.100/.48)_80%,_theme(colors.blue.900)_86%,_theme(colors.blue.900)_90%,_theme(colors.blue.900)_94%,_theme(colors.slate.100/.48))_border-box] rounded-2xl border-2 border-transparent animate-border p-8 shadow-lg flex flex-col items-center"
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item
                  label="Student ID"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  className="w-full text-center"
                >
                  <Controller
                    name="student_id"
                    control={control}
                    rules={{ required: "Please input your student ID!" }}
                    render={({ field }) => (
                      <Input
                        placeholder="e.g.: stu-year-class-roll"
                        {...field}
                      />
                    )}
                  />

                  {errors.student_id && (
                    <p className="text-red-500">
                      Please input your student ID!
                    </p>
                  )}
                </Form.Item>

                <Form.Item
                  label="Password"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  className="w-full text-center"
                >
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Please input your password!" }}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Enter your password"
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-red-500">Please input your password!</p>
                  )}
                </Form.Item>

                <Form.Item
                  wrapperCol={{ span: 24 }}
                  className="w-full text-center"
                >
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
      {/* Sparkling card */}
      {/* <SpotlightCards></SpotlightCards> */}
    </>
  );
};

export default Login;
