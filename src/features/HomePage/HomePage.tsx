import React from "react";
import { homeAPI } from "../../api/homeAPI";

const HomePage = () => {
  React.useEffect(() => {
    homeAPI.getActivities().then((data) => {
      console.log(data);
    });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
