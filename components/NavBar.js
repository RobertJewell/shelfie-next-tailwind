import React from "react";
import NavBarMenu from "./NavBarMenu";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "../public/images/icons/instagram.svg";
import FacebookIcon from "../public/images/icons/facebook.svg";

const NavBar = () => {
	return (
		<div className="absolute top-0 hidden sm:relative sm:block ">
			<div className="absolute hidden p-4 bg-white rounded-full">
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 bg-pink-500 rounded-full "></div>
			</div>
			<div className="container px-6 mx-auto font-bold text-gray-600 sm:px-6 md:px-12 ">
				<div className="flex flex-row items-center justify-between h-16 mx-auto text-sm ">
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
					<div className="flex flex-row justify-between w-24 p-2 text-center">
						<Link href="https://www.instagram.com/zjedzmy_troche_slodkosci/">
							<a className="p-4 my-6 transition-colors hover:text-pink-500">
								<InstagramIcon className="h-6 fill-current"></InstagramIcon>
							</a>
						</Link>
						<Link href="https://www.facebook.com/zjedzmytrocheslodkosci/">
							<a className="p-4 my-6 transition-colors hover:text-pink-500">
								<FacebookIcon className="h-6 fill-current"></FacebookIcon>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
