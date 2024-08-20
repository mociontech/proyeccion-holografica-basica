import { useState } from "react";
import { socket } from "@/socket";

const useAnimationStatus = () => {
  const [animationStatus, setAnimationStatus] = useState("start");
  const emitAnimationStatus = async (animation) => {
    socket.emit("animationStatus", animation);
    setAnimationStatus(animation);
  };
  const updateAnimationStatus = async (animation) => {
    setAnimationStatus(animation);
  };
  return {
    emitAnimationStatus,
    animationStatus,
    updateAnimationStatus,
  };
};

export default useAnimationStatus;
