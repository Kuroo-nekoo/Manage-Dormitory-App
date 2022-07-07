import * as React from "react";

import { useManageGetMistakes } from './hooks';

const MngMistakes = () => {
  const [loaded, setLoaded] = React.useState(false);

  const manageGetMistakes = useManageGetMistakes();

  React.useEffect(() => {
    manageGetMistakes.mutate({}, {
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

export default MngMistakes;