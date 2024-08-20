import { useRouter } from "next/navigation";
import useVideoName from "./useVideoName";
import VideoView from "@/app/master/video-avatar/page";

const useContentRedirect = () => {
  const router = useRouter();
  const { emitVideoName } = useVideoName();

  const onBackToMenu = async () => {
    emitVideoName("master-page");
    router.push("/master/menu");
  };

  const onBackToHomeScreen = () => {
    emitVideoName("stand-by");
    router.push("/master");
  };

  const onMasterProductClick = (nameProduct) => {
    emitVideoName(`${nameProduct}-menu`);
    router.push(`/master/${nameProduct}-menu`);
  };

  const onProductClick = (nameProduct) => {
    emitVideoName(nameProduct);
  };

  const onSeeClinicImpact = () => {
    router.push("/master/somatom-impact");
  };

  const rutapantallainicial= (nameProduct) => {
    emitVideoName(nameProduct);
    router.push("/master/inicial");
  };

  const pantallaAvatars= () => {
    router.push("/master/menu-avatars");
  };

  const Avatar1= (nameProduct) => {
    emitVideoName(`${nameProduct}-menu`);
    router.push("/master/Avatar1");
  };
  const Avatar2= (nameProduct) => {
    emitVideoName(`${nameProduct}-menu`);
    router.push("/master/Avatar2");
  };
  const Avatar3= (nameProduct) => {
    emitVideoName(`${nameProduct}-menu`);
    router.push("/master/Avatar3");
  };

  // const pyClick = (nameProduct) => {
  //   emitVideoName(`${nameProduct}-menu`);
  // };

  return {
    onBackToMenu,
    onBackToHomeScreen,
    onMasterProductClick,
    onProductClick,
    onSeeClinicImpact,
    rutapantallainicial,
    pantallaAvatars,
    Avatar1,
    Avatar2,
    Avatar3,

  };
};

export default useContentRedirect;
