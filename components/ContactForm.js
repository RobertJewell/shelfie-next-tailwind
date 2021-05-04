import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Framer motion animation variants
const fadeInUp = {
	initial: { y: 60, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
};

export default function ContactForm() {
	// form validation rules
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string().required("Email is required").email("Email is invalid"),
		message: Yup.string().required("Message is required"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	function onSubmit(data) {
		// display form data on success
		console.log(JSON.stringify(data));
		return false;
	}

	return (
		<form
			className="w-full max-w-lg mx-auto mt-12"
			onSubmit={handleSubmit(onSubmit)}
		>
			<motion.div className="flex flex-wrap mb-6 -mx-3" variants={fadeInUp}>
				<div className="w-full px-3 md:mb-0">
					<label
						className="block mb-2 text-sm font-bold tracking-wide text-gray-600 "
						htmlFor="name"
					>
						Name
					</label>
					<input
						className={`block w-full px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-pink-500  ${
							errors.name ? "is-invalid" : ""
						}`}
						id="name"
						type="name"
						name="name"
						placeholder=""
						{...register("name")}
					/>
					<div className="text-red-600 ">{errors.name?.message}</div>
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
						className={`block w-full px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-pink-500 ${
							errors.email ? "is-invalid" : ""
						}`}
						type="text"
						name="email"
						id="email"
						autoComplete="email"
						{...register("email")}
					/>
					<div className="text-red-600">{errors.email?.message}</div>
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
						className={`block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-600 bg-white border border-pink-200 appearance-none resize-none rounded-xl no-resize focus:outline-none focus:bg-white focus:border-pink-500  ${
							errors.message ? "is-invalid" : ""
						}`}
						id="message"
						name="message"
						{...register("message")}
					></textarea>
					<div className="text-red-600">{errors.message?.message}</div>
				</div>
			</motion.div>
			<input
				type="checkbox"
				name="_honeypot"
				style={{ display: "none" }}
				tabIndex="-1"
				autoComplete="off"
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
