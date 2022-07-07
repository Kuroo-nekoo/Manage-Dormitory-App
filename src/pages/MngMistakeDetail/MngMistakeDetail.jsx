import * as React from "react";
import { useParams } from 'react-router-dom';

import { useManageGetMistakeDetail } from './hooks';

const MngMistakeDetail = () => {
  const [loaded, setLoaded] = React.useState(false);
  const { id } = useParams();

  const manageGetMistakeDetail = useManageGetMistakeDetail();

  React.useEffect(() => {
    manageGetMistakeDetail.mutate({id}, {
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

export default MngMistakeDetail;