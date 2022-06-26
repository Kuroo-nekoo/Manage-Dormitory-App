import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useRegister } from "./hooks";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";

const Register = () => {
  const methods = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });
  const registerMutation = useRegister();

  const onRegisterFormSubmit = methods.handleSubmit((data) => {
    registerMutation.mutate(data);
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FormProvider {...methods}>
        <Form onSubmit={onRegisterFormSubmit} title="Register">
          <span className="text-gray-300 my-2">
            Already have an account?
            <Link to="/login" className="my-2 text-teal-600">
              {" "}
              Login
            </Link>
          </span>
          <Input
            type="text"
            name="email"
            label="Email address"
            registerOptions={{
              required: { value: true, message: "Please enter email address" },
            }}
            Icon={BiEnvelope}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            registerOptions={{
              required: { value: true, message: "Please enter your password" },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            Icon={BiLockAlt}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm password"
            registerOptions={{
              required: {
                value: true,
                message: "Please enter confirm password",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: {
                confirmPassword: (value) =>
                  value !== methods.watch("password") &&
                  "Confirm password and password must match",
              },
            }}
            Icon={BiLockAlt}
          />
          <div className="mb-3 flex items-center">
            <input type="checkbox" className="mx-2"></input>
            <label className="text-gray-300">
              I agree to the
              <span className="text-teal-600"> Terms of Service</span> and
              <span className="text-teal-600"> Privacy Policy</span>
            </label>
          </div>
          <Button type="submit">Register</Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default Register;
