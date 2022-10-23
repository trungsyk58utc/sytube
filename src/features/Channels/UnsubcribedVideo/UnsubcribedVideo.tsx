import React from "react";
import { useSelector } from "react-redux";
import { useGetDetailQuery } from "../../DetailVideo/detail.service";
import { selectUnsubcribedTrailer } from "../channelSlice";
import ReactPlayer from "react-player/youtube";
import "./Unsubcribed.css";
import moment from "moment";
import "moment/locale/vi";
import { useNavigate } from "react-router-dom";

const UnsubcribedVideo = () => {
  const navgate = useNavigate();
  const unsubcribedTrailer: any = useSelector(selectUnsubcribedTrailer);
  const { data } = useGetDetailQuery(unsubcribedTrailer);

  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-5">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${unsubcribedTrailer}`}
            controls={true}
            width="100%"
            height="250px"
            playing={true}
          />
        </div>
        <div className="col-7">
          {data?.items.map((video, index) => (
            <span key={index}>
              <p className="brand-title">
                <b>{video.snippet.title}</b>
              </p>
              <p className="brand-info">
                {video.statistics.viewCount} lượt xem -{" "}
                {moment(video.snippet.publishedAt).fromNow()}
              </p>
              <p className="brand-video-description">
                {video.snippet.description}
              </p>
              <p
                className="continue"
                onClick={() => navgate(`/detail/${unsubcribedTrailer}`)}
              >
                Đọc tiếp...
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnsubcribedVideo;
