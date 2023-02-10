import DashboardIcon from "@mui/icons-material/Dashboard";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {





    const liStyle = "w-full h-full flex items-center justify-center gap-1 sm:hover:bg-active py-2 text-xs cursor-pointer";



  return (
    <div className="basis-1/6 font-firstFont text-dark bg-superLightBlue border-l border-lightBlue">
      <div className="border-b border-lightBlue text-basis text-center py-2">
        آوای جان
      </div>
      <ul className=" flex flex-col items-center justify-center gap-3">
        <li className={liStyle}>
          <span>داشبورد</span>
          <DashboardIcon style={{fontSize:'18px'}}/>
        </li>
        <li className={liStyle}>
          <span>کاربران</span>
          <PeopleOutlinedIcon style={{fontSize:'18px'}}/>
        </li>
        <li className={liStyle}>
          <span>ویدیوها</span>
          <VideoLibraryOutlinedIcon style={{fontSize:'18px'}}/>
        </li>
        <li className={liStyle}>
          <span>خریدها</span>
          <LocalMallOutlinedIcon style={{fontSize:'18px'}}/>
        </li>
        <li className={liStyle}>
          <span>خروج</span>
          <LogoutIcon style={{fontSize:'18px'}}/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
