import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState, useRef } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";

export default function Navbar() {
  //get loggedIn user
  const { user } = useUser();

  // mobile view menu
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    //close mobile menu on click
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuVisibility(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      ref={menuRef}
      className="bg-black text-white fixed left-0 right-0 top-0 z-50 h-20"
    >
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <div className="flex items-center">
            <div>
              <Link href="https://www.qraftstore.com/">
                <a>
                  <Image
                    src="https://res.cloudinary.com/dwa3soopc/image/upload/v1618146785/qraft%20/Artboard_4_copy_6_cxz4qt.png"
                    alt="Qraft Academy"
                    layout="fixed"
                    width={90}
                    height={70}
                  />
                </a>
              </Link>
            </div>
            {/* {user && <Link href="#"><a className=" ml-4 hidden lg:flex hover:border-b-2 border-blue-400">Dashboard</a></Link>} */}
          </div>

          {/* primary nav*/}
          <div className="flex space-x-10 items-center">
            <div className="hidden lg:flex space-x-10">
              {/* <Link href="https://www.qraftstore.com/"> */}
              <Link href="http://localhost:3000/">
                <a className="hover:border-b-2 border-blue-400 py-1 ">Home</a>
              </Link>
              {/* <Link href="https://www.qraftstore.com/about"> */}
              <Link href="http://localhost:3000/about">
                <a className="hover:border-b-2 border-blue-400 py-1">
                  About Us
                </a>
              </Link>
              {/* <Link href="https://www.qraftstore.com/contact"> */}
              <Link href="http://localhost:3000/contact">
                <a className="hover:border-b-2 border-blue-400 py-1">Contact Us</a></Link>
              <Link href="#">
                <a className="">
                  {" "}
                  <BsFillCartFill size="2rem" />
                </a>
              </Link>
              {!user && (
                <Link href="/api/auth/login">
                  <a className="rounded-lg bg-[#4092CF] text-base px-3 py-2 hover:bg-blue-400 transition duration-300">
                    Login/Signup
                  </a>
                </Link>
              )}
            </div>

            {user && (
              <>
                {/*SECONDARY NAV*/}
                <div className="flex items-center space-x-1 md:space-x-4">
                  {/* PROFILE PIC */}
                  <div className="rounded-full border-2 border-[#4092CF] overflow-hidden w-12 h-12">
                    <img className="" src={user.picture} alt={user.name} />
                  </div>
                  <Link href="/api/auth/logout">
                    <a className="hidden lg:flex  rounded-lg bg-[#4092CF] text-base px-3 py-2 hover:bg-blue-400 transition duration-300">
                      Logout
                    </a>
                  </Link>
                </div>
              </>
            )}

            {/*TOGGLE BUTTON*/}
            <div className="lg:hidden flex items-center ">
              <button
                className="toggle-menu-btn"
                onClick={() => setMenuVisibility(!isMenuVisible)}
              >
                <HiOutlineMenuAlt2 size="2.5rem" className="hover:border" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE MENU */}
      {isMenuVisible && (
        <div
          className="lg:hidden flex flex-col px-4 space-y-6 pb-4 pt-4 bg-black"
          onClick={() => setMenuVisibility(!isMenuVisible)}
        >
          {user && (
            <div className="flex justify-around">
              <Link href="#">
                <a>
                  <AiFillDashboard size="1.5rem" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <IoIosChatbubbles size="1.5rem" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <MdNotifications size="1.5rem" />
                </a>
              </Link>
            </div>
          )}
          <Link href="https://www.qraftstore.com">
            <a className="border-b">Home</a>
          </Link>
          <Link href="https://www.qraftstore.com/about">
            <a className="border-b">About Us</a>
          </Link>
          <Link href="https://www.qraftstore.com/contact">
            <a className="border-b">Contact Us</a>
          </Link>

          {!user && (
            <Link href="/api/auth/login">
              <a className="border-b">Login/Signup</a>
            </Link>
          )}
          {user && (
            <Link href="/api/auth/logout">
              <a className="border-b">Logout</a>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
