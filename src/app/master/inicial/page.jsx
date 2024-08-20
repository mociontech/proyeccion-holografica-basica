"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";
import { useState } from 'react';

const PantallaInicial = () => {
    const {  pantallaAvatars } = useContentRedirect();
  const router = useRouter();

//   const onGotoSomatomMenu = () => {
//     router.push("/master/somatom-menu");
//   };

const [videoPlaying, setVideoPlaying] = useState(false);

const handleImageClick = () => {
  setVideoPlaying(true);
};

const handleVideoEnd = () => {
  pantallaAvatars();
};

  return (
    <main className="flex min-h-screen flex-col items-center  justify-start " style={{backgroundColor:"#081ab7",maxHeight:"1080px"}} >
      {!videoPlaying ? (
        <div
          className="w-screen h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/botoninicio.png')` }}
          onClick={handleImageClick}
        ></div>
      ) : (
        <video
          className="w-screen "
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={`/videos/BotonAnimacion.mp4`} />
        </video>
      )}
    </main>
  );
};

export default PantallaInicial;
