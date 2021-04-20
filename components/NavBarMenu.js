import React, { useState } from "react";

const NavBarMenu = () => {
	const [open, setOpen] = useState(false);

	const dropdownPanel = (
		<div className="h-full ">
			<div className="absolute p-4 mt-2 bg-white rounded shadow-lg top-4 ring-2 ring-pink-200 backdrop-filter backdrop-opacity-70 backdrop-blur-md">
				<ul className="-my-2">
					<li className="py-2 cursor-pointer hover:text-pink-600 ">Cakes</li>
					<li className="py-2 cursor-pointer hover:text-pink-600">Cupcakes</li>
					<li className="py-2 cursor-pointer hover:text-pink-600">Deserts</li>
				</ul>
			</div>
		</div>
	);

	return (
		<div
			className="relative w-16 pb-6"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="absolute flex flex-row w-16 text-gray-600 cursor-pointer">
				<li className="text-center">Menu</li>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 m-auto pt-0.5 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
			{open && dropdownPanel}
		</div>
	);
};

export default NavBarMenu;
