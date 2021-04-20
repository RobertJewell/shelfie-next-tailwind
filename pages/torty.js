import NavBar from "../components/NavBar";
import InfoSection from "../components/InfoSection";
import { motion } from "framer-motion";

export default function torty() {
	return (
		<motion.section
			exit={{ opacity: 0 }}
			className="flex flex-col items-center justify-center h-screen max-h-screen font-serif bg-pink-100 min-h-600"
		>
			{/* <NavBar></NavBar> */}
			<InfoSection
				title="Torty"
				direction="flex-row"
				imageSource="/images/cake-naked-01--large.png"
				imageAlt="cake"
				backLink=".#landing-torty"
			>
				<p className="mb-6">
					Torty są wykonane z własnoręcznie przygotowanego biszkoptu (mąka,
					cukier puder, jajka, proszek do pieczenia), kremu na bazie śmietany
					30% i serka mascarpone i frużeliny (przygotowywanej od podstaw w
					pracowni). W moich tortach nie znajdziecie mieszanek cukierniczych,
					gotowych i sztucznych kremów z proszku, frużelin z puszek, śmietany
					roślinnej oraz margaryny!
				</p>
				<p className="mb-6">Minimalna wielkość tortu to 10-11 porcji.</p>
				<p className="mb-6">
					Tort składa się z biszkoptu nadzienia i kremu. Biszkopt zawsze jest
					nasączony syropem cukrowym lub likierem Waszego wyboru. Maksymalnie
					można wybrać jeden rodzaj biszkoptu, dwa rodzaje nadzienia, dwa kremu
					i jeden rodzaj nasączenia.
				</p>
			</InfoSection>
		</motion.section>
	);
}
