import axios from "axios";
import { useMutation } from "react-query";
import { DeviceUUID } from "device-uuid";

export const useLogin = () => {
  const loginMutation = useMutation(async (loginData) => {
    loginData = { ...loginData, device_id: new DeviceUUID().get() };

    let url;
    if (loginData.username.includes("student")) {
      url = "https://api.maoleng.dev/api/std/login";
    } else {
      url = "https://api.maoleng.dev/api/mng/login";
    }

    const { data } = await axios.post(url, loginData);

    return data;
  });

  return loginMutation;
};
