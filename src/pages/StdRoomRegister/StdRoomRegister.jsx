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
    })
  }

  React.useEffect(() => {
    studentGetRooms.mutate({}, {
      onSuccess(data) {
        console.log(data);
        info = {
          season_time: data.register_time,
          rooms: data.room_types.map(room => {return {value: room.max, content: room.description}})
        };
        setLoaded(true);
      }
    });
  }, []);

  return loaded ? (
    <div className="w-full h-screen flex justify-center items-center">  
      {info.rooms.map((room, index) => {
        return (
          <div className="w-full" onClick={() => registerSubmit(room.value)} key={index}>{room.content}</div>
        );
      })}
    </div>
  ) : (
    <h1>Loading..</h1>
  );
};

export default StdRoomRegister;