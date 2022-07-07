import * as React from "react";

import { useStudentGetRegistration } from './hooks';

let room = {};

const StdRoomRegistered = () => {
  const [loaded, setLoaded] = React.useState(false);

  const studentGetRegistration = useStudentGetRegistration();

  React.useEffect(() => {
    studentGetRegistration.mutate(
      {}, {
      onSuccess(data) {
        console.log(data);
        room = data;
        setLoaded(true);
      }
    });
  }, []);

  return loaded ? (
    <div className="w-full h-screen justify-center items-center">
      <h1>Thông tin đăng ký kí túc xá</h1>
      <div>{room.data.student_id}</div>
      <div>{room.data.name}</div>
      <div>{room.data.register_time}</div>
      <div>{room.data.registration_status}</div>

      <button className="border-solid border-2 border-sky-500">Hủy đăng ký</button>
      <button className="border-solid border-2 border-sky-500">Sửa đơn đăng ký</button>
    </div>
  ) : (
    <h1>Loading..</h1>
  );
};

export default StdRoomRegistered;