import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductFeature({
	title,
	bgColor,
	direction,
	imageSource,
	imageAlt,
	pageLink,
	children,
} = props) {
	return (
		<section
			className={`h-screen py-4 overflow-hidden ${bgColor} sm:max-h-600 px-6
			md:px-12 sm:min-h-500 snap-center`}
		>
			<div
				className={`container flex flex-col items-center justify-around h-full mb-6 mx-auto align-middle ${
					direction === "sm:flex-row-reverse" && "lg:pl-36"
				} 
				${direction}`}
			>
				<div
					className={`relative w-56 h-56 mx-auto my-6 sm:h-64 sm:w-64 xl:w-80 xl:h-80 ${
						direction === "sm:flex-row" && "sm:ml-0 lg:mx-auto"
					}`}
				>
					<div className="absolute w-56 h-56 mt-4 border-4 border-pink-200 rounded-full sm:h-64 sm:w-64 xl:w-80 xl:h-80"></div>
					<Image
						className="object-contain"
						src={imageSource}
						alt={imageAlt}
						layout="fill"
					/>
				</div>

				<div className="z-10 flex flex-col justify-center text-center h-3/5 sm:h-full sm:w-1/2 sm:text-left">
					<h1 className="mb-8 text-5xl text-pink-500 sm:text-6xl ">{title}</h1>
					{children}
					<div className="mt-4">
						<Link href={pageLink} scroll={false}>
							<a className="px-4 py-3 mt-4 text-sm text-pink-500 transition-colors bg-pink-200 rounded-xl hover:bg-pink-300">
								Details
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
