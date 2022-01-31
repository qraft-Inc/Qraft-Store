import Image from "next/image"
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import CourseList from "../components/CourseList";
import MentorList from "../components/MentorList";

export default function Trucks() {

    //get loggedIn user
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>Master Classes</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            {/* hero section */}
            <header className="h-screen">
                <div className=" absolute inset-0 overflow-hidden top-12 brightness-50">
                    <Image
                        alt="Background Image"
                        src="https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>

                <div className=" py-44 text-white text-center z-10 relative md:w-4/5 md:ml-32">

                    <h1 className="text-3xl font-extrabold leading-10 tracking-tight sm:leading-none md:text-6xl lg:text-7xl">
                        <span className="inline-block md:block">Great talent and products are made, not born</span>
                    </h1>

                    <div className="mx-auto mt-5 md:mt-12 md:max-w-xl lg:text-lg mb-12">
                        Collaborate with industry experts and earn badges that matter, while building products that actually fix the world&#39;s biggest bugs
                    </div>

                </div>
            </header>

            {/* content section */}
            <div className="flex flex-col space-y-4 p-8">

                <CourseList />

                <MentorList />

            </div>
        </>
    );
}

