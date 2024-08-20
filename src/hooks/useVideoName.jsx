import { useState } from "react";
import { socket } from "@/socket";

import useAnimationStatus from "./useAnimationStatus";

const useVideoName = () => {
  const { emitAnimationStatus, animationStatus } = useAnimationStatus();
  const [video, setVideo] = useState("acuson-menu");
  
  const emitVideoName = (videoName) => {
    try {
      emitAnimationStatus("exit");
      setTimeout(() => {
        socket.emit("videoName", videoName);
      }, 100);
      setVideoName(videoName);
    } catch (error) {
      console.log(error);
    }
  };

  const setVideoName = async (videoName) => {
    try {
      setVideo(videoName);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    video,
    setVideoName,
    emitVideoName,
  };
};

export default useVideoName;
