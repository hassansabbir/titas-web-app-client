import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import signUpBg from "../../assets/SliderImages/imageFour.jpg";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TUser } from "../../types/UserTypes";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUser>();

  const { mutate } = useMutation({
    mutationFn: async (data: TUser) => {
      const { data: response } = await axios.post("/api/users", data);
      navigate("/login", { state: { from: location } });
      return response;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Success",
        text: "New Student Created Successfully! Now login.",
        icon: "success",
        confirmButtonText: "Done",
      });
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "There is an error",
        icon: "error",
        confirmButtonText: "Done",
      });
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const currentYear = new Date().getFullYear().toString();
    const studentId = `st-${currentYear}-${data.class}-${data.rollNumber}`;

    // Regex pattern for password validation (at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character)
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(data.password)) {
      // If password does not match the regex pattern
      alert(
        "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    // Prepare final data object with TUser structure
    const finalData: TUser = {
      studentId: studentId,
      fullName: data.fullName,
      class: data.class,
      rollNumber: data.rollNumber.toString(),
      password: data.password,
      image: "",
      email: "",
      address: "",
      guardianDetails: {
        guardianName: "",
        guardianContact: "",
        guardianRelation: "",
      },
      phoneNumber: "",
      role: "student",
      isDeleted: false,
    };

    mutate(finalData);
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
              className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#F2F4FF,#F2F4FF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.100/.48)_80%,_theme(colors.blue.900)_86%,_theme(colors.blue.900)_90%,_theme(colors.blue.900)_94%,_theme(colors.slate.100/.48))_border-box] rounded-2xl border-2 border-transparent animate-border p-8 shadow-lg flex flex-col items-center"
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
                label="Class"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                validateStatus={errors.class ? "error" : ""}
                className="w-full justify-center"
              >
                <Controller
                  name="class"
                  control={control}
                  rules={{ required: "Please select a class!" }}
                  render={({ field }) => (
                    <Select {...field} className="w-full">
                      <Select.Option value="01">Class 1</Select.Option>
                      <Select.Option value="02">Class 2</Select.Option>
                      <Select.Option value="03">Class 3</Select.Option>
                      <Select.Option value="04">Class 4</Select.Option>
                      <Select.Option value="05">Class 5</Select.Option>
                      <Select.Option value="06">Class 6</Select.Option>
                      <Select.Option value="07">Class 7</Select.Option>
                      <Select.Option value="08">Class 8</Select.Option>
                      <Select.Option value="09">Class 9</Select.Option>
                      <Select.Option value="10">Class 10</Select.Option>
                    </Select>
                  )}
                />
              </Form.Item>
              <Form.Item
                label="Roll Number"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                validateStatus={errors.rollNumber ? "error" : ""}
                className="w-full justify-center"
              >
                <Controller
                  name="rollNumber"
                  control={control}
                  rules={{ required: "Please input your roll number!" }}
                  render={({ field }) => (
                    <InputNumber
                      {...field}
                      min={1}
                      max={200}
                      className="w-full"
                      stringMode
                    />
                  )}
                />
              </Form.Item>
              {/* Password and Confirm Password fields */}
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
                  rules={{
                    required: "Please input your password!",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.",
                    },
                  }}
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

              {/* Submit button */}
              <Form.Item
                wrapperCol={{ span: 24 }}
                className="w-full text-center"
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              {/* Login link */}
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
