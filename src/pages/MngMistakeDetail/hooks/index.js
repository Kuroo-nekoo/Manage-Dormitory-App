import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useManageGetMistakeDetail = () => {
  const manageGetMistakeDetail = useMutation(async ({id}) => {
    const { data } = await axios.get(
      path + '/api/mng/mistake/' + id, { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return manageGetMistakeDetail;
};