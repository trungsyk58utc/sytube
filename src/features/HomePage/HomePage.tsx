import React from "react";
import "./HomePage.css";

const title = () => {
    return "Mọi dữ liệu được lấy từ Youtube. Do hạn chế về unit được gọi từ Youtube\n" +
        "        trong ngày (tối đa 10000 unit/1 ngày, mỗi lần load trang gọi 100-200\n" +
        "        unit) nên mọi thứ đã được tối giản hết mức có thể. Vui lòng không spam\n" +
        "        để tránh không thể tiếp tục truy cập."
}
const HomePage = () => {
  return (
    <div className="home container">
      <h4>
          {title()}
      </h4>
    </div>
  );
};

export default HomePage;
