import Link from "next/link";
import InstagramIcon from "../public/images/icons/instagram.svg";
import FacebookIcon from "../public/images/icons/facebook.svg";

export default function SocialLinks({ textHidden } = props) {
	return (
		<div>
			<Link href="https://www.instagram.com/zjedzmy_troche_slodkosci/">
				<a className="flex items-center my-6 transition-colors hover:text-pink-500">
					<InstagramIcon className="h-6 fill-current"></InstagramIcon>
					{textHidden || <p className="pl-4 text-sm">Instagram</p>}
				</a>
			</Link>
			<Link href="https://www.facebook.com/zjedzmytrocheslodkosci/">
				<a className="flex items-center my-6 transition-colors hover:text-pink-500">
					<FacebookIcon className="h-6 fill-current"></FacebookIcon>
					{textHidden || <p className="pl-4 text-sm">Facebook</p>}
				</a>
			</Link>
		</div>
	);
}
