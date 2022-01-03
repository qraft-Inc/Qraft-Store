import React from "react";
import Artist from "./Artists";
import Designers from "./Designers"
import Link from "next/link";

export default function NavTabs() {
    return (
        <div className="mt-24">
            <ul className="flex border-b justify-center">
                <li className="-mb-px mr-1">
                    <Link href="/shots/artists">
                        <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">Artists</a>
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/shots/designers">
                        <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">UX/UX Designers</a>
                    </Link>
                </li>
            </ul>
        </div >
    );
}
