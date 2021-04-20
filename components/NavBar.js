import React from "react";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
	return (
		<div className="absolute top-0 hidden bg-pink-100 sm:relative sm:block">
			<div className="container px-6 py-1 mx-auto text-gray-600 sm:px-6 md:px-12 sm:py-4">
				<div className="flex flex-row justify-between mx-auto font-serif text-sm ">
					<h1>Logo</h1>
					<ul className="flex flex-row justify-around w-1/2">
						<NavBarMenu></NavBarMenu>
						<li className="w-16 text-center">Galeria</li>
						<li className="w-16 text-center">FAQ</li>
					</ul>
					<p>Social</p>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
