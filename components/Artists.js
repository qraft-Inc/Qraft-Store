import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from 'axios'
import { AiFillHeart, AiFillEye } from 'react-icons/ai'

export default function Artist({ photos }) {

  return (
    <>
      <div className="h-auto container mx-auto mt-20 md:space-y-8 md:mt-8 md:mb-8">
        <h1 className="text-center text-4xl md:text-5xl mt-24 leading-normal font-normal underline underline-offset-8 ">Artists</h1>
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <div className="flex justify-center">
              <div className="  rounded-tr-[190px] shadow-lg bg-white max-w-sm shadow-xl">
                <div className="overflow-hidden transform transition-500">
                  <Link href={`track/${photo.id}`} key={photo.id}>
                    <a>
                      <img className="rounded-tr-[190px] rounded-bl-[190px] object-cover h-96 w-full "
                        src={photo.attributes?.file?.data?.attributes?.formats?.small?.url} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="flex justify-around items-center mt-2 mb-2 font-semibold">
                  <div className="flex space-x-2">
                    <div className="rounded-full overflow-hidden w-8 h-8">
                      <img src={photo.attributes?.file?.data?.attributes?.formats?.thumbnail?.url} />
                    </div>
                    <h2>{photo.attributes.title}</h2>
                  </div>
                  <div className="flex space-x-4">
                    <AiFillHeart className="cursor-pointer hover:fill-[#C22C4E] " />
                    <AiFillEye className="cursor-pointer hover:fill-[#C22C4E] " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

