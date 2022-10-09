import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeAPI } from "../../api/homeAPI";
import { search } from "../../models/search";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";
import { errorSwal } from "../../shared/alert";

const SearchPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ keyword: string }>();
  const [listSearchResults, setListSearchResults] = useState<search>();
  const fetchListSearchResults = async (searchText: any) => {
    try {
      await homeAPI.getSearch(searchText).then((data: search) => {
        setListSearchResults(data);
      });
    } catch (error) {
      errorSwal();
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListSearchResults(params.keyword);
  }, [params.keyword]);

  return (
    <div className="container">
      <h4 className="results-text mt-3 mb-3">Kết quả cho "{params.keyword}"</h4>
      {listSearchResults?.items.map((data, index) => (
        <div className="row mb-3" key={index}>
          <div className="col-3">
            <img
              src={data.snippet.thumbnails.medium.url}
              className="img-interface"
              alt="High"
              onClick={() => navigate(`/detail/${data.id.videoId}`)}
            />
          </div>
          <div className="col-9">
            <div
              className="title h4"
              onClick={() => navigate(`/detail/${data.id.videoId}`)}
            >
              {data.snippet.title}
            </div>
            <p className="channel-title">{data.snippet.channelTitle}</p>
            <p className="description">{data.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
