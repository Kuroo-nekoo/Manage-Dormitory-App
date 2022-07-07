import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useManageGetRegisters = () => {
  const manageGetRegisters = useMutation(async () => {
    const { data } = await axios.get(
      path + '/api/mng/contract/forms', { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return manageGetRegisters;
};

export const useConfirm = () => {
  const confirm = useMutation(async ({ id }) => {
    const { data } = await axios.post(
      path + '/api/mng/contract/form_confirm/' + id, 
      {}, { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return confirm;
};