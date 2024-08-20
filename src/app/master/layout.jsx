"use client";
import { socket } from "@/socket";
import useAnimationStatus from "@/hooks/useAnimationStatus";
import useVideoName from "@/hooks/useVideoName";

const MasterLayout = ({ children }) => {
  const { animationStatus, updateAnimationStatus } = useAnimationStatus();
  const { video, setVideoName } = useVideoName();

  socket.on("animationStatus", (newAnimationStatus) => {
    updateAnimationStatus(newAnimationStatus);
  });

  socket.on("videoName", (videoName) => {
    setVideoName(videoName);
  });

  if (video === "stand-by") {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen">
      {/* <p>{animationStatus}</p> */}
      {children}
    </div>
  );
};

export default MasterLayout;
