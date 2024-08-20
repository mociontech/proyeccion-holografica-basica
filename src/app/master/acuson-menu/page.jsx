"use client";

import Image from "next/image";
import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const AcusonMenu = () => {
  const { onProductClick } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <div className="flex m-12 justify-between">
        <h3 className="ml-2 w-[950px] text-6xl font-bold  text-orange bree-text">
          Un nuevo nivel de rendimiento <br /> está ahora al alcance de la mano
        </h3>
        <div className="flex m-h-[50px]">
          <Image
            src="/acuson-menu/icono.png"
            width={50}
            height={50}
            className="h-[50px]"
          />
          <div
            className="flex justify-center items-center ml-4 bg-green p-4 rounded-lg w-[300px] font-bold text-2xl text-center h-[50px]"
            onClick={() => onProductClick("acuson-caracteristicas")}
          >
            <p>Características</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-top mt-20 ">
        <div onClick={() => onProductClick("acuson-obtenga")}>
          <Image src="/acuson-menu/1.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Obtenga imágenes de alta calidad para mejorar la interpretación
              del diagnóstico
            </p>
          </div>
        </div>
        <div>
          <Image src="/acuson-menu/2.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Descubra la versatilidad clínica empoderada por la tecnología
              ACUSON
            </p>
            <div className="flex justify-end ">
              <div onClick={() => onProductClick("acuson-descubra-1")}>
                <Image src="/btn-1.png" width={60} height={60} />
              </div>
              <div onClick={() => onProductClick("acuson-descubra-2")}>
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
        <div onClick={() => onProductClick("acuson-atienda")}>
          <Image src="/acuson-menu/3.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Atienda todas las necesidades clínicas del paciente en diversas
              especialidades
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("acuson-optimice")}>
          <Image src="/acuson-menu/4.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Optimice su flujo de trabajo con herramientas de IA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcusonMenu;
