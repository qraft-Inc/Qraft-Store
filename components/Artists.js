import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from 'axios'
import { AiFillHeart, AiFillEye } from 'react-icons/ai'
/*
//fetch data from db
export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/api/qraftstores?populate=*");
  const photos = await res.data.data;

  return {
    props: { photos },
  };
}
*/
export default function Artist({ photos }) {

  return (
    <>
      <div className="h-auto container mx-auto mt-20 md:space-y-8 md:mt-8 md:mb-8">
        <h1 className="font-black text-center text-sm md:text-2xl mt-24">Artists</h1>
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <div className="rounded-bl-[190px] rounded-tr-[190px] shadow-2xl">
              {/* <div key={photo.id} className="overflow-hidden"> */}
                <Link href={`gallery/${photo.id}`}>
                  <a className="overflow-hidden">
                    <img src={photo.attributes?.file?.data?.attributes?.formats?.medium?.url} className="overflow-hidden"/>
                  </a>
                </Link>
              {/* </div> */}
              <div className="flex justify-between mt-2 font-semibold">
                <div className="flex space-x-2">
                  <div className="rounded-full border-2 border-[#4092CF] overflow-hidden w-8 h-8">
                    <img src={photo.attributes?.file?.data?.attributes?.formats?.medium?.url} />
                  </div>
                  <h2>{photo.attributes.title}</h2>
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

