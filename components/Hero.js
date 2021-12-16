import { Link } from 'react-scroll'
import Image from 'next/image'

export default function Hero() {

  return (
    <>
      <header className="h-screen">

        <div className=" h-full absolute inset-0 top-14 brightness-50">
          <Image
            alt="Background Image"
            src="/img/landing.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-center z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            {/* <span className="inline-block md:block">Online Art</span> */}
            {/* <span className="mt-2 sm:inline-block">Gallery</span> */}
            <span className="inline-block md:block">Find portfolios of top visual creatives and product designers</span>
          </h1>

          <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg mb-12">
          Qraft Store is your online destination to find and showcase creative work and marketplace to the world's best design and visual art creatives
          </div>

          <span className="w-full md:w-auto">
            <Link
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                View Art Work
              </a></Link>
          </span>
        </div>

      </header>
    </>
  )
}
