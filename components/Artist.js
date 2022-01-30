import Image from "next/image"

export default function Artist() {
    return (
        <>
            <div className="p-2 pl-6 pr-5 xl:pl-8 xl:pr-8">
                <Image
                    src="https://res.cloudinary.com/filipe256/image/upload/v1641984480/qraftstore/landing_hbcigk.jpg"
                    alt="Artist"
                    width={300}
                    height={320}
                    objectFit="cover"
                    className="object-cover mt-4 md:object-none"
                />
            </div>
        </>
    )
}