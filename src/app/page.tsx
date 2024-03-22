import Image from "next/image";
import Header from "./component/header"; 
import Bedcrum from "./component/bedcrum";
import myImg from "@/app/public/inner-banner.png"
import Main from "./component/main";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div >
      <Header/>
      <div className="relative">
        <div className=" absolute container w-full inset-0 flex z-5 my-auto mx-auto font-bold text-blue-900 text-5xl justify-start items-center">
          <span>GP services</span>
        </div>
        <Image src={myImg} width={2834} height={300} alt="doctor group photo"/>
      </div>
      <Bedcrum />
      <Main />
      <Footer />
    </div>
  );
}
