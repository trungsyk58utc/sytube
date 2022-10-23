import React from "react";
import "./VideoInChannel.css";
import moment from "moment";
import "moment/locale/vi";
import { useParams, useNavigate } from "react-router-dom";
import { useGetActivitiesQuery } from "../channel.service";

const VideoInChannel = () => {
  const params = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { data } = useGetActivitiesQuery(params.id);

  return (
    <div className="row">
      {data?.items.map((item, index) => (
        <div
          key={index}
          className="card me-4"
          style={{ width: "18rem", cursor: "pointer" }}
          onClick={() =>
            navigate(`/detail/${item.contentDetails.upload.videoId}`)
          }
        >
          <img
            src={item.snippet.thumbnails.high.url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{item.snippet.title}</h6>
            <p className="card-text">
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoInChannel;
