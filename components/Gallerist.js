import Image from "next/image"

export default function Gallerist() {
    return (
        <>
            <div className="p-2 pl-6 pr-5 xl:pl-8 xl:pr-8">
                <Image
                    src="https://res.cloudinary.com/filipe256/image/upload/v1643548489/qraftstore/JOE_7142_copy_wflak0.jpg"
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