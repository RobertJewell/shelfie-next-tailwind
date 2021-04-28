import React from "react";
import NavBarMenu from "./NavBarMenu";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="absolute top-0 hidden sm:relative sm:block ">
			<div className="container px-6 mx-auto font-bold text-gray-600 sm:px-6 md:px-12 ">
				<div className="flex flex-row items-center justify-between h-16 mx-auto font-serif text-sm ">
					<Link href="/">
						<a className="self-start">
							<div className="h-12 overflow-hidden bg-pink-200 rounded-b-full ">
								<Image
									src="/images/logo--navbar.png"
									alt="Logo"
									width={96}
									height={48}
								></Image>
							</div>
						</a>
					</Link>
					<ul className="flex flex-row items-center justify-around w-1/2">
						<NavBarMenu></NavBarMenu>
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">Galeria</a>
							</Link>
						</li>
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">FAQ</a>
							</Link>
						</li>{" "}
					</ul>
					<Link href="/">
						<a className="w-24 p-2 text-center">Social</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
