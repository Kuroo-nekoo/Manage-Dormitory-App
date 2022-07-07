import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useManageGetMistakes = () => {
  const manageGetMistakes = useMutation(async () => {
    const { data } = await axios.get(
      path + '/api/mng/mistake', { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return manageGetMistakes;
};