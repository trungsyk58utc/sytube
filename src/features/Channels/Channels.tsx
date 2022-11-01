import React, { useEffect } from "react";
//import materialUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { useGetChannelQuery } from "./channel.service";
import "./Channels.css";
import { setUnsubcribedTrailer } from "./channelSlice";
import UnsubcribedVideo from "./UnsubcribedVideo/UnsubcribedVideo";
import VideoInChannel from "./VideoInChannel/VideoInChannel";
import ChannelIntroduction from "./ChannelIntroduction/ChannelIntroduction";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="span"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Channels = () => {
  const params = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const { data } = useGetChannelQuery(params.id);
  useEffect(() => {
    if (
      data?.items[0].brandingSettings.channel.unsubscribedTrailer !== undefined
    ) {
      dispatch(
        setUnsubcribedTrailer(
          data?.items[0].brandingSettings.channel.unsubscribedTrailer
        )
      );
    }
  }, [dispatch, data]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="container mt-3">
      {data?.items.map((chanelData, index) => (
        <span key={index}>
          <div
            style={{
              width: "100%",
              height: "80px",
              background: `url(${chanelData.brandingSettings.image.bannerExternalUrl}) 0px 185px`,
            }}
          ></div>
          <div className="row mt-3">
            <div className="col-1">
              <img
                className="channel-img"
                src={`${chanelData.snippet.thumbnails.default.url}`}
                alt="img"
              />
            </div>
            <div className="col-4 mt-2">
              <h3 className="channel-title">{chanelData.snippet.title}</h3>
              <p className="subcriber-count">
                {chanelData.statistics.subscriberCount} người đăng ký
              </p>
            </div>
          </div>
        </span>
      ))}
      <Box sx={{ width: "100%", margin: "0", padding: "0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Trang Chủ" {...a11yProps(0)} />
            <Tab label="Video" {...a11yProps(1)} />
            <Tab label="Giới thiệu" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <UnsubcribedVideo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VideoInChannel />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ChannelIntroduction />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Channels;
