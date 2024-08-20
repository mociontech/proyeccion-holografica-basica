"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const MenuAvatars = () => {
  const { rutapantallainicial, Avatar1,Avatar2,Avatar3 } = useContentRedirect();
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="relative w-screen">
        <video className="w-screen" autoPlay muted onEnded={() => rutapantallainicial("master-page")}>
          <source src={`/videos/menuavatars.mp4`} />
        </video>
        <div className="absolute inset-0 flex justify-around items-center">
          <div
            className="w-1/3 h-full bg-transparent cursor-pointer"
            onClick={() => Avatar1("somatom")}
          ></div>
          <div
            className="w-1/3 h-full bg-transparent cursor-pointer"
            onClick={() => Avatar2("acuson")}
          ></div>
          <div
            className="w-1/3 h-full bg-transparent cursor-pointer"
            onClick={() => Avatar3("mamommat")}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default MenuAvatars;

