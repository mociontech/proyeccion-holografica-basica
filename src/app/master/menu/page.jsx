"use client";

import Image from "next/image";

import useContentRedirect from "@/hooks/useContentRedirect";

const MasterMenu = () => {
  const { onMasterProductClick } = useContentRedirect();

  return (
    <div className="grid grid-cols-3 justify-items-center items-center min-h-screen ">
      <div onClick={() => onMasterProductClick("somatom")} id="somatom">
        <div className=" rounded-t-lg ">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[450px]"
          />
        </div>
      </div>
      <div onClick={() => onMasterProductClick("acuson")} id="acuson">
        <div className="  rounded-t-lg">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[450px]  "
          />
        </div>
      </div>
      <div onClick={() => onMasterProductClick("mamommat")} id="mamommat">
        <div className=" rounded-t-lg ">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[450px]"
          />
        </div>
      </div>
      <div onClick={() => onMasterProductClick("ciartic")} id="ciartic">
        <div className=" rounded-t-lg">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[450px]"
          />
        </div>
      </div>
      <div onClick={() => onMasterProductClick("magnetom")} id="magnetom">
        <div className=" rounded-t-lg">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[430px]"
          />
        </div>
      </div>
      <div onClick={() => onMasterProductClick("artis")} id="artis">
        <div className="  rounded-t-lg">
          <Image
            src="/1-1.png"
            width={385}
            height={450}
            className="max-h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MasterMenu;
