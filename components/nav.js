
import Link from "next/link";
import Image from "next/image";
export default function Nav(){

    const { user } = true;

    // mobile view toggle button
    // const [isMenuVisible, setMenuVisibility] = useState(false);

    return (

        <nav className="bg-black text-white fixed left-0 right-0 top-0 z-50">
            <div className="px-8 mx-auto">
                <div className="flex justify-between">

                    {/* logo */}
                    <div className="flex items-center">
                        <Link href="/"><a><Image src="/img/logo.png" alt="Qraf Academy" width={90} height={62} /></a></Link>
                        {user && <Link href="/dashboard"><a className="ml-8 hover:border-b-2 border-blue-400">Dashboard</a></Link>}
                    </div>

                    {/* primary nav */}
                    <div className="flex space-x-10 items-center">
                        <div className="hidden lg:flex space-x-10">
                            <Link href="/"><a className="hover:border-b-2 border-blue-400 py-1 ">Home</a></Link>
                            <Link href="/about"><a className="hover:border-b-2 border-blue-400 py-1">About Us</a></Link>
                            <Link href="/tracks"><a className="hover:border-b-2 border-blue-400 py-1">Tracks</a></Link>
                            <Link href="/careers"><a className="hover:border-b-2 border-blue-400 py-1">Careers</a></Link>
                            <Link href="/contact"><a className="hover:border-b-2 border-blue-400 py-1">Contact Us</a></Link>
                            {!user && <Link href="/api/auth/login"><a className="rounded-lg bg-[#4092CF] text-base px-3 py-2 hover:bg-blue-400 transition duration-300">Login/Signup</a></Link>}
                        </div>

                        {user && (
                            <>
                                {/*secondary nav */}
                                <div className="flex items-center space-x-4 ">
                                    {/* dashboard */}
                                    <Link href="/dashboard"><a><AiFillDashboard size="1.5rem" /></a></Link>

                                    {/* chat */}
                                    <Link href="/dashboard"><a><IoIosChatbubbles size="1.5rem" /></a></Link>

                                    {/* notification */}
                                    <Link href="/dashboard"><a><MdNotifications size="1.5rem" /></a></Link>

                                    {/* profile picture */}
                                    <div className="rounded-full border-2 border-[#4092CF] overflow-hidden w-12 h-12">
                                        <img className="" src={user.picture} alt={user.name} />
                                    </div>
                                    <Link href="/api/auth/logout"><a className="hidden lg:flex  rounded-lg bg-[#4092CF] text-base px-3 py-2 hover:bg-blue-400 transition duration-300">Logout</a></Link>
                                </div>
                            </>
                        )}

                        {/* toggle button */}
                        <div className="lg:hidden flex items-center ">
                            <button className="toggle-menu-btn" onClick={() => { setMenuVisibility(!isMenuVisible) }}>
                                {/*<HiOutlineMenuAlt2 size="2.5rem" className="hover:border" />*/}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            {/*<div className={`${isMenuVisible ? 'none' : 'hidden'} lg:hidden flex flex-col px-4 space-y-5 mb-5`}>*/}
            {/*    <Link href="/"><a className="border-b">Home</a></Link>*/}
            {/*    <Link href="/about"><a className="border-b">About Us</a></Link>*/}
            {/*    <Link href="/tracks"><a className="border-b">Tracks</a></Link>*/}
            {/*    <Link href="/careers"><a className="border-b">Careers</a></Link>*/}
            {/*    <Link href="/contact"><a className="border-b">Contact Us</a></Link>*/}
            {/*    {!user && <Link href="/api/auth/login"><a className="rounded-lg text-xs bg-[#4092CF] px-1 py-1 w-min">Login/Signup</a></Link>}*/}
            {/*    {user && <Link href="/api/auth/logout"><a className="rounded-lg text-xs bg-[#4092CF] px-1 py-1 w-min">Logout</a></Link>}*/}
            {/*</div>*/}
        </nav>

    );
}