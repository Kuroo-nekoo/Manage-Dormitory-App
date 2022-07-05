import * as React from "react";
import axios from "axios";

const StdRoomRegistered = () => {
  const onSubmitMistake = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('student_card_id', '294E9299');
    formData.append('is_fix_mistake', 'false');

    console.log(formData);

    axios.post(
      'https://api.maoleng.dev/api/mng/mistake',
      formData,
      {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }
    )
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={onSubmitMistake} encytpe="ENCTYPE_HERE">
      <input type="text" name="content" />
      <input type="file" name="images[]" multiple />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StdRoomRegistered;