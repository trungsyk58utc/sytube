import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getList } from "./searchSlice";
import Loading from "../../component/Loading/Loading";

const SearchPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ keyword: string }>();
  const dispatch = useAppDispatch();
  const listSearch = useSelector(
    (state: RootState) => state.search.listSearchResults
  );
  const loading = useSelector((state: RootState) => state.search.loading);

  useEffect(() => {
    const promise = dispatch(getList(params.keyword));
    return () => {
      promise.abort();
    };
  }, [dispatch, params.keyword]);

  return (
    <div className="container">
      {loading ? (
        <>
          <h4 className="results-text mt-3 mb-3">
            Kết quả cho "{params.keyword}"
          </h4>
          {listSearch.map((data, index) => (
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SearchPage;
