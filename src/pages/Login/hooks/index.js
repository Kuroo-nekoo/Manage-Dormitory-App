import axios from "axios";
import { useMutation } from "react-query";

export const useLogin = () => {
  const loginMutation = useMutation(async (loginData) => {
    const { data } = await axios.post(
      "http://localhost:4000/auth/login",
      loginData
    );

    return data;
  });

  return loginMutation;
};
