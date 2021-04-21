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
				title="Cupcakes"
				direction="flex-row"
				imageSource="/images/cupcake.png"
				imageAlt="cupcake"
				backLink="./"
			>
				<p className="mb-6">
					Oprócz tortów zajmuję się również wykonywaniem słodkich babeczek w
					dwóch rozmiarach - <span className="font-bold">mini</span> (na tzw.
					"jeden kęs") oraz w <span className="font-bold">standardowym.</span>
				</p>
				<p className="mb-6">
					Stanowią świetny dodatek na słodki stół. Wykonane są na naturalnych
					składnikach, wykorzystywane jest m.in. masło 82% oraz śmietana 30%.
				</p>
				<p className="mb-6">
					Minimalna ilość zamawianych babeczek w{" "}
					<span className="font-bold">
						standardowym rozmiarze z jednego smaku to 12 sztuk,
					</span>{" "}
					wyjątkiem jest ciasto kokosowe -{" "}
					<span className="font-bold">9 sztuk</span> i ciasto czekoladowe -{" "}
					<span className="font-bold">10 sztuk.</span> Cena zaczyna się od{" "}
					<span className="font-bold">7,5zł</span> za sztukę i zależy od smaku
					oraz dekoracji.
				</p>
				<p className="mb-6">
					Minimalna ilość{" "}
					<span className="font-bold">
						babeczek w wersji mini z jednego smaku to 30 sztuk.
					</span>{" "}
					Cena zaczyna się od <span className="font-bold">3zł</span> za sztukę,
					w przypadku tej wersji nie ma nadzienia, jest ciasto oraz krem.
				</p>
			</InfoSection>
		</motion.section>
	);
}
