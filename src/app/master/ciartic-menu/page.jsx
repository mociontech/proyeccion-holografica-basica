"use client";

import Image from "next/image";
import useContentRedirect from "@/hooks/useContentRedirect";
import BackToMenu from "@/components/BackToMenu";

const AcusonMenu = () => {
  const { onBackToMenu, onProductClick } = useContentRedirect();

  return (
    <div className="min-h-screen">
      <BackToMenu />
      <div
        className="flex m-6 justify-end"
        onClick={() => onProductClick("ciartic-muevase")}
      >
        <h3 className="ml-14 w-[1000px] text-6xl font-bold  text-orange bree-text">
          Descubra una nueva clase de arco en <br /> C 3D móvil completamente
          motorizado
        </h3>
        <Image src="/ciartic-menu/icono.png" width={60} height={60} />
        <div className="ml-4 bg-green p-4 rounded-lg w-[400px] font-bold text-2xl text-center ">
          <p>Muévase como nunca</p>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-top mt-20 ">
        <div onClick={() => onProductClick("ciartic-acelere")}>
          <Image src="/ciartic-menu/1.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Acelere y estandarice la adquisición de imágenes 2D y 3D en el
              quirófano.
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("ciartic-evite")}>
          <Image src="/ciartic-menu/2.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Evite tiempos muertos y retrasos en el quirófano.
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("ciartic-reduzca")}>
          <Image src="/ciartic-menu/3.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Reduzca la carga física del trabajo en el quirófano
            </p>
          </div>
        </div>
        <div onClick={() => onProductClick("ciartic-amplie")}>
          <Image src="/ciartic-menu/4.png" width={400} height={400} />
          <div className=" w-[400px] py-1 font-bold">
            <p className="text-4xl p-4 ">
              Amplíe sus capacidades de imagen intraoperatoria en 2D y 3D para
              diversos procedimientos quirúrgicos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcusonMenu;
