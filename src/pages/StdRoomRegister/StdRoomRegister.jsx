import * as React from "react";
import axios from "axios";

const StdRoomRegister = () => {
  const [info, setInfo] = React.useState({});

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/std/contract/form', {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    })
      .then((data) => {
        setInfo({
          season_time: data.data.register_time,
          rooms: data.data.room_types.map(room => {return {value: room.id, content: room.description}})
        });
      });
  }, []);

  if ( Object.keys(info).length ) {
    const registerRoom = (id) => {
      axios.post(
        'https://api.maoleng.dev/api/std/contract/register',
        {
          "season_time": info.season_time,
          "room_type": id
        },
        {
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token')
          }
        }
      )
        .then((data) => {
          console.log(data);
        });
    }

    return (
      <div className="w-full h-screen flex justify-center items-center">
        {info.rooms.map((room, index) => {
          return (
            <div className="w-full" onClick={() => registerRoom(room.value)} key={index}>{room.content}</div>
          );
        })}
      </div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default StdRoomRegister;