import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";


//    format money with commas
function formatMoney(n) {
  return "shs " + (Math.round(n * 100) / 100).toLocaleString();
}
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
export default function Designers({ photos }) {


  return (
    <>

      <div className="h-auto container mx-auto mt-20 md:space-y-8 md:mt-8 md:mb-8">
      <h1 className="font-black text-center text-sm md:text-2xl mt-24">UX/UI Designers</h1>
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="flex flex-col">
              <Link href={`gallery/${photo.id}`}>
                <a>
                  <img
                    src={
                      photo.attributes?.file?.data?.attributes?.formats?.medium
                        ?.url
                    }
                  />
                </a>
              </Link>
              <div className="flex justify-between px-4 font-semibold">
                <div className="flex flex-col">
                  <h2>{photo.attributes.title}</h2>
                  {/* <span>{photo.attributes.size}</span> */}
                </div>
                <span>{formatMoney(photo.attributes.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
