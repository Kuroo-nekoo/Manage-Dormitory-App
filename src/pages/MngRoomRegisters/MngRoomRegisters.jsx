import * as React from "react";
import axios from "axios";

const MngRoomRegisters = () => {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/mng/contract/forms', 
      {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        }
      }
    )
      .then((data) => {
        setRooms(data.data.data);
      });
  }, []);

  if ( Object.keys(rooms).length ) {
    const duyet = (id) => {
      axios.post(
        `https://api.maoleng.dev/api/mng/contract/form_confirm/${id}`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        }
      )
        .then((data) => {
          console.log(data);
        });
    }

    return (
      <div className="w-full flex justify-center items-center">
        <table className="border">
          <thead>
            <tr>
              <th className="border">id</th>
              <th className="border">mssv</th>
              <th className="border">Tên học sinh</th>
              <th className="border">học kì đăng kí</th>
              <th className="border">loại phòng</th>
              <th className="border">đăng kí vào lúc</th>
              <th className="border">Xem chi tiết học sinh</th>
              <th className="border">duyệt</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => {
              return (
                <tr key={index}>
                  <td className="border">{room.contract_id}</td>
                  <td className="border">{room.student_id}</td>
                  <td className="border">{room.name}</td>
                  <td className="border">{room.season}</td>
                  <td className="border">{room.room_type}</td>
                  <td className="border">{room.register_time}</td>
                  <td className="border">
                    <button className="border bg-black text-white">Xem</button>
                  </td>
                  <td className="border">
                    <button onClick={() => duyet(room.contract_id)} className="border bg-black text-white">Duyệt</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default MngRoomRegisters;
