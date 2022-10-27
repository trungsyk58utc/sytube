import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";
import Loading from "../../component/Loading/Loading";
import { useGetSearchQuery } from "./search.services";

const SearchPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ keyword: any }>();
  const { data, isLoading } = useGetSearchQuery(params.keyword);

  console.log(data, isLoading);
  return (
    <div className="container">
      {isLoading && <Loading />}
      {!isLoading && (
        <span>
          <h4 className="results-text mt-3 mb-3">
            Kết quả cho "{params.keyword}"
          </h4>
          {data?.items.map((video, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-3">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  className="img-interface"
                  alt="High"
                  onClick={() => navigate(`/detail/${video.id.videoId}`)}
                />
              </div>
              <div className="col-9">
                <div
                  className="title h4"
                  onClick={() => navigate(`/detail/${video.id.videoId}`)}
                >
                  {video.snippet.title}
                </div>
                <p className="channel-title">{video.snippet.channelTitle}</p>
                <p className="description">{video.snippet.description}</p>
              </div>
            </div>
          ))}
        </span>
      )}
    </div>
  );
};

export default SearchPage;
