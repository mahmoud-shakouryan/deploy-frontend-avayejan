import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { toast } from "react-toastify";
import { useState } from "react";
import VideoDetail from "../screens/VideoDetail.js";
import { getHahtagForm } from "../utils/utils.js";

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { id, videoName, category, price, duration, imgSrc } = video;
  const TOMAN = price / 10;

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const options = {
    style: {
      font: "shabnam",
      textAlign: "center",
      color: "#16001E",
      fontFamily: "firstFont",
      fontSize: "14px",
      fontWeight: "bold",
    },
  };

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

  const addToCardHandler = () => {
    if (!userInfo) {
      toast.warn("ابتدا وارد حساب شوید", options);
      return navigate("/signin?redirect=videos?page=1");
    }
    navigate(`/card/${id}`);
  };

  return (
    <div className="bg-superLightBlue bg-active shadow-sm shadow-active rounded-xl p-1 w-40 sm:w-52 h-56 sm:h-68 bg-white flex flex-col items-center justify-start  font-firstFont">
      {showModal && (
        <VideoDetail
          id={id}
          showModalHandler={showModalHandler}
          closeModalHandler={closeModalHandler}
        />
      )}

      <div className="h-48 overflow-hidden w-full items-center justify-center">
        <img src={imgSrc} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="text-center font-bold text-dark">
        <p className="text-[10px]">{videoName}</p>
        <p className="font-secondFont text-hashtag text-[8px]">
          {getHahtagForm(category)}
        </p>
      </div>
      <div className="bg-red">
        <div className="text-[8px] w-full">
          <button
            onClick={showModalHandler}
            className="h-full w-full p-2 font-bold text-dark flex items-center justify-center gap-2"
          >
            <MoreHorizIcon style={{ fontSize: "14px" }} />
            <span>توضیح بیشتر</span>
          </button>
        </div>
        <div className="text-[8px] w-full">
          {cardItems && cardItems.find((cardItem) => cardItem.id === id) ? (
            <button
              className="h-full w-full p-2 bg-dark font-bold text-dark flex items-center justify-center gap-2"
              onClick={() =>
                removeFromCartHandler(
                  cardItems.find((cardItem) => cardItem.id === id).id
                )
              }
            >
              <DeleteOutlineOutlinedIcon style={{ fontSize: "14px" }} />
              <span>حذف از سبد خرید</span>
            </button>
          ) : (
            <button
              className="h-full w-full p-2 bg-dark font-bold text-dark flex items-center justify-center gap-2"
              onClick={addToCardHandler}
            >
              <AddShoppingCartIcon style={{ fontSize: "14px" }} />
              <span>افزودن به سبد خرید</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
