import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

// data to be displayed on each mentor card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172203/qraftstore/Andrew_Tugume_nq4evy.jpg",
        name: "Andrew Tugume",
        role: "Software Developer",
        altText: "Andrew Tugume - Software Developer"
    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Rachel_og4v6r.jpg",
        name: "Rachel Ainembabazi",
        role: "Digital Marketer",
        altText: "Rachel Ainembabazi - Digital Marketer"
    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172204/qraftstore/Denny_Wong_cpczks.png",
        name: "Danny Wong",
        role: "Entrepreneur",
        altText: "Danny Wong - Entrepreneur"
    }
]

export default function CourseList() {
    return (
        <div className="mb-6 pb-8 px-0 pt-0">
            <h2 className="font-medium text-blue-900 text-xl">Mentors</h2>
            <div className=" mt-6 grid gap-y-6 md:grid-cols-3 md:gap-x-10  sm:grid-cols-2 sm:gap-10 ">
                {
                    data.map(mentor => (
                        <div key={mentor.id} className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <Image
                                        src={mentor.courseImg} alt={mentor.altText}
                                        width={90}
                                        height={90}
                                        quality={100}
                                        className="flex justify-center"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-2">
                                    <h3 className="text-md font-medium flex justify-center mb-0">{mentor.name}</h3>
                                    <h3 className="text-sm uppercase flex justify-center">{mentor.role}</h3>
                                    <ul className="text-light-blue flex justify-center w-full">
                                        <li className="">
                                            <Link href="#">
                                                <a>
                                                    <AiFillTwitterSquare className="mr-1" ></AiFillTwitterSquare>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <AiFillFacebook className="mr-1"></AiFillFacebook>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <AiFillInstagram className="mr-1"></AiFillInstagram>
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