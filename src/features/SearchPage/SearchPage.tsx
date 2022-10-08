import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeAPI } from "../../api/homeAPI";
import { search } from "../../models/search";
// import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
  const params = useParams<{ keyword: string }>();
  const [listSearchResults, setListSearchResults] = useState<search>();
  const fetchListSearchResults = async (searchText: any) => {
    try {
      await homeAPI.getSearch(searchText).then((data: search) => {
        setListSearchResults(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListSearchResults(params.keyword);
  }, [params.keyword]);

  // eslint-disable-next-line array-callback-return
  listSearchResults?.items.map((data, index) => {
    console.log(data);
  });

  return (
    <div className="container">
      <h4>Kết quả cho "{params.keyword}"</h4>
      {listSearchResults?.items.map((data, index) => (
        <div className="row mb-3" key={index}>
          <div className="col-3">
            <img src={data.snippet.thumbnails.medium.url} alt="High" />
          </div>
          <div className="col-9">
            <div className="title h4">{data.snippet.title}</div>
            <p className="channel-title">{data.snippet.channelTitle}</p>
            <p className="description">{data.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
