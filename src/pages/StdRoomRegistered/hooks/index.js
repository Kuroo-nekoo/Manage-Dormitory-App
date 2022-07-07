import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useStudentGetRegistration = () => {
  const studentGetRegistration = useMutation(async () => {
    const { data } = await axios.get(
      path + '/api/std/contract/registration', { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return studentGetRegistration;
};