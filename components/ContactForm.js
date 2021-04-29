import { motion } from "framer-motion";

const fadeInUp = {
	initial: { y: 60, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
};

export default function ContactForm() {
	return (
		<form className="w-full max-w-lg mx-auto mt-12" action="">
			<motion.div className="flex flex-wrap mb-6 -mx-3" variants={fadeInUp}>
				<div className="w-full px-3 md:mb-0">
					<label
						className="block mb-2 text-sm font-bold tracking-wide text-gray-600 "
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="block w-full px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-pink-500"
						id="name"
						type="name"
						name="name"
						placeholder=""
					/>
				</div>
			</motion.div>
			<motion.div className="flex flex-wrap mb-6 -mx-3" variants={fadeInUp}>
				<div className="w-full px-3">
					<label
						className="block mb-2 text-sm font-bold tracking-wide text-gray-600 "
						htmlFor="email"
					>
						E-mail
					</label>
					<input
						className="block w-full px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-pink-500"
						type="email"
						name="email"
						id="email"
						autoComplete="email"
					/>
				</div>
			</motion.div>
			<motion.div className="flex flex-wrap mb-6 -mx-3" variants={fadeInUp}>
				<div className="w-full px-3">
					<label
						className="block mb-2 text-sm font-bold tracking-wide text-gray-600 "
						htmlFor="grid-password"
					>
						Message
					</label>
					<textarea
						className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none resize-none rounded-xl no-resize focus:outline-none focus:bg-white focus:border-pink-500"
						id="message"
						name="message"
					></textarea>
				</div>
			</motion.div>
			<input
				type="checkbox"
				name="_honeypot"
				style={{ display: "none" }}
				tabindex="-1"
				autocomplete="off"
			/>
			<motion.div className="md:flex md:items-center" variants={fadeInUp}>
				<div className="md:w-1/3">
					<button
						className="px-6 py-2 font-bold text-white bg-pink-500 shadow-lg rounded-xl hover:bg-pink-600 focus:shadow-outline focus:outline-none"
						type="submit"
					>
						Send
					</button>
				</div>
				<div className="md:w-2/3"></div>
			</motion.div>
		</form>
	);
}
