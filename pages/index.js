import Head from "next/head";
import NavBar from "../components/NavBar";
import Image from "next/image";
import ProductFeature from "../components/ProductFeature";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			className="font-serif bg-pink-100 sm:overflow-y-scroll sm:h-screen snap snap-y snap-mandatory sm:py-0"
		>
			<NavBar></NavBar>
			{/* landing */}
			<section className="container px-6 mx-auto overflow-y-hidden sm: md:px-12">
				<div className="flex flex-col justify-between h-full mx-auto sm:flex-row ">
					<div className="w-full mt-12 text-center sm:my-6 sm:w-1/2 sm:text-left ">
						<h1 className="mt-8 text-5xl text-pink-500 sm:text-6xl ">
							Zjedzmy trochę słodkości
						</h1>
						<h3 className="mt-4 text-sm text-gray-600 sm:text-md">
							Pracownia cukiernicza
						</h3>
						<div className="relative">
							<button className="transition duration-100 ease-in-out bg-pink-500 text-white mt-8 py-2 px-3 rounded-xl sm:absolute hover:-top-0.5 hover:shadow-lg">
								Złóż zamówienie
							</button>
						</div>
					</div>
					<div className="w-full sm:w-1/2">
						<div className="mx-auto mt-12 bg-gray-400 w-80 h-80"></div>
						<div className="absolute"></div>
					</div>
				</div>
			</section>
			{/* About */}
			<section className="h-screen overflow-hidden bg-white sm:max-h-500 sm:min-h-300 snap-center">
				<div className="container flex flex-col items-center justify-around h-full mx-auto sm:justify-center sm:flex-row">
					<div className="relative w-full h-64 mx-auto my-6 ">
						<Image
							className="object-contain w-64 h-64"
							src="/images/cake-naked-01--large.png"
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
				pageLink="/torty"
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
				pageLink="/cupcakes"
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
		</motion.div>
	);
}
