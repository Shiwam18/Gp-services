import Image from "next/image";
import Header from "./component/header"; 
import Bedcrum from "./component/bedcrum";
import myImg from "@/app/public/inner-banner.png"
import Main from "./component/main";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <>
      <Header/>
      <div className="relative">
        <div className=" absolute inset-0 flex z-5 my-40 mx-40 font-bold text-blue-900 text-5xl">
          GP services
        </div>
        <Image src={myImg} width={1920} height={300} alt="doctor group photo"/>
      </div>
      <Bedcrum />
      <Main />
      <Footer />
    </>
  );
}
