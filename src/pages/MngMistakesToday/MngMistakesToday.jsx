import * as React from "react";

import { useManageGetMistakeToday } from './hooks';

const MngMistakesToday = () => {
  const [loaded, setLoaded] = React.useState(false);

  const manageGetMistakeToday = useManageGetMistakeToday();

  React.useEffect(() => {
    manageGetMistakeToday.mutate({}, {
      onSuccess(data) {
        console.log(data);
        setLoaded(true);
      }
    });
  }, []);

  return loaded ? (
    <div>mistakes</div>
  ) : (
    <h1>Loading..</h1>
  );
};

export default MngMistakesToday;