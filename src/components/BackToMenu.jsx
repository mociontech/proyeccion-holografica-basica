import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";

const BackToMenu = () => {
  const { onBackToMenu } = useContentRedirect();

  return (
    <div
      onClick={onBackToMenu}
      className="flex flex-col justify-center items-center"
    >
      <div className="bg-green p-1 rounded w-[200px] text-xl font-black flex justify-center ">
        <Image src="/somatom-menu/abajo.png" width={40} height={40} />
      </div>
      <div className=" text-center p-2 rounded w-[400px] text-2xl font-black  ">
        <p>Menú principal</p>
      </div>
    </div>
  );
};

export default BackToMenu;
