import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer({ bgColor, footerColor, margin } = props) {
	return (
		<div className={`${bgColor} flow-root mt-auto`}>
			<footer
				className={`flow-root ${
					margin && "mt-16"
				} text-sm  rounded-t-2xl ${footerColor}`}
			>
				<div className="container flex flex-col items-center justify-between px-6 mx-auto text-gray-600 sm:px-6 md:px-12 sm:flex-row">
					<SocialLinks></SocialLinks>
					<div className="text-center">
						<p className="mt-2 ">zjedzmy.troche.slodkosci@onet.pl</p>
						<p className="mt-2 text-xs">
							Zjedzmy Trochę Słodkości - Emilia Sulińska.
							<br />
							Cyprysowa 38, Gdańsk Jasień
							<br />
							NIP: 5833357556
						</p>
					</div>
					<Link href="contact" scroll={true}>
						<a className="px-4 py-3 my-6 text-sm text-pink-500 transition-colors bg-pink-200 rounded-xl hover:bg-pink-300">
							współpraca
						</a>
					</Link>
				</div>
			</footer>
		</div>
	);
}
