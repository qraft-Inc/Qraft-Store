import { React, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/slider.module.css';
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'
import Image from "next/image";
import Link from "next/link";



export default function Craft({ photos }) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <AiFillRightCircle size="2.5rem" />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <AiFillLeftCircle size="2.5rem" />
      </div>
    )
  }
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {

    infinite: true,
    speed: 200,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: 50,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        }
      }
    ]
  };
  return (
    <>
      <section className="xl:container md:mx-auto	mt-14 pb-0 md:pt-20 md:pb-4" id="courses">
        <Slider {...settings}>
          {photos.map((photo, i) => (
            <div key={i} className={i === imageIndex ? styles.activeSlide : styles.slide}>
              <a>
                <div className={styles.img}>
                  {/* <img alt={photo.alt} src={photo.src} /> */}

                  <Image
                    alt={photo.title}
                    src={`https://qraftstore.herokuapp.com${photo.file.formats.small.url}`}
                    width={photo.file.formats.small.width}
                    height={photo.file.formats.small.height}
                  />

                </div>
              </a>
            </div>

          ))}
        </Slider>
      </section>
    </>
  );
}