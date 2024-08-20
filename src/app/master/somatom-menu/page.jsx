"use client";

import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const SomatomMenu = () => {
  const { onProductClick, onSeeClinicImpact } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <div className="flex m-6 justify-between mt-[100px]">
        <h3 className="ml-14 fon text-6xl font-bold  text-orange bree-text">
          Explore sobre nuestro producto
        </h3>
        <div className="flex">
          <Image src="/somatom-menu/icono.png" width={60} height={60} />
          <button
            className="ml-4 bg-green p-2 rounded-lg w-[450px] font-bold text-2xl"
            onClick={onSeeClinicImpact}
          >
            <p>Vea el impacto clínico</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center mt-20 ">
        <div onClick={() => onProductClick("somatom-fuente")}>
          <Image src="/somatom-menu/1.png" width={450} height={450} />

          <div className=" w-[450px] py-1 font-bold">
            <p className="text-4xl p-4 ">¿Por qué doble fuente?</p>
          </div>
        </div>
        <div onClick={() => onProductClick("somatom-operacion")}>
          <Image src="/somatom-menu/2.png" width={450} height={450} />

          <div className=" w-[450px] py-1 font-bold">
            <p className="text-4xl p-4 ">¿Por qué su operación es intuitiva?</p>
          </div>
        </div>
        <div onClick={() => onProductClick("somatom-inversion")}>
          <Image src="/somatom-menu/3.png" width={450} height={450} />

          <div className=" w-[450px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              ¿Por qué hacer esta inversión inteligente?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomatomMenu;
