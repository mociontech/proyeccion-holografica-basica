"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useContentRedirect from "@/hooks/useContentRedirect";

const VideoAvatar2 = () => {

    const { pantallaAvatars } = useContentRedirect();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="relative w-screen">
        <video className="w-screen" autoPlay muted onEnded={pantallaAvatars}>
          <source src={`/videos/Pili_Pantalla.mp4`} />
        </video>
      </div>
    </main>
  );
};

export default VideoAvatar2;