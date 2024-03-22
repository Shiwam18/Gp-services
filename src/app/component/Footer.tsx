import fb from "@/app/public/icons8-fb-50.png"
import tw from "@/app/public/icons8-twitter-32.png"
import insta from "@/app/public/icons8-instagram-50.png"
import linkedin from "@/app/public/icons8-linked-in-50.png"
import call from "@/app/public/icons8-call-50.png"
import mail from "@/app/public/icons8-mail-50 (1).png"
import location from "@/app/public/icons8-location-50.png"
import Image from "next/image"

export default function Footer(){
    return (
        <>
            <div className=" bg-[#003153] flex justify-evenly">

                <div className="text-white w-1/4 mt-28">

                    <div className=" font-md text-5xl">
                        <span className=" text-cyan-500">Md</span>.co.uk
                    </div>

                    <div className="">
                        <p className="py-5">
                            Lorem ipsum dolor sit amet 
                            onsectetur adipisicing elit. Ipsum,
                            assumenda maiores! Impedit voluptatum 
                            vitae illum nemo dicta id atque aliquam 
                            blanditiis, vel commodi doloremque.
                        </p>
                    </div>
                    <div className="flex justify-start ml-0">
                        <Image src={fb} alt="fb" className="h-5 w-5 mr-6"/>
                        <Image src={tw} alt="fb" className="h-5 w-5 mr-6" />
                        <Image src={linkedin} alt="fb" className="h-5 w-5 mr-6" />
                        <Image src={insta} alt="fb" className="h-5 w-5 mr-6" />
                        
                    </div>
                </div>

                <div>

                    <div className=" text-white mt-28 font-bold text-2xl">
                        For Patients
                    </div>
                    <ol className=" list-disc my-4">
                        <li className="my-2 text-cyan-500 font-md text-md">Search for Doctors</li>
                        <li className="my-2 text-white font-md text-md">Login</li>
                        <li className="my-2 text-white font-md text-md">Register</li>
                        <li className="my-2 text-white font-md text-md">Booking</li>
                        <li className="my-2 text-white font-md text-md">Patient Dashboard</li>
                    </ol>
                </div>
                <div>
                    <div className=" text-white mt-28 font-bold text-2xl">
                        For Doctors
                    </div>
                    <ol className=" list-disc my-4">
                        <li className="my-2 text-white font-md text-md">Appointments</li>
                        <li className="my-2 text-white font-md text-md">Chat</li>
                        <li className="my-2 text-white font-md text-md">Login</li>
                        <li className="my-2 text-white font-md text-md">Register</li>
                        <li className="my-2 text-white font-md text-md">Doctor Dashboard</li>
                    </ol>
                </div>
                <div>
                    <div className=" text-white mt-28 font-bold text-2xl">Contact Us</div>
                    <ul>
                        <li className="my-2 text-white font-md text-md mt-4">
                            <div className=" flex mb-5">
                                <Image src={call} alt="call" className="w-8 mr-1" />
                                <div className=" py-[1px] px-2">
                                020 7183 2362
                                </div>
                            </div>
                            <div className="flex mb-5">
                            <Image src={mail} alt="mail" className="w-8 mr-1" />
                                <div className=" py-[1px] px-2">
                                info@md.co.uk
                                </div>
                            </div>
                            <div className="flex">
                                <Image src={location} alt="location" className="w-8 mr-1" />
                                <div className=" py-[1px] px-2">
                                112 Harley Street, London,
                                </div>
                            </div>
                            <div className=" ml-12">
                                UK, 94108
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="w-full h-20 bg-blue-950 flex pl-40 text-white py-5 font-medium">Copyright &#169; 2024 All Rights Reserved. 
                <span className=" text-cyan-500 px-1">Md.co.uk</span>

                <div className=" flex ml-[500px]">
                    <div>
                        Terms & Conditions
                    </div>
                    <div className=" w-[1px] h-3  bg-gray-300 mt-2 mx-8"></div>
                    <div>Privacy Policy</div>
                    <div className=" w-[1px] h-3  bg-gray-300 mt-2 mx-8"></div>
                    <div>Membership Benifits</div>
                </div>
            </div>
        </>
    )
}