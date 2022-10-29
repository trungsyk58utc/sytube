import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./DetailVideo.css";
import { useGetDetailQuery } from "./detail.service";
const DetailVideo = () => {
  const params = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { data } = useGetDetailQuery(params.id);

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-center mt-3">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${params.id}`}
          controls={true}
          width="65%"
          height="600px"
          playing={true}
        />
      </div>
      {data?.items.map((item) => (
        <div
          key={item.id}
          className="mx-auto mt-2"
          style={{ width: "65%", height: "100%" }}
        >
          <div className="title-detail-video h3">{item.snippet.title}</div>
          <div className="publish-date">
            {item.statistics.viewCount.toLocaleString()} lượt xem |{" "}
            {item.snippet.publishedAt.split("T")[0]} |{" "}
            <i className="fa-solid fa-thumbs-up"></i>
            {item.statistics.likeCount} | {item.statistics.commentCount} comment
          </div>
          <div
            className="channel-title"
            onClick={() => navigate(`/channels/${item.snippet.channelId}`)}
          >
            Đăng bởi: {item.snippet.channelTitle}
          </div>
          <hr />
          <div className="description-text">{item.snippet.description}</div>
        </div>
      ))}
    </div>
  );
};

export default DetailVideo;
