"use client";
import { useEffect } from "react";

import useContentRedirect from "@/hooks/useContentRedirect";

export default function Home() {
  const { onBackToHomeScreen, rutapantallainicial } = useContentRedirect();

  useEffect(() => {
    onBackToHomeScreen();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center  justify-start ">
      <div>
        <video className="w-screen h-[90vh] " autoPlay muted loop>
          <source src={`/videos/master/loop.mp4`} />
        </video>
      </div>
      <div>
        <button
          className="bg-green p-2 rounded w-[400px] text-4xl font-black text-xl "
          onClick={() => rutapantallainicial("master-page")}
        >
          Iniciar
        </button>
      </div>
    </main>
  );
}
