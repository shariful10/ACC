import Image from "next/image";
import tv from "@/images/tv.png";
import tv2 from "@/images/tv2.png";

const Gallery = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4">
			<Image src={tv} alt="tv" />
			<Image src={tv2} alt="tv" />
			<Image src={tv} alt="tv" />
			<Image src={tv2} alt="tv" />
		</div>
	);
};

export default Gallery;
