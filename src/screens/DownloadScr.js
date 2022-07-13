import DownloadItem from "../components/DownloadItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { videoList } from "../store/actions/videoActions";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { dlListAction } from "../store/actions/dlListActions";
import ErrorBox from "../components/ErrorBox";
import { toast } from 'react-toastify';



const DownloadScr = () => {

  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;

  const { videoIdsArr, loading, error } = useSelector( state => state.dlListReducer );
  const { videos } = useSelector( state => state.videoListReducer);
  const [searchParams] = useSearchParams();
  let status = searchParams.get('status');
  console.log(status)
  const order_id = searchParams.get('order_id');
  const payId = searchParams.get('id');

  const myVideos = [];
  if(videoIdsArr){
    for (let id of videoIdsArr){
      const video = videos.find( video => video.id === id);
      myVideos.push(video);
    }
    console.log(myVideos)
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!userInfo){
      toast.warn('ابتدا وارد حساب شوید');
      return navigate('/signin');
    }
    if(status){
      dispatch(dlListAction(userInfo._id, status, order_id, payId));
       dispatch(videoList());
    }
    if(!status){
      console.log('umad')
      dispatch(dlListAction(userInfo._id, status = null, order_id, payId));
       dispatch(videoList());
    }
  },[dispatch]);

  
  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-14 flex justify-center gap-3">
       { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/>
       :videoIdsArr.length ==0 ? <div className="w-full font-firstFont font-semibold text-dark text-center"> شما تاکنون هیچ ویدیویی خریداری نکرده‌اید</div>
       :(
        myVideos.map( myVideo => <DownloadItem key={myVideo.id} video={myVideo}/>)
       )
       }
    </div>
  )
}

export default DownloadScr;