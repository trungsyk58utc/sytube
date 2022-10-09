import React from "react";
import "./HomePage.css";
import { errorSwal } from "../../shared/alert";

const HomePage = () => {
  return (
    <div className="home container">
      <button onClick={() => errorSwal()}>Clickđasadsdsa</button>
      <h4>
        Mọi dữ liệu được lấy từ Youtube. Do hạn chế về unit được gọi từ Youtube
        trong ngày (tối đa 10000 unit/1 ngày, mỗi lần load trang gọi 100-200
        unit) nên mọi thứ đã được tối giản hết mức có thể. Vui lòng không spam
        để tránh không thể tiếp tục truy cập.
      </h4>
    </div>
  );
};

export default HomePage;
