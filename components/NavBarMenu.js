import React, { useState } from "react";

const NavBarMenu = () => {
	const [open, setOpen] = useState(false);

	const dropdownPanel = (
		<div className="h-full ">
			<div className="absolute p-4 mt-2 bg-white rounded shadow-lg top-6 ring-2 ring-pink-200">
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
			className="relative w-24 pb-8 cursor-pointer"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="absolute flex flex-row justify-center w-24 text-gray-600 ">
				<li>Menu</li>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="relative w-6 h-4 text-gray-600 top-0.5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={3}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
			{open && dropdownPanel}
		</div>
	);
};

export default NavBarMenu;
