"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const SomatomMenu = () => {
  const { onProductClick, onSeeClinicImpact } = useContentRedirect();
  const router = useRouter();

  const onGotoSomatomMenu = () => {
    router.push("/master/somatom-menu");
  };

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <div className="flex m-12 justify-start">
        <div className="bg-orange  ml-2 p-2 rounded-lg w-[450px] font-bold text-2xl ">
          <p className="p-2" onClick={onGotoSomatomMenu}>
            Volver a SOMATOM Pro.pulse
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center ">
        <div onClick={() => onProductClick("somatom-cardio")}>
          <div className="">
            <Image src="/somatom-impact/1.png" width={450} height={450} />
          </div>
          <div className=" w-[450px] py-1 font-bold  border-b-indigo-500 mt-3">
            <p className="text-4xl p-4 ">Cuidado Cardiovascular</p>
          </div>
        </div>
        <div onClick={() => onProductClick("somatom-pulmonar")}>
          <div className="">
            <Image src="/somatom-impact/2.png" width={450} height={450} />
          </div>
          <div className=" w-[450px] py-1 font-bold  border-b-indigo-500 mt-3">
            <p className="text-4xl p-4 ">Cuidado Pulmonar</p>
          </div>
        </div>
        <div onClick={() => onProductClick("somatom-neurologico")}>
          <div className="">
            <Image src="/somatom-impact/3.png" width={450} height={450} />
          </div>
          <div className=" w-[450px] py-1 font-bold  border-b-indigo-500 mt-3">
            <p className="text-4xl p-4 ">Cuidado Neurológico</p>
          </div>
        </div>
        <div onClick={() => onProductClick("somatom-pediatrico")}>
          <div className="">
            <Image src="/somatom-impact/4.png" width={450} height={450} />
          </div>
          <div className=" w-[450px] py-1 font-bold  border-b-indigo-500 mt-3">
            <p className="text-4xl p-4 "> Cuidado Pediátrico </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomatomMenu;
