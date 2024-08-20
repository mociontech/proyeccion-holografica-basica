"use client";

import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const MamommatMenu = () => {
  const { onProductClick } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <h3 className="ml-14 fon text-6xl font-bold  text-orange bree-text mt-20">
        Explore sobre nuestro producto
      </h3>
      <div className="grid grid-cols-4 justify-items-center items-top mt-40 ">
        <div onClick={() => onProductClick("mamommat-estandar-1")}>
          <Image src="/mamommat-menu/1.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              ¿Cuál es el nuevo estandar de calidad de imagen?
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("mamommat-mejora")}>
          <Image src="/mamommat-menu/2.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              ¿En qué mejora en la experiencia del paciente?
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("mamommat-elimina")}>
          <Image src="/mamommat-menu/3.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              ¿Cómo eliminar las interrupciones en el proceso diagnóstico
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("mamommat-rentable")}>
          <Image src="/mamommat-menu/4.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">¿Por qué es rentable?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MamommatMenu;
