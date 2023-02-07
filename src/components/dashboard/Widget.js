import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Chart from "./Chart";


import { enToPerNum } from "../../utils/utils";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "کاربران",
        isMoney: false,
        link: "همه کاربران",
        icon: (
          <PeopleOutlinedIcon
            style={{
              color: "#d51b1b",
              backgroundColor: "#f29797",
              borderRadius: "2px",
              padding: "2px",
            }}
          />
        ),
      };
      break;
    case "payments":
      data = {
        title: "پرداختها",
        isMoney: true,
        link: "همه پرداختها",
        icon: (
          <LocalMallOutlinedIcon
            style={{
              color: "#3d3496",
              backgroundColor: "#938cd7",
              borderRadius: "2px",
              padding: "2px",
            }}
          />
        ),
      };
      break;
    case "views":
      data = {
        title: "بازدیدها",
        isMoney: false,
        link: "همه بازدیدها",
        icon: (
          <VisibilityOutlinedIcon
            style={{
              color: "#276c1a",
              backgroundColor: "#85dd75",
              borderRadius: "2px",
              padding: "2px",
            }}
          />
        ),
      };
      break;
    case "videos":
      data = {
        title: "ویدیوها",
        isMoney: false,
        link: "همه ویدیوها",
        icon: (
          <VideoLibraryOutlinedIcon
            style={{
              color: "#00997a",
              backgroundColor: "#66ffe0",
              borderRadius: "2px",
              padding: "2px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }



  return (
    <div className="w-80 h-80 p-2 bg-superLightBlue rounded-md shadow-sm shadow-dark flex flex-col font-firstFont">
      <div className="h-[25%] w-full flex items-center justify-between ">
        <span className="text-xs font-bold">{data.title}</span>
        <span className="flex">
          <KeyboardArrowUpOutlinedIcon />
          <span title='ماه اخیر نسبت به ماه گذشته'>
            {enToPerNum("100")}
            {data.isMoney && "$"}
          </span>
        </span>
      </div>
      <div className="h-[50%] w-full flex items-center justify-start"><Chart color={data.icon.props.style.color} bgColor={data.icon.props.style.backgroundColor}/></div>
      <div className="h-[25%] w-full flex items-center justify-between ">
        <span className="text-[11px] underline">{data.link}</span>
        <span>{data.icon}</span>
      </div>
    </div>
  );
};

export default Widget;
