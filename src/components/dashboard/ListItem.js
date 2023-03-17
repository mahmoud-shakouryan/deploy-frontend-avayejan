import { enToPerNum, formattedPersianPrice } from "../../utils/utils";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const liStyle =
  "w-full flex items-center justify-center gap-2 text-[10px] sm:text-[11px] md:text-[12px]";

const ListItem = ({ index, user }) => {
  return (
    <tbody>
      <tr className="bg-vio w-[300px] h-28 text-xs font-secondFont flex items-center rounded overflow-hidden">
        <td className="w-10 bg-shade h-full flex flex-col items-center justify-center">
          <span className="basis-1/ flex items-center justify-center">
            {enToPerNum(index + 1)}
          </span>
          <span className="basis-2/3 flex items-center justify-center sm:hover:bg-vio sm:hover:text-shade cursor-pointer w-full h-full">
            <ModeEditOutlineOutlinedIcon style={{ fontSize: "20px" }} />
          </span>
          <span></span>
        </td>
        <td className="w-full h-full text-shade flex flex-col items-center justify-center">
          <ul className="w-full h-full flex flex-col justify-between gap-1">
            <li className={liStyle}>
              <span className="w-11/12 text-center">{user.name}</span>
              <span className="w-1/12">
                <BadgeOutlinedIcon style={{ fontSize: "19px" }} />
              </span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">{user.email}</span>
              <span className="w-1/12">
                <AlternateEmailOutlinedIcon style={{ fontSize: "19px" }} />
              </span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">
                {user.paidVidIds.length > 0
                  ? enToPerNum(user.paidVidIds.join(" / "))
                  : "بدون خرید"}
              </span>
              <span className="w-1/12">
                <LocalMallOutlinedIcon style={{ fontSize: "19px" }} />
              </span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">
                {formattedPersianPrice(user.paysSoFar)}
              </span>
              <span className="w-1/12">
                <PaidOutlinedIcon style={{ fontSize: "19px" }} />
              </span>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
