import Image from "next/image";
import Link from "next/link";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {FcLike} from "react-icons/fc";
import {AiFillEye} from "react-icons/ai";

export default function Artists() {
    return (

        <div className="mb-6 pb-4 px-6 sm:px-9">
                <div className=" mt-6 grid gap-y-6 md:grid-cols-4 md:gap-x-10  sm:grid-cols-2 sm:gap-10 ">
                {
                    data.map(mentor => (
                        <div key={mentor.id} className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <Image 
                                            src={mentor.courseImg} alt={mentor.altText} 
                                            width={250}
                                            height={250}
                                            quality={100}
                                            className="flex justify-center"
                                        />
                                </div>
                                <div className="flex flex-col justify-center p-2">
                                    <h3 className="text-xl text-gray-700 font-medium flex justify-center mb-0">{mentor.name}</h3>
                                    <h3 className="text-medium font-semibold flex text-blue-900 justify-center mt-2">{mentor.role}</h3>
                                    <ul className=" flex justify-center w-full mt-2">
                                        <li className="text-blue-600"> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillLinkedin className="mr-1" ></AiFillLinkedin>
                                                </a>
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    ))
                }
            </div>
        </div>

    )
}