import Image from "next/image";

// data to be displayed on each mentor card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554598/qraftstore/DSC_1856_copy_amahw5.jpg",

    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554608/qraftstore/IMG_6483_niaefu.jpg",

    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554579/qraftstore/JOE_7153_copy_rm6y2s.jpg",

    },
    {
        id: 4,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554579/qraftstore/DSC_1928_copy_rkiden.jpg",

    },
    {
        id: 5,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554578/qraftstore/DSC_1950_copy_dtyvli.jpg",
    
    },
    {
        id: 6,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554426/qraftstore/IMG_6511_vp3tuz.jpg",

    },
    {
        id: 7,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554412/qraftstore/DSC_1980_copy_oh6evu.jpg",
   
    },
    {
        id: 8,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554413/qraftstore/IMG_5187_n0wtaj.jpg",
 
    },
    {
        id: 9,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554412/qraftstore/DSC_1990_bhukrv.jpg",
 
    },
    {
        id: 10,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172211/qraftstore/team_qraftacademy_boqbc4.jpg",
 
    },
    {
        id: 11,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554426/qraftstore/IMG_6511_vp3tuz.jpg",

    },
    {
        id: 12,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554529/qraftstore/DSC_1687_copy_f1gpsc.jpg",
    
    },
    {
        id: 13,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1643554538/qraftstore/JOE_7158_copy_pnmmmj.jpg",
    
    }
]

export default function OurTeam() {
    return (
        // start of team area
        <div className="mb-6 pb-4 px-6 sm:px-9">
                <h2 className="font-bold text-blue-900  text-4xl mb-4 mt-20">Art And Tech Expo</h2>
                <p className="font-normal text-gray-700 text-xl mb-14">Awards , Fundraising , Artists , Technologists , Enthusiasts , Youths ,Founders , Investors , Qraft Inc Anniversary</p>
                <div className=" mt-6 grid gap-y-6 md:grid-cols-4 md:gap-x-10  sm:grid-cols-2 sm:gap-10 ">
                {
                    data.map(mentor => (
                        <div key={mentor.id} className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <Image 
                                            src={mentor.courseImg} alt={mentor.altText} 
                                            width={250}
                                            height={250}
                                            quality={100}
                                            className="flex justify-center"
                                        />
                                </div>
                            </div>
                    </div>
                    ))
                }
            </div>
        </div>
        // end of team area
    )
}