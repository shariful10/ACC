import { Nunito_Sans } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "ACC | Since 1986 in Europe",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunitoSans.className}>
				{/* <Navbar /> */}
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
