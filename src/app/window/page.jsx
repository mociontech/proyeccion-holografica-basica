"use client";

import { useEffect, useState, useMemo } from "react";
import useAnimationStatus from "@/hooks/useAnimationStatus";
import useVideoName from "@/hooks/useVideoName";

import { socket } from "@/socket";

const SomatomPage = () => {
  const { video, setVideoName } = useVideoName();
  const { emitAnimationStatus, animationStatus, updateAnimationStatus } =
    useAnimationStatus();

  const onStartVideoEnded = () => {
    emitAnimationStatus("loop");
  };

  const memoizedAnimationStatus = useMemo(() => {
    if (animationStatus === "exit" || animationStatus === "start") {
      return video;
    }
  }, [animationStatus]);

  console.log(memoizedAnimationStatus);

  const onExitVideoEnded = () => {
    emitAnimationStatus("start");
  };

  socket.on("videoName", (videoName) => {
    setVideoName(videoName);
  });

  socket.on("animationStatus", (newAnimationStatus) => {
    updateAnimationStatus(newAnimationStatus);
  });

  if (animationStatus === "exit" && video === "stand-by") {
    setVideoName("master-page");
  }

  if (video === "stand-by") {
    return (
      <div>
        <video
          key={`${video}-stand-by-start.mp4`}
          className="w-screen h-screen "
          autoPlay
          muted
          loop
        >
          <source src={`/videos/${memoizedAnimationStatus}/start.mp4`} />
        </video>
      </div>
    );
  }

  if (animationStatus === "exit") {
    return (
      <div>
        {animationStatus}
        <video
          key={`${video}-exit.mp4`}
          className="w-screen h-screen "
          autoPlay
          muted
          onEnded={onExitVideoEnded}
        >
          <source src={`/videos/${memoizedAnimationStatus}/exit.mp4`} />
        </video>
      </div>
    );
  }
  if (animationStatus === "start") {
    return (
      <div>
        {animationStatus}
        <video
          key={`${video}-start.mp4`}
          className="w-screen h-screen "
          autoPlay
          muted
          onEnded={onStartVideoEnded}
        >
          <source src={`/videos/${memoizedAnimationStatus}/start.mp4`} />
        </video>
      </div>
    );
  }
  if (animationStatus === "loop") {
    return (
      <div>
        {animationStatus}
        <video
          key={`${video}-loop.mp4`}
          className="w-screen h-screen "
          autoPlay
          muted
          /* onClick={onLoopVideoClick} */
        >
          <source src={`/videos/${video}/loop.mp4`} />
        </video>
      </div>
    );
  }
};

export default SomatomPage;
