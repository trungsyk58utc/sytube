import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Channels from "../features/Channels/Channels";
import DetailVideo from "../features/DetailVideo/DetailVideo";
import HomePage from "../features/HomePage/HomePage";
import SearchPage from "../features/SearchPage/SearchPage";

const RoutePage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail" element={<DetailVideo />}>
        <Route path=":id" element={<DetailVideo />} />
      </Route>
      <Route path="/search" element={<SearchPage />}>
        <Route path=":keyword" element={<SearchPage />} />
      </Route>
      <Route path="/channels" element={<Channels />}>
        <Route path=":id" element={<Channels />}></Route>
      </Route>
      <Route path="/*" element={<Navigate to="home" />} />
    </Routes>
  );
};

export default RoutePage;
