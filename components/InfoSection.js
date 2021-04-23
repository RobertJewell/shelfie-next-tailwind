import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const containerFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const fadeInUp = {
	initial: { y: 60, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
};

export default function InfoSection({
	title,
	bgColor,
	direction,
	imageSource,
	imageAlt,
	pageLink,
	children,
	backLink,
} = props) {
	return (
		<section
			className={`container ${bgColor} flex flex-col justify-center h-screen px-6 py-4 mx-auto overflow-hidden md:px-12 min-h-500 sm:max-h-600 snap-center`}
		>
			<div className={`flex ${direction} items-center`}>
				<motion.div
					variants={containerFade}
					initial="initial"
					animate="animate"
					className="flex flex-col"
				>
					{backLink && (
						<motion.div
							variants={fadeInUp}
							className="flex items-center justify-center w-12 h-12 text-pink-500 transition-colors bg-pink-200 rounded-full hover:bg-pink-300"
						>
							<Link href={backLink} scroll={false}>
								<a className="flex items-center justify-center w-full h-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 19l-7-7m0 0l7-7m-7 7h18"
										/>
									</svg>
								</a>
							</Link>
						</motion.div>
					)}
					{title && (
						<motion.h1
							variants={fadeInUp}
							className="my-8 font-serif text-5xl text-pink-500 sm:text-6xl"
						>
							{title}
						</motion.h1>
					)}
					<motion.div
						variants={fadeInUp}
						className="font-serif text-sm text-gray-700 "
					>
						{children}
					</motion.div>
				</motion.div>
				{/* render only if there's an image source  */}
				{imageSource !== undefined && (
					// If it's flex-row, move it to the right a bit, else, add some padding on the right
					// This is ugly, and only works from horizontal flex
					<motion.div
						variants={fadeInUp}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.8 }}
						className={`relative hidden  ${
							direction === "flex-row" ? "top-12 left-6" : " top-12 right-6"
						} lg:px-12 md:block`}
					>
						<div className="border-4 border-pink-200 rounded-full w-80 h-80 "></div>
						<Image
							className="object-contain w-80 h-80"
							src={imageSource}
							alt={imageAlt}
							layout="fill"
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
}
