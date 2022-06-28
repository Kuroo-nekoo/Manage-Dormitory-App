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
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {JSON.stringify(room)}
      </div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default StdRoomRegistered;