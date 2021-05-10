import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductFeature from "../components/ProductFeature";

export default function Home() {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			className="font-serif bg-pink-100 sm:overflow-y-scroll sm:h-screen snap snap-y snap-mandatory sm:py-0"
		>
			<NavBar></NavBar>
			{/* landing */}
			<section className="container flex justify-center px-6 mx-auto overflow-x-hidden sm:overflow-x-visible min-h-700 md:px-12 sm:min-h-400">
				<div className="relative flex flex-col items-center justify-around mx-auto sm:flex-row ">
					{/* Text */}
					<div className="z-10 w-full mt-16 text-center sm:w-1/2 sm:text-left sm:mt-0 sm:mb-12">
						<h1 className="mx-auto text-5xl text-pink-500 sm:text-6xl max-w-4/5 sm:mx-0 sm:max-w-none">
							Zjedzmy trochę słodkości
						</h1>
						<h3 className="mt-6 text-sm text-gray-600 sm:text-md">
							Pracownia cukiernicza
						</h3>
						<div className="mt-12">
							<Link href="contact" scroll={false}>
								<a className="px-4 py-3 my-4 text-sm text-white transition-colors bg-pink-500 rounded-xl hover:bg-pink-600">
									Złóż zamówienie
								</a>
							</Link>
						</div>
					</div>
					{/* Image */}
					<div className="relative overflow-visible w-96 h-80 bottom-4 sm:w-96 sm:h-96">
						<div className="absolute mx-auto -bottom-4 h-120 sm:h-full sm:right-0 w-140 -inset-x-1/4 sm:bottom-auto">
							<Image
								className="object-contain"
								src="/images/cakeFeature.png"
								alt="Cake"
								layout="fill"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* About */}
			<section className="h-screen px-6 overflow-hidden bg-white sm:max-h-500 sm:min-h-300 md:px-12 snap-center">
				<div className="container flex flex-col items-center justify-around h-full mx-auto sm:justify-center sm:flex-row">
					<div className="relative w-full h-64 mx-auto my-6 px-1/3">
						<Image
							className="object-contain rounded-2xl"
							src="/images/shelfie.jpg"
							alt="cake"
							layout="fill"
						/>
					</div>
					<div className="px-6 font-serif text-sm text-gray-600 md lg:pr-24">
						<h3 className="hidden mb-6 text-xl font-bold text-pink-500 sm:block">
							Hey!
						</h3>
						<p className="mb-6">
							Nazywam się Emilia i moją pasją jest osładzanie ludziom życia.
							Zjedzmy Trochę Słodkości zaczęło się jako blog, a od kilku lat
							moja pasja przerodziła się w pełnoetatowy zawód.
						</p>
						<p className="mb-6">
							Słodkości wykonane w pracowni mają w składzie tylko naturalne
							składniki najwyższej jakości od zaufanych dostawców. Jestem
							zdania, że tylko świeże, najlepszej jakości produkty mogą być
							gwarancją pysznego smaku.
						</p>
						<p className="mb-6">
							Z przyjemnością wykonam słodkości na ważne dla Was wydarzenie.
							Polecam zapoznać się z dostępnymi opcjami i w razie pytań
							zapraszam do kontaktu.
						</p>
					</div>
				</div>
			</section>

			<ProductFeature
				bgColor="bg-pink-100"
				direction="sm:flex-row"
				imageSource="/images/cake-naked-01--large.png"
				imageAlt="Naked Cake"
				pageLink="/info-torty"
				title="Torty"
				id="landing-torty"
			>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					Torty są wykonane z własnoręcznie przygotowanego biszkoptu (mąka,
					cukier puder, jajka, proszek do pieczenia), kremu na bazie śmietany
					30% i serka mascarpone i frużeliny (przygotowywanej od podstaw w
					pracowni).
				</p>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					W moich tortach nie znajdziecie mieszanek cukierniczych, gotowych i
					sztucznych kremów z proszku, fruzelin z puszek, śmietany roślinnej
					oraz margaryny!
				</p>
			</ProductFeature>

			<ProductFeature
				bgColor="bg-white"
				direction="sm:flex-row-reverse"
				imageSource="/images/cupcake.png"
				imageAlt="Tasty cupcake"
				pageLink="/info-cupcakes"
				title="cupcakes"
			>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					Cupcake ipsum dolor sit amet fruitcake cookie cake. Dragée ice cream
					cake icing brownie sesame snaps. Chocolate bar macaroon sweet roll
					pudding bonbon. Jelly beans pudding topping.
				</p>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					Tiramisu cotton candy sesame snaps gingerbread halvah wafer gummies
					soufflé. Cookie bonbon sweet cheesecake sweet gummi bears.
				</p>
			</ProductFeature>

			<ProductFeature
				bgColor="bg-pink-100"
				direction="sm:flex-row"
				imageSource="/images/sweets/cakesicle-01.png"
				imageAlt="Słodkości"
				pageLink="/info-slodkosci"
				title="Słodkości"
			>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					Cupcake ipsum dolor sit amet fruitcake cookie cake. Dragée ice cream
					cake icing brownie sesame snaps. Chocolate bar macaroon sweet roll
					pudding bonbon. Jelly beans pudding topping.
				</p>
				<p className="max-w-sm mb-4 ml-2 text-sm text-gray-600">
					Tiramisu cotton candy sesame snaps gingerbread halvah wafer gummies
					soufflé. Cookie bonbon sweet cheesecake sweet gummi bears.
				</p>
			</ProductFeature>

			<Footer bgColor="bg-pink-100" footerColor="bg-white"></Footer>
		</motion.div>
	);
}
