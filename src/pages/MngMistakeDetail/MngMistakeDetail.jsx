import * as React from "react";
import axios from "axios";

const MngMistakeDetail = () => {
  const [mistake, setMistake] = React.useState(null);

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/mng/mistake/2239', 
      {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
      }
    )
      .then((data) => {
        setMistake(data.data.data);
      });
  }, []);

  console.log(mistake);

  if ( mistake != null ) {
    return (
      <div>mistakes</div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default MngMistakeDetail;