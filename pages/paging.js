import Slider from "react-slick";
// import data from "../public/data.json"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'
import styles from '../styles/details.module.css'


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

const settings = {
  customPaging: (i) => {
    return (
      <div className="">
         <Image src={data[i].src} width={2400} height={1598} />
      </div>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  slidesToShow: 1,
  initialSlide: 2,
  autoplaySpeed: 2000,
  speed: 500,
  nextArrow:<NextArrow/>,
  prevArrow:<PrevArrow/>

};
export default function Paging() {

  return (
    <div className="h-full pt-28">
      <div className="container mx-auto relative w-96 h-96">
        <Slider{...settings}>

              {data.map((img, i) => (
          <div>
            <Image src={img.src} width={2400} height={1598} />
          </div>
        ))}

        </Slider>
      </div>
    </div >
  )
}