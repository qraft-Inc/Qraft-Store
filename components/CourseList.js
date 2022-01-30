import Image from 'next/image';
import GetStarted from './GetStarted';
import Rating from './Rating';
import Link from 'next/link';

// data to be displayed into each course card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643388795/qraftstore/software_development_gz8lpn.jpg",
        courseTitle: "Software Development",
        text1: "Start",
        text2: "07.Mar.2022",
        text3: "3 Months",
        altText: "Software Developers",
        url: "https://www.qraftacademy.com/developers"
    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1641976468/qraftstore/digital_marketing_lotoma.jpg",
        courseTitle: "Digital Marketing",
        text1: "Start",
        text2: "07.March.2022",
        text3: "3 Months",
        altText: "Digital Marketers",
        url: "https://www.qraftacademy.com/marketing"
    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1641976469/qraftstore/product_design_pxlkdh.jpg",
        courseTitle: "UI/UX Design",
        text1: "Start",
        text2: "07.April.2022",
        text3: "3 Months",
        altText: "UI/UX designers",
        url: "https://www.qraftacademy.com/designers"
    }
]

export default function CourseList(props) {
    return (
        <div className="mb-6 py-8 px-0 pt-0">
            <h2 className="font-medium text-blue-900 text-xl">Course List</h2>
            <div className="mt-4 grid gap-y-6 md:gap-x-10 xl:grid-cols-3 sm:grid-cols-2 sm:gap-10">
                {data.map(course => (
                    <div key={course.id} className=" flex justify-center xl:justify-even">
                        <div className=" rounded-lg shadow-2xl max-w-sm xl:max-w-ls hover:-translate-y-2 transform transition-500" >
                            <Image
                                src={course.courseImg}
                                alt={course.altText}
                                width={500}
                                height={500}
                                quality={100}
                                className="rounded-t-lg"
                            />
                            <div className="p-6 pt-0">

                                <h3 className="text-lg font-semibold mb-4 mt-2">{course.courseTitle}</h3>

                                <div className="flex justify-between">
                                    <span className="text-lg font-sm">{course.text1}</span>
                                    <span className="text-lg font-sm">{course.text2}</span>
                                </div>

                                <p className="text-lg font-sm mb-2">{course.text3}</p>

                                <Rating />

                                <div className="flex justify-center my-4 mt-8">
                                    <GetStarted props={course.url} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
