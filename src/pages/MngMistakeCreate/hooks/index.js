import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useMistakeCreate = () => {
  const mistakeCreate = useMutation(async (input) => {
    const { data } = await axios.post(
      path + '/api/mng/mistake', 
      input, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return mistakeCreate;
};