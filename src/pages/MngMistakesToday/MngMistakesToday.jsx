import * as React from "react";
import axios from "axios";

const MngMistakesToday = () => {
  const [mistakes, setMistakes] = React.useState([]);

  React.useEffect(() => {
    axios.get(
      'https://api.maoleng.dev/api/mng/mistake?time=today', 
      {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
      }
    )
      .then((data) => {
        setMistakes(data.data.data);
      });
  }, []);

  console.log(mistakes);

  if ( Object.keys(mistakes).length ) {
    return (
      <div>mistakes</div>
    )
  }
  else {
    return <h1>Loading..</h1>
  }
};

export default MngMistakesToday;