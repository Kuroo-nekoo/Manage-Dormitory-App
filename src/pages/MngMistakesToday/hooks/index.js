import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useManageGetMistakeToday = () => {
  const manageGetMistakeToday = useMutation(async () => {
    const { data } = await axios.get(
      path + '/api/mng/mistake?time=today', { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return manageGetMistakeToday;
};