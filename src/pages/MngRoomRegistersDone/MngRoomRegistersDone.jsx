import * as React from "react";
import axios from "axios";

const MngRoomRegistersDone = () => {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/mng/contract', 
      {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        }
      }
    )
      .then((data) => {
        console.log(data.data.data);
        setRooms(data.data.data);
      });
  }, []);

  if ( Object.keys(rooms).length ) {
    return (
      <div className="w-full flex justify-center items-center">
        <table className="border">
          <thead>
            <tr>
              <th className="border">id</th>
              <th className="border">mssv</th>
              <th className="border">Tên học sinh</th>
              <th className="border">học kì đăng kí</th>
              <th className="border">Phòng</th>
              <th className="border">Số tiền phải trả</th>
              <th className="border">Đã trả tiền</th>
              <th className="border">Duyệt vào lúc</th>
              <th className="border">Xem chi tiết học sinh</th>
              <th className="border">Xem chi tiết hóa đơn</th>
            </tr> 
          </thead>
          <tbody>
            {rooms.map((room, index) => {
              return (
                <tr key={index}>
                  <td className="border">{room.id}</td>
                  <td className="border">{room.student_id}</td>
                  <td className="border">{room.name}</td>
                  <td className="border">{room.season}</td>
                  {
                    (room.room === null) ? (
                      <td className="border">
                        <button type="button" data-modal-toggle="chon-phong" className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm vào phòng</button>
                      </td>
                    ) : (
                      <td className="border">{room.room.name}</td>
                    )
                  }
                  <td className="border">{room.subscription.price}</td>
                  <td className="border">{room.subscription.is_paid}</td>
                  <td className="border">{room.created_at}</td>
                  <td className="border">
                    <button className="border bg-black text-white">Xem</button>
                  </td>
                  <td className="border">
                    <button className="border bg-black text-white">Xem</button>
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

export default MngRoomRegistersDone;