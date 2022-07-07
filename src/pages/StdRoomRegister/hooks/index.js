import axios from "axios";
import { useMutation } from "react-query";

const path = 'https://api.maoleng.dev';

export const useStudentGetRooms = () => {
  const studentGetRooms = useMutation(async () => {
    const { data } = await axios.get(
      path + '/api/std/contract/form', { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return studentGetRooms;
};

export const useStudentRegister = () => {
  const studentRegister = useMutation(async (input) => {
    console.log(input);
    const { data } = await axios.post(
      path + '/api/std/contract/register', 
      input, { 
        'headers': {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

    return data;
  });

  return studentRegister;
};