import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { detailAPI } from "../../api/detailAPI";
import { detailVideo } from "../../models/detailVideo";
import "./DetailVideo.css";
const DetailVideo = () => {
  const params = useParams<{ id: string }>();
  const [dataDetailVideo, setDataDetailVideo] = useState<detailVideo>();

  const fetchListDetailVideo = async (id: any) => {
    try {
      await detailAPI.getDetail(id).then((response) => {
        setDataDetailVideo(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListDetailVideo(params.id);
  }, [params.id]);

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-center mt-5">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${params.id}`}
          controls={true}
          width="70%"
          height="600px"
          playing={true}
        />
      </div>
      <div className="mx-auto mt-2" style={{ width: "70%", height: "100%" }}>
        <div className="title-detail-video h3">
          {dataDetailVideo?.items[0].snippet.title}
        </div>
        <div className="channel-title">
          Đăng bởi: {dataDetailVideo?.items[0].snippet.channelTitle}
        </div>
        <div className="publish-date">
          Ngày xuất bản:{" "}
          {dataDetailVideo?.items[0].snippet.publishedAt.split("T")[0]}
        </div>
        <hr />
        <div className="description-text">
          {dataDetailVideo?.items[0].snippet.description}
        </div>
      </div>
    </div>
  );
};

export default DetailVideo;
