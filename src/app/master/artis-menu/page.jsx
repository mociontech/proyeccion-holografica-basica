"use client";

import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const ArtisMenu = () => {
  const { onProductClick } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <h3 className="ml-14 fon text-6xl font-bold w-[950px] text-orange bree-text">
        Explore cómo ARTIS icono impulsa su rendimiento diario
      </h3>
      <div className="grid grid-cols-4 justify-items-center items-top mt-20 ">
        <div>
          <Image src="/artis-menu/1.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Acceda a nuevas funciones para optimizar el tratamiento del ACV
            </p>
            <div className="flex justify-end ">
              <div onClick={() => onProductClick("artis-acceda")}>
                <Image src="/btn-1.png" width={60} height={60} />
              </div>
              <div onClick={() => onProductClick("artis-acceda-2")}>
                <Image
                  className="ml-5"
                  src="/btn-2.png"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => onProductClick("artis-mejore")}>
          <Image src="/artis-menu/2.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Mejore su flujo de trabajo con un sistema intuitivo y versátil en
              radiología intervencionista
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("artis-conozca")}>
          <Image src="/artis-menu/3.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">Conozca la familia ARTIS icono</p>
          </div>
        </div>
        <div onClick={() => onProductClick("artis-potencie")}>
          <Image src="/artis-menu/4.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Potencie su práctica clínica con ventajas competitivas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisMenu;
