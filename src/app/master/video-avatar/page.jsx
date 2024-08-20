"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VideoView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const videoId = pathname.split("/").pop();

  useEffect(() => {
    if (!videoId) {
      router.push("/"); // Redirigir a la pantalla inicial si no hay videoId
    }
  }, [videoId, router]);

  const onBackToHomeScreen = () => {
    router.push("/"); // Función para regresar a la pantalla inicial
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="relative w-screen">
        <video className="w-screen" autoPlay muted onEnded={onBackToHomeScreen}>
          <source src={`/videos${videoId}.mp4`} />
        </video>
      </div>
    </main>
  );
};

export default VideoView;
