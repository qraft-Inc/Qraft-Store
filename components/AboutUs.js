import Link from "next/link";
import Image from 'next/image';

export default function AboutUs() {
    return (
        //start of  about area 
        <div className="flex justify-items-center text-gray-700 justify-center items-center font-semiMedium text-lg font-sans text-left tracking-normal leading-relaxed mb-6 lg:mb-0">
            <div className="grid max-w-xl lg:min-w-full lg:grid-cols-2 gap-x-8 justify-between min-h-full px-10">
                <div className="">
                    <div>
                        <h3 className="text-4xl font-bold mb-6 lg:mt-8 text-blue-900">
                            What
                            <span className="text-light-blue"> QraftStore </span>
                            <span className="">Is </span>
                            For You
                        </h3>
                        <p className="mb-3">
                            Qraftstore is a subsidiary enterprise of Qraft Mind which began in June 2018, Rachel the Founder after graduating from Kyambogo University with a Bachelor&#39;s Degree in
                            social sciences, she devoted her time to career Development
                            research and social entrepreneurship, she was inspired to put
                            the ideas that her, and her friends Carol and Marcella had
                            dreamed of since University into action, that is, Mindset
                            transformation. Qraft Mind as a name was inspired from the
                            concept of Crafting people&#39;s Mindset into better attitude,
                            values, knowledge and skills.
                        </p>
                        <p className="mb-3">
                            Art and craft is one of the things that spark creativity in ones life so its is very important for people to learn it at any moment in life and we feel everyone has a right to a chance in art
                        </p>
                    </div>
                </div>

                {/*start of about image area*/}
                <div classsName="flex justify-center">
                    <div className="flex justify-center ">
                        <Image
                            src="https://res.cloudinary.com/filipe256/image/upload/v1643554413/qraftstore/IMG_5187_n0wtaj.jpg"
                            alt="Team Qraft Academy - About us image background"
                            width={550}
                            height={450}
                            quality={100}
                            objectFit="cover"
                            className="object-cover mt-4 md:object-none"
                        />
                    </div>
                </div>
                {/* about image area end */}

            </div>
        </div>
        // end of about area 
    );
}
