"use client";

import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const MagnetomMenu = () => {
  const { onProductClick } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <h3 className="ml-14 fon text-6xl font-bold  text-orange  bree-text">
        Explore sobre nuestro producto
      </h3>
      <div className="grid grid-cols-4 justify-items-center items-top mt-20 ">
        <div onClick={() => onProductClick("magnetom-infraestructura")}>
          <Image src="/magnetom-menu/1.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">Infraestructura sostenible</p>
          </div>
        </div>
        <div onClick={() => onProductClick("magnetom-flujo")}>
          <Image src="/magnetom-menu/2.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">Flujo de trabajo simplificado</p>
          </div>
        </div>
        <div onClick={() => onProductClick("magnetom-excelencia")}>
          <Image
            src="/magnetom-menu/3.png"
            width={400}
            height={400}
            className="max-h-[472px]"
          />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">Excelencia Clínica</p>
          </div>
        </div>
        <div onClick={() => onProductClick("magnetom-eficiencia")}>
          <Image src="/magnetom-menu/4.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">Eficiencia Operativa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagnetomMenu;
