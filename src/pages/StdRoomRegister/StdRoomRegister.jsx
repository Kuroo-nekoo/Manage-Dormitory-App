import * as React from "react";

import { useStudentGetRooms, useStudentRegister } from './hooks';

let info = {};

const StdRoomRegister = () => {
  const [loaded, setLoaded] = React.useState(false);

  const studentGetRooms = useStudentGetRooms();
  const studentRegister = useStudentRegister();

  const registerSubmit = (max) => {
    const input = {
      "season_time": info.season_time,
      "room_type": max
    }

    studentRegister.mutate(input, {
      onSuccess(data) {
        console.log(data);
        setLoaded(true);
      }
    });
  }

  React.useEffect(() => {
    studentGetRooms.mutate({}, {
      onSuccess(data) {
        console.log(data);
        info = {
          season_time: data.register_time,
          rooms: data.room_types.map(room => ({value: room.max, content: room.description, price_per_month: room.price_per_month}))
        };
        setLoaded(true);
      }
    });
  }, []);

  return loaded ? (
    <>
      <h1 className="text-2xl text-center">Dang ki ky tuc xa</h1>
      <div className="w-full h-screen flex justify-center items-center">  
        {info.rooms.map((room, index) => {
          return (
            <div className="w-full text-center border mx-6" onClick={() => registerSubmit(room.value)} key={index}>
              <img style={{width: '50%', margin: 'auto'}} src="https://cdn-icons.flaticon.com/png/512/2544/premium/2544087.png?token=exp=1657215221~hmac=7d939b46618a8be3b3a1cb046c46142e" alt="" />
              <div><b>Loại phòng:</b> {room.content}</div>
              <div><b>Giá phòng theo tháng:</b> {room.price_per_month}</div>
              <div>
                <button className="mx-6 border">Xem chi tiet</button>
                <button className="mx-6 border">Dang ky</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <h1>Loading..</h1>
  );
};

export default StdRoomRegister;