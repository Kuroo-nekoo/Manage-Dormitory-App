import { useMutation } from "react-query";
import axios from "axios";

export const useRegister = () => {
  const registerMutation = useMutation(async (registerData) => {
    const { data } = await axios.post(
      "http://localhost:4000/auth/register",
      registerData
    );

    return data;
  });

  return registerMutation;
};
