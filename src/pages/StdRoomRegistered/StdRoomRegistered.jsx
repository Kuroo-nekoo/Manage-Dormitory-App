import * as React from "react";
import axios from "axios";

const StdRoomRegistered = () => {
  const [room, setRoom] = React.useState({});

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/std/contract/registration', {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    })
      .then((data) => {
        setRoom(data);
      });
  }, []);

  if ( Object.keys(room).length ) {
    console.log(room.data.data);

    return (
      <div className="w-full h-screen justify-center items-center">
        <h1>Thông tin đăng ký kí túc xá</h1>
        <div>{room.data.data.student_id}</div>
        <div>{room.data.data.name}</div>
        <div>{room.data.data.register_time}</div>
        <div>{room.data.data.registration_status}</div>

        <button className="border-solid border-2 border-sky-500">Hủy đăng ký</button>
        <button className="border-solid border-2 border-sky-500">Sửa đơn đăng ký</button>
      </div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default StdRoomRegistered;