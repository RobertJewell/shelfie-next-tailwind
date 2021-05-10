import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
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

export default function contact() {
	return (
		<motion.div
			className="flex flex-col min-h-screen font-serif text-gray-600"
			variants={containerFade}
			initial="initial"
			animate="animate"
		>
			<NavBar></NavBar>

			<section className="container flex flex-col justify-center flex-1 max-w-lg px-6 mx-auto min-h-700 md:px-12 sm:min-h-400">
				<motion.h1 className="mt-12 text-4xl text-pink-500" variants={fadeInUp}>
					Contact
				</motion.h1>
				<ContactForm></ContactForm>
			</section>

			<Footer footerColor="bg-white" margin={true}></Footer>
		</motion.div>
	);
}
