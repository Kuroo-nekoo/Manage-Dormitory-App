import * as React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useLogin } from "./hooks";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";

const Login = () => {
  let navigate = useNavigate();
  const methods = useForm({
    defaultValues: { email: "", password: "" },
  });
  const loginMutation = useLogin();

  const onLoginFormSubmit = methods.handleSubmit((loginData) => {
    loginMutation.mutate(loginData, {
      onSuccess(data) {
        console.log(data);
        if (data.status === true) {
          localStorage.setItem("token", data.token);
          navigate("/", { replace: true });
        }
      },
    });
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FormProvider {...methods}>
        <Form onSubmit={onLoginFormSubmit} title="Login">
          <span className="my-2 text-gray-300">
            Haven't got account yet?{" "}
            <Link to="/register" className="my-2 text-teal-600">
              Register
            </Link>
          </span>
          <Input
            type="email"
            name="username"
            label="Email address"
            registerOptions={{
              required: { value: true, message: "Please enter email adress" },
            }}
            Icon={BiEnvelope}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            registerOptions={{
              required: { value: true, message: "Please enter password" },
              // minLength: {
              //   // value: 6,
              //   message: "Password must be at least 6 characters",
              // },
            }}
            Icon={BiLockAlt}
          />
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mx-2" id="remember"></input>
            <label htmlFor="remember" className="text-gray-300">
              Remember me
            </label>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default Login;
